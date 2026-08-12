export type SkillType = {
  name: string;
  level: 'Familiar' | 'Experienced' | 'Expert';
  professional?: true;
  favorite?: true;
};

const skills: Record<string, SkillType[]> = {
  Frontend: [
    {
      name: 'TypeScript',
      level: 'Expert',
      professional: true,
      favorite: true,
    },
    {
      name: 'React',
      level: 'Expert',
      professional: true,
      favorite: true,
    },
    {
      name: 'Next.js',
      level: 'Expert',
      professional: true,
      favorite: true,
    },
    {
      name: 'Svelte',
      level: 'Experienced',
      favorite: true,
    },
    {
      name: 'Tailwind CSS',
      level: 'Experienced',
    },
    {
      name: 'Material UI',
      level: 'Experienced',
    },
    {
      name: 'Vue',
      level: 'Familiar',
    },
    {
      name: 'Nuxt',
      level: 'Experienced',
    },
  ],
  'Backend & Runtime': [
    {
      name: 'Node.js',
      level: 'Expert',
      professional: true,
      favorite: true,
    },
    {
      name: 'Express',
      level: 'Experienced',
      professional: true,
    },
    {
      name: 'Fastify',
      level: 'Experienced',
    },
    {
      name: 'NestJS',
      level: 'Experienced',
      professional: true,
    },
  ],
  'CI/CD': [
    {
      name: 'GitHub Actions',
      level: 'Experienced',
      professional: true,
    },
    {
      name: 'GitLab CI/CD',
      level: 'Experienced',
      professional: true,
    },
    {
      name: 'CircleCI',
      level: 'Experienced',
      professional: true,
    },
  ],
  Testing: [
    {
      name: 'Jest',
      level: 'Expert',
      professional: true,
    },
    {
      name: 'Cypress',
      level: 'Expert',
      professional: true,
    },
    {
      name: 'TestCafe',
      level: 'Experienced',
      professional: true,
    },
    {
      name: 'BrowserStack',
      level: 'Experienced',
      professional: true,
    },
  ],
  DevOps: [
    {
      name: 'Docker',
      level: 'Experienced',
      professional: true,
    },
    {
      name: 'Terraform',
      level: 'Familiar',
      professional: true,
    },
    {
      name: 'CDKTF',
      level: 'Familiar',
      professional: true,
    },
  ],
  Cloud: [
    {
      name: 'AWS',
      level: 'Familiar',
      professional: true,
    },
    {
      name: 'Vercel',
      level: 'Experienced',
    },
  ],
  // Hosting: [],
  Databases: [
    {
      name: 'MySQL',
      level: 'Experienced',
      professional: true,
    },
    {
      name: 'PostgreSQL',
      level: 'Familiar',
    },
    {
      name: 'MongoDB',
      level: 'Familiar',
    },
    {
      name: 'SQLite',
      level: 'Experienced',
    },
    {
      name: 'Redis',
      level: 'Experienced',
      professional: true,
    },
  ],
  Monitoring: [
    {
      name: 'Datadog',
      level: 'Experienced',
      professional: true,
    },
    {
      name: 'Grafana',
      level: 'Familiar',
      professional: true,
    },
  ],
  Tooling: [
    {
      name: 'Vite',
      level: 'Experienced',
      favorite: true,
    },
    {
      name: 'Webpack',
      level: 'Experienced',
      professional: true,
    },
    {
      name: 'Storybook',
      level: 'Expert',
      professional: true,
    },
    {
      name: 'Deno',
      level: 'Familiar',
    },
    {
      name: 'Bun',
      level: 'Familiar',
    },
  ],
};

export const roadmapSkills: string[] = ['Go', 'Python', 'Kubernetes', 'Remix', 'GraphQL', 'Angular', 'Rust', 'Netlify'];

export const aiSkills: { name: string; usage: string }[] = [
  {
    name: 'Claude',
    usage: 'AI-assisted coding, debugging and development in IDE workflows',
  },
  {
    name: 'Google Gemini',
    usage: 'AI-assisted coding, debugging and development in IDE workflows',
  },
  {
    name: 'Microsoft Copilot',
    usage: 'AI-assisted coding, debugging and development in IDE workflows',
  },
  {
    name: 'ChatGPT',
    usage: 'Research, architecture discussions, documentation and problem solving',
  },
  {
    name: 'Perplexity',
    usage: 'Technical research and documentation lookup',
  },
];

export default skills;
