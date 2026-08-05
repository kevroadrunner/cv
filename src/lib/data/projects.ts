export type ProjectType = {
  name: string;
  description: string;
  github: string;
  demo?: string;
  tags: string[];
};

const projects: ProjectType[] = [
  {
    name: 'kevinruff.de',
    description: 'My own website',
    github: 'https://github.com/kevroadrunner/kevinruff.de/',
    tags: [],
    demo: 'https://www.kevinruff.de/',
  },
  {
    name: 'cv',
    description: 'Website showcasing my skills and experience',
    github: 'https://github.com/kevroadrunner/cv/',
    tags: ['Svelte', 'SvelteKit', 'Vercel', 'tailwindcss'],
    demo: 'https://cv.kevinruff.de/',
  },
  {
    name: 'ffbroethen',
    description: 'Official website for my local volunteer fire department',
    github: 'https://github.com/kevroadrunner/ffbroethen/',
    tags: ['React', 'Next.js', 'Vercel', 'tailwindcss'],
    // demo: 'https://www.feuerwehr-broethen.de/',
    demo: 'https://ffbroethen.vercel.app/',
  },
  {
    name: 'gmbroethen',
    description: 'Official website for my local municipality',
    github: 'https://github.com/kevroadrunner/gmbroethen/',
    // tags: ['Svelte', 'SvelteKit', 'Vercel', 'tailwindcss'],
    tags: [],
    // demo: 'https://www.gemeinde-broethen.de/',
    demo: 'https://gmbroethen.vercel.app/',
  },
];

export default projects;
