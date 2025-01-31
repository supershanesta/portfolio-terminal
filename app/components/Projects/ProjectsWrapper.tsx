import { data } from '@/app/data/data';
import { SkillsEnum } from '@/app/data/types';
import ProjectChip from './ProjectChip';
import { FaReact, FaCode } from 'react-icons/fa';

export const ProjectsWrapper: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.projects.map((project) => (
        <ProjectChip
          key={project.name}
          {...project}
          Icon={project.tech.includes(SkillsEnum.React) ? FaReact : FaCode}
          color={project.tech.includes(SkillsEnum.React) ? '#61DAFB' : '#666666'}
        />
      ))}
    </div>
  );
};
