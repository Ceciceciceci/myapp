import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import bagImgSrc from '../../images/breadobag.png';
import bagMaskSrc from '../../images/breadobagref.png';
import breado1 from '../../images/breado1.png';
import breado2 from '../../images/breado2.png';
import breado3 from '../../images/breado3.png';
import breado4 from '../../images/breado4.png';
import breado5 from '../../images/breado5.png';

const BREADOS = [breado1, breado2, breado3, breado4, breado5];
const BAG_ASPECT = 754 / 927;
const RESTITUTION = 0.94;
const MAX_SPEED = 4.2;
const PLAYABLE_INSET_PX = 25;
const NORMAL_DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [0.707, 0.707],
  [0.707, -0.707],
  [-0.707, 0.707],
  [-0.707, -0.707],
];

const Stage = styled.section`
  position: relative;
  margin: 4rem auto 0;
  width: min(100%, 440px);
  aspect-ratio: ${BAG_ASPECT};
  touch-action: none;
  user-select: none;
`;

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: block;
`;

const Bag = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  z-index: 1;
`;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function isOrangePixel(r, g, b, a) {
  // Include soft anti-aliased edge pixels from breadobagref.png
  if (a < 70) return false;
  // Skip white outline / bag plastic highlights
  if (r > 230 && g > 230 && b > 200) return false;
  if (Math.min(r, g, b) > 210 && Math.abs(r - g) < 35) return false;
  // Orange / amber fill (and warmer yellow-orange near the clip)
  return r >= 145 && r - b >= 35 && g <= r + 15 && b < 170;
}

function erodeMask(src, width, height, radius) {
  if (radius <= 0) return src;
  const out = new Uint8Array(src.length);
  const r2 = radius * radius;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let ok = 1;
      for (let oy = -radius; oy <= radius && ok; oy += 1) {
        for (let ox = -radius; ox <= radius; ox += 1) {
          if (ox * ox + oy * oy > r2) continue;
          const nx = x + ox;
          const ny = y + oy;
          if (
            nx < 0 ||
            ny < 0 ||
            nx >= width ||
            ny >= height ||
            !src[ny * width + nx]
          ) {
            ok = 0;
            break;
          }
        }
      }
      out[y * width + x] = ok;
    }
  }
  return out;
}

function maskBounds(inside, width, height) {
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  let count = 0;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (!inside[y * width + x]) continue;
      count += 1;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }

  return { inside, minX, minY, maxX, maxY, count };
}

function buildMask(maskImg) {
  const canvas = document.createElement('canvas');
  canvas.width = maskImg.naturalWidth || maskImg.width;
  canvas.height = maskImg.naturalHeight || maskImg.height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(maskImg, 0, 0);
  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const base = new Uint8Array(width * height);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4;
      if (isOrangePixel(data[i], data[i + 1], data[i + 2], data[i + 3])) {
        base[y * width + x] = 1;
      }
    }
  }

  return { base, width, height, ...maskBounds(base, width, height) };
}

function insetPlayableMask(rawMask, drawW) {
  const radius = Math.max(
    1,
    Math.round(PLAYABLE_INSET_PX * (rawMask.width / drawW)),
  );
  const inside = erodeMask(rawMask.base, rawMask.width, rawMask.height, radius);
  return maskBounds(inside, rawMask.width, rawMask.height);
}

/** Map stage/canvas point into mask pixel space using the object-fit:contain rect. */
function toMaskPixel(mask, x, y) {
  const mx = Math.round(((x - mask.offsetX) / mask.drawW) * mask.width);
  const my = Math.round(((y - mask.offsetY) / mask.drawH) * mask.height);
  return { mx, my };
}

function maskContains(mask, x, y) {
  if (!mask?.count) return false;
  const { mx, my } = toMaskPixel(mask, x, y);
  if (mx < 0 || my < 0 || mx >= mask.width || my >= mask.height) return false;
  return mask.inside[my * mask.width + mx] === 1;
}

