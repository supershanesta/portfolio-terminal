import { SkillsEnum, ProjectType } from './types';

export const projects: ProjectType[] = [
  {
    name: 'EVgo Extend',
    description: "A web app for EVgo Clients to manage their charging station's prices and discounts",
    role: 'Lead Software Engineer',
    date: '2022',
    url: 'https://evgo.com/charging-solutions/business-and-commercial/evgo-extend/',
    image: '/projects/evgo.svg',
    tech: [
      SkillsEnum.JavaScript,
      SkillsEnum.TypeScript,
      SkillsEnum.React,
      SkillsEnum.Node,
      SkillsEnum.PostgreSQL,
      SkillsEnum.Tailwind,
      SkillsEnum.AWS,
      SkillsEnum.GraphQL,
      SkillsEnum.Storyblok,
    ],
  },
  {
    name: 'Dermsquared',
    description: 'A website for dermatologists to view the latest and greatest information',
    role: 'Technical Product Manager | Software Engineer',
    date: '2023',
    url: 'https://dermsquared.com',
    image: '/projects/dermsquared.webp',
    tech: [SkillsEnum.JavaScript, SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.Strapi, SkillsEnum.OpenAI],
  },
  {
    name: 'Carbon Arc',
    description: 'Platform to track and create marketing campaigns across multiple channels',
    role: 'Technical Product Manager | Software Engineer',
    date: '2024',
    url: 'https://carbonarc.co',
    image: '/projects/carbonarc.webp',
    tech: [
      SkillsEnum.JavaScript,
      SkillsEnum.TypeScript,
      SkillsEnum.React,
      SkillsEnum.FastAPI,
      SkillsEnum.PostgreSQL,
      SkillsEnum.SQL,
      SkillsEnum.Python,
    ],
  },
  /*{
    name: 'Ticket Artisan',
    description: 'Create technical tickets based on screenshots from figma and design files',
    role: 'Creator & Software Engineer',
    date: '2024',
    url: 'https://ticketartisan.com',
    image: '/projects/ticketartisan.webp',
    tech: [SkillsEnum.JavaScript, SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.NextJS, SkillsEnum.OpenAI],
  },
  {
    name: 'Brick Generator',
    description: 'Generate lego format 3d models from user descriptions',
    role: 'Creator & Software Engineer',
    date: '2024',
    url: 'https://brickgenerator.com',
    image: '/projects/brickgenerator.webp',
    tech: [SkillsEnum.JavaScript, SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.NextJS, SkillsEnum.OpenAI],
  },
  {
    name: 'Anxiety Simulator',
    description: 'A website to help people understand how anxiety can affect others and how to help them',
    role: 'Creator & Software Engineer',
    date: '2024',
    url: 'https://anxietysimulator.com',
    image: '/projects/anxietysimulator.webp',
    tech: [SkillsEnum.JavaScript, SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.NextJS, SkillsEnum.OpenAI],
  }*/
  {
    name: 'This website!',
    description: 'A portfolio website to showcase my projects and skills',
    role: 'Lead Software Engineer',
    date: '2025',
    url: 'https://shanedrice.com',
    image: '/projects/portfolio.png',
    tech: [
      SkillsEnum.JavaScript,
      SkillsEnum.TypeScript,
      SkillsEnum.React,
      SkillsEnum.Node,
      SkillsEnum.Tailwind,
      SkillsEnum.AWS,
    ],
  },
  {
    name: 'Surf Tracker',
    description: 'A website to track your surf activities with friends!',
    role: 'Lead Software Engineer',
    date: '2025',
    url: 'https://surf.shanedrice.com',
    image: '/projects/surf_tracker.png',
    tech: [
      SkillsEnum.JavaScript,
      SkillsEnum.TypeScript,
      SkillsEnum.React,
      SkillsEnum.Node,
      SkillsEnum.Tailwind,
      SkillsEnum.PostgreSQL,
      SkillsEnum.AWS,
    ],
  },
];
