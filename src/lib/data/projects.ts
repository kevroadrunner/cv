export type ProjectType = {
  name: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  wip?: true;
};

const projects: ProjectType[] = [
  {
    name: 'kevinruff.de',
    description: 'Personal website of Kevin Ruff.',
    github: 'https://github.com/kevroadrunner/kevinruff.de/',
    tags: ['Svelte', 'SvelteKit', 'Vercel', 'Tailwind CSS'],
    demo: 'https://www.kevinruff.de/',
    wip: true,
  },
  {
    name: 'cv',
    description: 'Website showcasing my skills and experience',
    github: 'https://github.com/kevroadrunner/cv/',
    tags: ['Svelte', 'SvelteKit', 'Vercel', 'Tailwind CSS'],
    demo: 'https://cv.kevinruff.de/',
  },
  {
    name: 'ffbroethen',
    description: 'Official website for my local volunteer fire department',
    github: 'https://github.com/kevroadrunner/ffbroethen/',
    tags: ['React', 'Next.js', 'Vercel', 'Tailwind CSS'],
    // demo: 'https://www.feuerwehr-broethen.de/',
    demo: 'https://ffbroethen.vercel.app/',
  },
  {
    name: 'gmbroethen',
    description: 'Official website for my local municipality',
    github: 'https://github.com/kevroadrunner/gmbroethen/',
    tags: ['Vue', 'Nuxt', 'Vercel', 'Tailwind CSS'],
    // demo: 'https://www.gemeinde-broethen.de/',
    demo: 'https://gmbroethen.vercel.app/',
    wip: true,
  },
  {
    name: 'next-turn',
    description: 'Boardgame decision wizard',
    github: 'https://github.com/kevroadrunner/next-turn/',
    tags: ['React', 'Next.js', 'Vercel', 'Material UI'],
    wip: true,
  },
  {
    name: 'fixflow',
    description:
      'A lightweight web app for analyzing recurring income and expenses over the course of a year',
    github: 'https://github.com/kevroadrunner/fixflow/',
    tags: ['React', 'Next.js', 'Vercel', 'Material UI'],
    wip: true,
  },
];

export default projects;
