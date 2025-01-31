import { FaJs, FaReact, FaNode, FaPython, FaGit, FaDatabase, FaAws } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiApollographql,
  SiStoryblok,
  SiStrapi,
  SiFastapi,
  SiPostgresql,
  SiExpress,
  SiVercel,
  SiOpenai,
} from 'react-icons/si';

export const SkillsEnum = {
  JavaScript: {
    name: 'JavaScript',
    Icon: FaJs,
    color: '#F7DF1E',
  },
  TypeScript: {
    name: 'TypeScript',
    Icon: SiTypescript,
    color: '#3178C6',
  },
  React: {
    name: 'React',
    Icon: FaReact,
    color: '#61DAFB',
  },
  Node: {
    name: 'Node.js',
    Icon: FaNode,
    color: '#339933',
  },
  Python: {
    name: 'Python',
    Icon: FaPython,
    color: '#3776AB',
  },
  NextJS: {
    name: 'Next.js',
    Icon: SiNextdotjs,
    color: '#999999',
  },
  Tailwind: {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
    color: '#06B6D4',
  },
  Git: {
    name: 'Git',
    Icon: FaGit,
    color: '#F05032',
  },
  Express: {
    name: 'Express',
    Icon: SiExpress,
    color: '#339933',
  },
  GraphQL: {
    name: 'GraphQL',
    Icon: SiApollographql,
    color: '#E10098',
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    Icon: SiPostgresql,
    color: '#4479A1',
  },
  SQL: {
    name: 'SQL',
    Icon: FaDatabase,
    color: '#4479A1',
  },
  FastAPI: {
    name: 'FastAPI',
    Icon: SiFastapi,
    color: '#3776AB',
  },
  AWS: {
    name: 'AWS',
    Icon: FaAws,
    color: '#FF9900',
  },
  Strapi: {
    name: 'Strapi',
    Icon: SiStrapi,
    color: '#61DAFB',
  },
  Storyblok: {
    name: 'Storyblok',
    Icon: SiStoryblok,
    color: '#61DAFB',
  },
  Vercel: {
    name: 'Vercel',
    Icon: SiVercel,
    color: '#999999',
  },
  OpenAI: {
    name: 'OpenAI',
    Icon: SiOpenai,
    color: '#999999',
  },
};

export type ProjectType = {
  name: string;
  description: string;
  role: string;
  date: string;
  url: string;
  image: string;
  tech: (typeof SkillsEnum)[keyof typeof SkillsEnum][];
};

export type SkillType = {
  type: (typeof SkillsEnum)[keyof typeof SkillsEnum];
  years: number;
};

export type ContactType = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  image: string;
};
