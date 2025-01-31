import { data } from '../data/data';
import React from 'react';
import { SkillsWrapper } from '@/app/components/Skills/SkillsWrapper';
import { ProjectsWrapper } from '../components/Projects/ProjectsWrapper';
import { contact } from '../data/contact';
import ContactComponent from '../components/ContactComponent/ContactComponent';

export type HistoryItem = {
  text: string;
  component?: React.ReactNode | Promise<React.ReactNode>;
  type: 'user' | 'command';
};

type Command = {
  name: string;
  description: string;
  execute: (args: string[]) => HistoryItem;
  isClickable?: boolean;
};

export const commands: Record<string, Command> = {
  help: {
    name: 'help',
    description: 'Shows available commands',
    execute: () => ({
      text: `Available Commands:
            =================
            help     - Show this help message
            projects - List my projects
            skills   - Show my technical skills
            contact  - Show contact information
            about    - About me
            clear    - Clear the terminal
            
      `,
      type: 'command',
    }),
    isClickable: false,
  },

  skills: {
    name: 'skills',
    description: 'Show my technical skills',
    execute: (): HistoryItem => {
      return {
        text: data.skills.map((s) => `- ${s.type.name} (${s.years} years)`).join('\n'),
        component: SkillsWrapper({}),
        type: 'command',
      };
    },
    isClickable: true,
  },
  projects: {
    name: 'projects',
    description: 'List my projects',
    execute: () => {
      return {
        text: data.projects
          .map(
            (p) =>
              `${p.name} (${p.date})
              Role: ${p.role}
              ${'-'.repeat(p.name.length + p.date.length + 3)}
              ${p.description}
              Tech: ${p.tech.map((item) => `${item.name}`).join(', ')}`
          )
          .join('\n\n'),
        component: ProjectsWrapper({}),
        type: 'command',
      };
    },
    isClickable: true,
  },
  contact: {
    name: 'contact',
    description: 'Show contact information',
    execute: () => ({
      text: `Contact Information:
            =================
            ${contact.name}
            ${contact.email}
            ${contact.phone}
            ${contact.linkedin}
            ${contact.github}
      `,
      type: 'command',
      component: ContactComponent({}),
    }),
    isClickable: true,
  },
  clear: {
    name: 'clear',
    description: 'Clear the terminal',
    execute: () => ({ text: '', type: 'command' }),
    isClickable: false,
  },
};
