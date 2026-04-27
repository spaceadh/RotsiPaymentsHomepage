import type { ProjectEntry } from '../../content/projects';
import ProjectCaseStudy from './ProjectCaseStudy';

type KumbushaCaseStudyProps = {
  project: ProjectEntry;
};

export default function KumbushaCaseStudy({ project }: KumbushaCaseStudyProps) {
  return <ProjectCaseStudy project={project} />;
}
