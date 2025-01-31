import { contact } from './contact';
import { projects } from './projects';
import { skills } from './skills';
import { ContactType, ProjectType, SkillType } from './types';

type Data = {
  projects: ProjectType[];
  skills: SkillType[];
  contact: ContactType;
};

export const data: Data = {
  projects,
  skills,
  contact,
};
