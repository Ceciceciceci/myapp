import React, { useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

const STAGE_H = 280;

const Stage = styled.section`
  position: relative;
  margin-top: 4rem;
  height: ${STAGE_H}px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(34, 49, 72, 0.55)'
      : 'rgba(255, 251, 245, 0.55)'};
  touch-action: none;
  user-select: none;
`;

const Hint = styled.p`
  position: absolute;
  left: 1rem;
  bottom: 0.85rem;
  margin: 0;
  z-index: 1;
  pointer-events: none;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`;

const SHAPE_KINDS = ['circle', 'square', 'triangle', 'pill', 'diamond'];

function makeShapes(count, width, height, colors) {
  const shapes = [];
  for (let i = 0; i < count; i += 1) {
    const kind = SHAPE_KINDS[i % SHAPE_KINDS.length];
    const size = 28 + Math.random() * 42;
    shapes.push({
      kind,
      x: size + Math.random() * Math.max(width - size * 2, 1),
      y: size + Math.random() * Math.max(height - size * 2, 1),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.01,
      color: colors[i % colors.length],
    });
  }
  return shapes;
}

function drawShape(ctx, shape) {
  const { kind, x, y, size, rotation, color } = shape;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.92;

  if (kind === 'circle') {
    ctx.beginPath();
    ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (kind === 'square') {
    ctx.fillRect(-size / 2, -size / 2, size, size);
  } else if (kind === 'triangle') {
    ctx.beginPath();
    ctx.moveTo(0, -size / 2);
    ctx.lineTo(size / 2, size / 2);
    ctx.lineTo(-size / 2, size / 2);
    ctx.closePath();
    ctx.fill();
  } else if (kind === 'pill') {
    const w = size * 1.35;
    const h = size * 0.55;
    const r = h / 2;
    ctx.beginPath();
    ctx.moveTo(-w / 2 + r, -h / 2);
    ctx.lineTo(w / 2 - r, -h / 2);
    ctx.quadraticCurveTo(w / 2, -h / 2, w / 2, 0);
    ctx.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
    ctx.lineTo(-w / 2 + r, h / 2);
    ctx.quadraticCurveTo(-w / 2, h / 2, -w / 2, 0);
    ctx.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(0, -size / 2);
    ctx.lineTo(size / 2, 0);
    ctx.lineTo(0, size / 2);
    ctx.lineTo(-size / 2, 0);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
}

export default function FloatingPlayground() {
  const theme = useTheme();
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const shapesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, active: false });
  const rafRef = useRef(0);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return undefined;

    const ctx = canvas.getContext('2d');
    const colors =
      theme.mode === 'dark'
        ? ['#FFB38A', '#8ECAE6', '#F4C16E', '#FDF5E6', '#C5E87A']
        : ['#ED3801', '#F4C16E', '#2A241C', '#0E75DD', '#D9C9B0'];

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!shapesRef.current.length) {
        shapesRef.current = makeShapes(14, rect.width, rect.height, colors);
      }
    };

    resize();
    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    const readPoint = (event) => {
      const rect = stage.getBoundingClientRect();
      const clientX = event.touches?.[0]?.clientX ?? event.clientX;
      const clientY = event.touches?.[0]?.clientY ?? event.clientY;
      mouseRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: true,
      };
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    stage.addEventListener('pointermove', readPoint);
    stage.addEventListener('pointerdown', readPoint);
    stage.addEventListener('pointerleave', onLeave);
    stage.addEventListener('touchmove', readPoint, { passive: true });
    stage.addEventListener('touchend', onLeave);

    const tick = () => {
      const rect = stage.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouse = mouseRef.current;
      const shapes = shapesRef.current;

      ctx.clearRect(0, 0, width, height);

      shapes.forEach((shape) => {
        if (mouse.active && mouse.x != null && mouse.y != null) {
          const dx = shape.x - mouse.x;
          const dy = shape.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;
          const radius = 120;
          if (dist < radius) {
            const force = ((radius - dist) / radius) * 2.8;
            shape.vx += (dx / dist) * force;
            shape.vy += (dy / dist) * force;
          }
        }

        // gentle drift
        shape.vx += (Math.random() - 0.5) * 0.02;
        shape.vy += (Math.random() - 0.5) * 0.02;

        shape.vx *= 0.92;
        shape.vy *= 0.92;
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.spin + shape.vx * 0.002;

        const pad = shape.size * 0.55;
        if (shape.x < pad) {
          shape.x = pad;
          shape.vx *= -0.7;
        } else if (shape.x > width - pad) {
          shape.x = width - pad;
          shape.vx *= -0.7;
        }
        if (shape.y < pad) {
          shape.y = pad;
          shape.vy *= -0.7;
        } else if (shape.y > height - pad) {
          shape.y = height - pad;
          shape.vy *= -0.7;
        }

        drawShape(ctx, shape);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      stage.removeEventListener('pointermove', readPoint);
      stage.removeEventListener('pointerdown', readPoint);
      stage.removeEventListener('pointerleave', onLeave);
      stage.removeEventListener('touchmove', readPoint);
      stage.removeEventListener('touchend', onLeave);
    };
  }, [theme.mode]);

  return (
    <Stage ref={stageRef} aria-label="Interactive floating shapes">
      <Canvas ref={canvasRef} />
      <Hint>move your cursor through the shapes</Hint>
    </Stage>
  );
}
