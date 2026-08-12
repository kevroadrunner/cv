export type JobType = {
  position: string;
  company: string;
  period: string;
  tasks: string[];
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
  },
  {
    position: 'Developer',
    company: 'Volz ITSC Software GmbH',
    period: '01-2011 - 03-2013',
    tasks: [
      'Development and maintenance of web applications',
      'Implementation of functional requirements and debugging',
      'Support for the further development of existing systems',
    ],
  },
  {
    position: 'Fachinformatiker - Anwendungsentwicklung',
    company: 'Staatliche Gewerbeschule G18',
    period: '08-2008 - 12-2010',
    tasks: [],
  },
  {
    position: 'Abitur',
    company: 'Gymnasium Malchin',
    period: '08-1999 - 05-2008',
    tasks: [],
  },
];

export default experience;
