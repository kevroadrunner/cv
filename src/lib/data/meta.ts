export type MetaType = {
  name: string;
  position: string;
  location: string;
  availableForWork: boolean;
  url: string;
  contact: {
    email: string;
  };
  social: {
    homepage: string;
    github: string;
    linkedIn: string;
    xing: string;
  };
};

const meta: MetaType = {
  name: 'Kevin Ruff',
  position: 'Senior Software Engineer',
  location: 'Bröthen, GER',
  availableForWork: true,
  url: 'https://cv.kevinruff.de/',
  contact: {
    email: 'hello@kevinruff.de',
  },
  social: {
    homepage: 'https://www.kevinruff.de/',
    github: 'https://www.github.com/kevroadrunner/',
    linkedIn: 'https://www.linkedin.com/in/kevin-ruff-sh/',
    xing: 'https://www.xing.com/profile/Kevin_Ruff2/',
  },
};

export default meta;
