/**
 * Normalize project data into the shared case study layout model.
 * Prefer explicit `project.caseStudy` when present.
 */
export function buildCaseStudy(project) {
  if (project.caseStudy) {
    return {
      title: project.caseStudy.title || project.title,
      meta: project.caseStudy.meta || null,
      metaFields: project.caseStudy.metaFields || null,
      heroImgs: project.caseStudy.heroImgs || null,
      heroVideo:
        project.caseStudy.heroVideo === null
          ? null
          : project.caseStudy.heroVideo ?? project.heroVideo,
      heroImg: project.caseStudy.heroImg ?? project.heroImg,
      sections: project.caseStudy.sections || [],
    };
  }

  return {
    title: project.title,
    meta: buildMetaLine(project),
    metaFields: null,
    heroImgs: null,
    heroVideo: project.heroVideo,
    heroImg: project.heroImg,
    sections: buildSectionsFromLegacy(project),
  };
}

function buildMetaLine(project) {
  return [project.subtitle, project.role, project.year, project.tools]
    .filter(Boolean)
    .join(' / ');
}

function buildSectionsFromLegacy(project) {
  const sections = [];

  if (project.problem) {
    sections.push({
      type: 'prose',
      title: project.problemLabel || 'Why was this needed?',
      body: project.problem,
    });
  }

  if (project.diagnosing?.length) {
    const imgs = project.diagnosing.flatMap((item) =>
      item.imgs || (item.img ? [item.img] : []),
    );
    const caption = project.diagnosing.map((item) => item.body).filter(Boolean).join(' ');
    if (imgs.length) {
      sections.push({
        type: 'image-grid',
        images: imgs.slice(0, 4),
        caption,
      });
    }
  }

  if (project.metrics?.length) {
    sections.push({
      type: 'bullets',
      title: 'The results',
      items: project.metrics.map((m) => `${m.value} — ${m.label}`),
    });
  } else if (project.outcome) {
    sections.push({
      type: 'bullets',
      title: 'The results',
      items: project.outcome.split('·').map((s) => s.trim()).filter(Boolean),
    });
  }

  if (project.extended?.researchSteps?.length) {
    const body = project.extended.researchSteps
      .map((step) => `${step.title}: ${step.items.join(' ')}`)
      .join(' ');
    sections.push({
      type: 'prose',
      title: 'Research',
      body,
    });
  } else if (project.extended?.context) {
    sections.push({
      type: 'prose',
      title: 'Research',
      body: project.extended.context,
    });
  }

  if (project.approach?.length) {
    sections.push({
      type: 'numbered',
      title: 'Process',
      items: project.approach,
    });
  }

  if (project.process?.length) {
    project.process.forEach((step) => {
      if (step.img) {
        sections.push({
          type: 'media-text',
          title: step.label,
          img: step.img,
          body: step.body,
        });
      } else {
        sections.push({
          type: 'prose',
          title: step.label,
          body: step.body,
        });
      }
    });
  } else if (project.extended?.siteMapPages?.length) {
    project.extended.siteMapPages.forEach((page) => {
      const img = page.img || page.imgs?.[0];
      if (img) {
        sections.push({
          type: 'media-text',
          title: page.title,
          img,
          body: page.description,
        });
      }
    });
  }

  const continueBody =
    project.extended?.reflection ||
    project.solution ||
    project.brief;

  if (continueBody) {
    sections.push({
      type: 'prose',
      title: 'Continue...',
      body: continueBody,
    });
  }

  return sections;
}
