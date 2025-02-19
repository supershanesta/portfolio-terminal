import { contact } from './contact';
import { projects } from './projects';
import { skills } from './skills';
import { about } from './about';
import { ContactType, ProjectType, SkillType, AboutType } from './types';

type Data = {
  projects: ProjectType[];
  skills: SkillType[];
  contact: ContactType;
  about: AboutType;
};

export const data: Data = {
  projects,
  skills,
  contact,
  about,
};
