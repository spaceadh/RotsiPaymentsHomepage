import type { ProjectEntry } from '../../content/projects';
import ProjectCaseStudy from './ProjectCaseStudy';

type SomafixWebsiteCaseStudyProps = {
  project: ProjectEntry;
};

export default function SomafixWebsiteCaseStudy({ project }: SomafixWebsiteCaseStudyProps) {
  return <ProjectCaseStudy project={project} />;
}
