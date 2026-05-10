import type { Metadata } from 'next';
import ProjectCaseStudy from '../../../src/components/projects/ProjectCaseStudy';
import { getProjectBySlug } from '../../../src/content/projects';

const project = getProjectBySlug('tena-crm');

if (!project) {
  throw new Error('Missing Tena CRM project entry');
}

export const metadata: Metadata = {
  title: project.seo.title,
  description: project.seo.description,
  keywords: project.seo.keywords,
  alternates: { canonical: project.href },
  openGraph: {
    type: 'website',
    title: project.seo.title,
    description: project.seo.description,
    url: project.href,
    images: [{ url: project.image.src, alt: project.image.alt }],
  },
};

export default function TenaCrmPage() {
  return <ProjectCaseStudy project={project} />;
}
