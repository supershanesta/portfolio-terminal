import { ProjectType } from '@/app/data/types';
import { IconType } from 'react-icons';
import Image from 'next/image';

interface ProjectChipProps extends ProjectType {
  Icon: IconType;
  color: string;
}

const ProjectChip: React.FC<ProjectChipProps> = ({ name, description, role, tech, color, url, image }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div
      className="p-4 rounded-md flex flex-col gap-4 transition-colors duration-200 cursor-pointer"
      onClick={handleClick}
      style={{
        backgroundColor: `${color}15`,
        borderColor: `${color}30`,
        borderWidth: 1,
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image src={image} alt={name} fill className="object-contain" sizes="64px" priority />
        </div>
        <div className="flex-1">
          <div className="text-xl font-bold">
            {name} {role && <div className="text-xs italic">{role}</div>}
          </div>
          <div className="text-sm">{description}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t.name}
            className="px-2 py-1 rounded-full text-xs"
            style={{
              backgroundColor: `${t.color}30`,
            }}
          >
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectChip;