function inwardNormal(mask, x, y) {
  let nx = 0;
  let ny = 0;
  const step = Math.max(3, Math.min(mask.drawW, mask.drawH) * 0.015);

  NORMAL_DIRS.forEach(([dx, dy]) => {
    if (maskContains(mask, x + dx * step, y + dy * step)) {
      nx += dx;
      ny += dy;
    }
  });

  const len = Math.hypot(nx, ny);
  if (len < 0.001) {
    const cx = mask.offsetX + ((mask.minX + mask.maxX) / 2 / mask.width) * mask.drawW;
    const cy = mask.offsetY + ((mask.minY + mask.maxY) / 2 / mask.height) * mask.drawH;
    nx = cx - x;
    ny = cy - y;
    const fallback = Math.hypot(nx, ny) || 1;
    return { nx: nx / fallback, ny: ny / fallback };
  }

  return { nx: nx / len, ny: ny / len };
}

function clampSpeed(item) {
  const speed = Math.hypot(item.vx, item.vy);
  if (speed > MAX_SPEED) {
    const scale = MAX_SPEED / speed;
    item.vx *= scale;
    item.vy *= scale;
  }
}

function randomPointInMask(mask) {
  for (let attempt = 0; attempt < 120; attempt += 1) {
    const x =
      mask.offsetX +
      (mask.minX / mask.width) * mask.drawW +
      Math.random() * ((mask.maxX - mask.minX) / mask.width) * mask.drawW;
    const y =
      mask.offsetY +
      (mask.minY / mask.height) * mask.drawH +
      Math.random() * ((mask.maxY - mask.minY) / mask.height) * mask.drawH;
    if (maskContains(mask, x, y)) return { x, y };
  }
  return {
    x: mask.offsetX + ((mask.minX + mask.maxX) / 2 / mask.width) * mask.drawW,
    y: mask.offsetY + ((mask.minY + mask.maxY) / 2 / mask.height) * mask.drawH,
  };
}

function makeBreados(images, mask) {
  const items = [];
  for (let copy = 0; copy < 2; copy += 1) {
    images.forEach((img, index) => {
      const size = 40 + (index % 3) * 8 + Math.random() * 12;
      const point = randomPointInMask(mask);
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.35 + Math.random() * 0.55;
      items.push({
        img,
        x: point.x,
        y: point.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        rotation: (Math.random() - 0.5) * 0.55,
        spin: (Math.random() - 0.5) * 0.012,
      });
    });
  }
  return items;
}

function bounceInsideMask(item, mask) {
  // Use the sprite center against the full orange mask so breads can reach the edges
  if (maskContains(mask, item.x, item.y)) return;

  const { nx, ny } = inwardNormal(mask, item.x, item.y);
  const intoWall = item.vx * nx + item.vy * ny;

  if (intoWall < 0) {
    item.vx = (item.vx - 2 * intoWall * nx) * RESTITUTION;
    item.vy = (item.vy - 2 * intoWall * ny) * RESTITUTION;
    item.spin += (Math.random() - 0.5) * 0.02;
  }

  for (let i = 0; i < 28; i += 1) {
    if (maskContains(mask, item.x, item.y)) break;
    item.x += nx * 1.2;
    item.y += ny * 1.2;
  }

  if (!maskContains(mask, item.x, item.y)) {
    const cx = mask.offsetX + ((mask.minX + mask.maxX) / 2 / mask.width) * mask.drawW;
    const cy = mask.offsetY + ((mask.minY + mask.maxY) / 2 / mask.height) * mask.drawH;
    item.x += (cx - item.x) * 0.08;
    item.y += (cy - item.y) * 0.08;
  }

  clampSpeed(item);
}

function containRect(stageW, stageH, imgW, imgH) {
  const scale = Math.min(stageW / imgW, stageH / imgH);
  const drawW = imgW * scale;
  const drawH = imgH * scale;
  return {
    offsetX: (stageW - drawW) / 2,
    offsetY: (stageH - drawH) / 2,
    drawW,
    drawH,
  };
}

