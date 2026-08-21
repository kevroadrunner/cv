export type JobType = {
  position: string;
  company: string;
  period: string;
  tasks: string[];
  projects?: { name: string; description?: string; skills?: string[] }[];
};

const experience: JobType[] = [
  {
    position: 'Senior Software Engineer',
    company: 'AVIV Germany GmbH',
    period: '08-2021 - 08-2026',
    tasks: [
      'Responsibility for architecture, further development, and scaling of central web platforms',
      'Development and operation of cloud-based services using TypeScript, Node.js, and AWS',
      'Design and implementation of REST APIs and backend services',
      'End-to-End ownership of features from concept to deployment',
      'Improving development processes, CI/CD, and testing strategies',
      'Close collaboration with product management, UX, and development teams',
    ],
    projects: [
      {
        name: 'Residential Search UI',
        skills: [
          'Typescript',
          'React',
          'SSR',
          'Node.js',
          'NestJS',
          'CircleCI',
          'Jest/RTL',
          'Zustand',
          'Cypress',
          'AWS Lambda',
          'Terraform',
          'Storybook',
          'Claude',
          'Google Gemini',
          'Microsoft Copilot',
        ],
      },
      {
        name: 'Residential Map Search UI',
        skills: [
          'Typescript',
          'React',
          'Node.js',
          'NestJS',
          'CircleCI',
          'Jest/RTL',
          'Zustand',
          'Cypress',
          'Mapbox',
          'AWS Lambda',
          'Claude',
          'Google Gemini',
        ],
      },
    ],
  },
  {
    position: 'Software Developer',
    company: 'Immowelt Hamburg GmbH',
    period: '03-2015 - 07-2021',
    tasks: [
      'Development and maintenance of modern web applications using JavaScript and TypeScript',
      'Implementation of front-end and back-end functionalities',
      'Contributing to the further development of a company-wide design system',
      'Integration of APIs and backend services',
      'Further development of existing software architectures',
      'Ensuring code quality through testing and code reviews',
    ],
    projects: [
      {
        name: 'Residential Search UI',
        skills: [
          'Typescript',
          'React',
          'SSR',
          'Redux',
          'Node.js',
          'NestJS',
          'Jest/Encyme',
          'AWS Lambda',
          'Redis',
          'Terraform',
          'CDKTF',
          'TestCafe',
          'Gitlab CI/CD',
        ],
      },
      {
        name: 'Search Feeder Service',
        skills: [
          'Typescript',
          'Node.js',
          'AWS Lambda',
          'AWS SQS',
          'AWS Step Function',
          'AWS SNS',
          'AWS DynamoDB',
          'Terraform',
          'CDKTF',
        ],
      },
      {
        name: 'Commercial Search UI',
        skills: [
          'Javascript/Flow',
          'Typescript',
          'React',
          'Redux',
          'Gitlab CI/CD',
          'Jest/Encyme',
          'TestCafe',
        ],
      },
      {
        name: 'Commercial Landing Page',
        skills: ['Javascript/Flow', 'React', 'Gitlab CI/CD', 'Jest/Encyme', 'TestCafe'],
      },
      {
        name: 'Immowelt Design System',
        skills: ['Javascript', 'React', 'Storybook'],
      },
    ],
  },
  {
    position: 'Web Developer',
    company: 'Immonet GmbH',
    period: '04-2013 - 02-2015',
    tasks: [
      'Development and maintenance of web applications using JavaScript and web technologies',
      'Implementation of user interfaces and backend logic',
      'Contributing to internal systems and existing applications',
    ],
    projects: [
      {
        name: 'Real Estate Search',
        skills: [
          'Java',
          'JSP',
          'Javascript',
          'Bootstrap',
          'jQuery',
          'PostgreSQL',
          'Selenium',
          'WebdriverIO',
          'Jenkins',
        ],
      },
      {
        name: 'Real Estate Agent Search',
        skills: ['Javascript', 'Angular', 'Bootstrap', 'Protractor', 'Jenkins'],
      },
      {
        name: 'Payment Process',
        skills: ['Java', 'JSF', 'Javascript', 'Bootstrap', 'jQuery', 'Jenkins'],
      },
      {
        name: 'Immonet Design System',
        skills: ['Javascript', 'Bootstrap', 'jQuery', 'Jenkins'],
      },
    ],
  },
  {
    position: 'Developer',
    company: 'Volz ITSC Software GmbH',
    period: '01-2011 - 03-2013',
    tasks: [
      'Development and maintenance of web application',
      'Implementation of functional requirements and debugging',
      'Support for the further development of existing system',
    ],
    projects: [
      {
        name: 'Insurance Suite',
        skills: ['PHP', 'MySQL', 'Javascript', 'jQuery', 'Sencha'],
      },
    ],
  },
  {
    position: 'Fachinformatiker - Anwendungsentwicklung',
    company: 'Staatliche Gewerbeschule G18',
    period: '08-2008 - 12-2010',
    tasks: [],
    projects: [
      {
        name: 'Database Synchronization System (Apprenticeship Thesis)',
        skills: ['Java', 'Hibernate', 'PHP', 'MySQL'],
      },
    ],
  },
  {
    position: 'Abitur',
    company: 'Gymnasium Malchin',
    period: '08-1999 - 05-2008',
    tasks: [],
  },
];

export default experience;
