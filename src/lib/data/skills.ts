export type SkillType = {
  name: string;
  favorite?: true;
  primary?: true;
};

const skills: Record<string, SkillType[]> = {
  Frontend: [
    {
      name: 'TypeScript',
      favorite: true,
      primary: true,
    },
    {
      name: 'React',
      favorite: true,
      primary: true,
    },
    {
      name: 'Next.js',
      favorite: true,
      primary: true,
    },
    {
      name: 'Svelte',
      favorite: true,
      primary: true,
    },
    {
      name: 'Tailwind CSS',
      favorite: true,
      primary: true,
    },
    {
      name: 'Material UI',
    },
  ],
  'Backend & Runtime': [
    {
      name: 'Node.js',
      favorite: true,
      primary: true,
    },
    {
      name: 'Fastify',
      favorite: true,
    },
    {
      name: 'Express',
    },
    {
      name: 'NestJS',
    },
  ],
  'CI/CD': [
    {
      name: 'GitHub Actions',
    },
    {
      name: 'GitLab CI/CD',
    },
    {
      name: 'CircleCI',
    },
  ],
  Testing: [
    {
      name: 'Jest',
      favorite: true,
    },
    {
      name: 'Cypress',
    },
    {
      name: 'TestCafe',
    },
    {
      name: 'BrowserStack',
    },
  ],
  DevOps: [
    {
      name: 'Docker',
    },
    {
      name: 'Terraform',
    },
    {
      name: 'CDKTF',
    },
  ],
  Hosting: [
    {
      name: 'Vercel',
    },
  ],
  AWS: [
    {
      name: 'Lambda',
    },
    {
      name: 'DynamoDB',
    },
    {
      name: 'S3',
    },
    {
      name: 'Step Functions',
    },
    {
      name: 'SNS',
    },
    {
      name: 'SQS',
    },
  ],
  Databases: [
    {
      name: 'MySQL',
    },
    {
      name: 'PostgreSQL',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'SQLite',
    },
    {
      name: 'Redis',
    },
  ],
  Monitoring: [
    {
      name: 'Datadog',
    },
    {
      name: 'Grafana',
    },
  ],
  Tooling: [
    {
      name: 'Vite',
    },
    {
      name: 'Webpack',
    },
    {
      name: 'Storybook',
    },
  ],
};

export const roadmapSkills: string[] = [
  'Go',
  'Python',
  'Kubernetes',
  'Remix',
  'GraphQL',
  'Angular',
  'Vue',
  'Nuxt',
  'Rust',
  'Netlify',
];

export const aiSkills: SkillType[] = [
  {
    name: 'Claude',
    favorite: true,
  },
  {
    name: 'Google Gemini',
  },
  {
    name: 'Microsoft Copilot',
  },
];

export default skills;