export default function FloatingPlayground() {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const breadosRef = useRef([]);
  const maskRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, active: false });
  const rafRef = useRef(0);
  const imagesRef = useRef([]);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return undefined;

    const ctx = canvas.getContext('2d');
    let cancelled = false;
    let onResize = null;
    let onPointer = null;
    let onLeave = null;

    const setup = async () => {
      const [maskImg, ...breadoImgs] = await Promise.all([
        loadImage(bagMaskSrc),
        ...BREADOS.map(loadImage),
      ]);
      if (cancelled) return;

      imagesRef.current = breadoImgs;
      const rawMask = buildMask(maskImg);

      onResize = () => {
        const rect = stage.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(rect.width * dpr);
        canvas.height = Math.floor(rect.height * dpr);
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const fitted = containRect(
          rect.width,
          rect.height,
          rawMask.width,
          rawMask.height,
        );
        const inset = insetPlayableMask(rawMask, fitted.drawW);

        maskRef.current = {
          ...rawMask,
          ...fitted,
          ...inset,
        };

        if (!breadosRef.current.length) {
          breadosRef.current = makeBreados(imagesRef.current, maskRef.current);
        } else {
          breadosRef.current.forEach((item) => bounceInsideMask(item, maskRef.current));
        }
      };

      onResize();
      window.addEventListener('resize', onResize);

      onPointer = (event) => {
        const rect = stage.getBoundingClientRect();
        const clientX = event.touches?.[0]?.clientX ?? event.clientX;
        const clientY = event.touches?.[0]?.clientY ?? event.clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const mask = maskRef.current;
        mouseRef.current = {
          x,
          y,
          active: Boolean(mask && maskContains(mask, x, y)),
        };
      };

      onLeave = () => {
        mouseRef.current.active = false;
      };

      stage.addEventListener('pointermove', onPointer);
      stage.addEventListener('pointerdown', onPointer);
      stage.addEventListener('pointerleave', onLeave);
      stage.addEventListener('touchmove', onPointer, { passive: true });
      stage.addEventListener('touchend', onLeave);

      const tick = () => {
        const mask = maskRef.current;
        if (!mask) {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }

        const mouse = mouseRef.current;
        const breados = breadosRef.current;
        ctx.clearRect(0, 0, mask.drawW, mask.drawH);

        breados.forEach((item) => {
          if (mouse.active && mouse.x != null && mouse.y != null) {
            const dx = item.x - mouse.x;
            const dy = item.y - mouse.y;
            const dist = Math.hypot(dx, dy) || 1;
            const radius = 95;
            if (dist < radius) {
              const force = ((radius - dist) / radius) * 0.55;
              item.vx += (dx / dist) * force;
              item.vy += (dy / dist) * force;
            }
          }

          // Near-zero drag so they keep drifting like in space
          item.vx *= 0.9985;
          item.vy *= 0.9985;
          item.x += item.vx;
          item.y += item.vy;
          item.rotation += item.spin + item.vx * 0.002;

          bounceInsideMask(item, mask);
          clampSpeed(item);

          ctx.save();
          ctx.translate(item.x, item.y);
          ctx.rotate(item.rotation);
          const w = item.size;
          const h = (item.img.naturalHeight / item.img.naturalWidth) * w || w;
          ctx.drawImage(item.img, -w / 2, -h / 2, w, h);
          ctx.restore();
        });

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    setup();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      if (onResize) window.removeEventListener('resize', onResize);
      if (onPointer) {
        stage.removeEventListener('pointermove', onPointer);
        stage.removeEventListener('pointerdown', onPointer);
        stage.removeEventListener('touchmove', onPointer);
      }
      if (onLeave) {
        stage.removeEventListener('pointerleave', onLeave);
        stage.removeEventListener('touchend', onLeave);
      }
    };
  }, []);

  return (
    <Stage ref={stageRef} aria-label="Interactive bread bag">
      <Canvas ref={canvasRef} />
      <Bag src={bagImgSrc} alt="" />
    </Stage>
  );
}
