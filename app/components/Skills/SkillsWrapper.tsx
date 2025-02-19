import { data } from '@/app/data/data';
import SkillChip from './SkillChip';

export const SkillsWrapper: React.FC = () => {
  const maxYears = Math.max(...data.skills.map((skill) => skill.years));

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
      {data.skills
        .sort((a, b) => b.years - a.years)
        .map((s) => (
          <SkillChip key={s.type.name} {...s} maxYears={maxYears} />
        ))}
    </div>
  );
};
