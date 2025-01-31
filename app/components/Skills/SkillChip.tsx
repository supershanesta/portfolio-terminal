import { SkillType } from '@/app/data/types';

interface SkillChipProps extends SkillType {
  maxYears: number;
}

const SkillChip: React.FC<SkillChipProps> = ({ type, years, maxYears }) => {
  const percentage = (years / maxYears) * 100;
  const { color, Icon, name } = type;

  return (
    <div
      className="p-2 rounded-md flex flex-col gap-2 transition-colors duration-200"
      style={{
        backgroundColor: `${color}15`,
        borderColor: `${color}30`,
        borderWidth: 1,
      }}
    >
      <div className="flex items-center gap-2">
        <Icon className="text-xl" style={{ color }} />
        <div>
          <div>{name}</div>
          <div className="text-sm opacity-75">Yrs: {years}</div>
        </div>
      </div>
      <div className="w-full h-1 bg-black/20 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default SkillChip;
