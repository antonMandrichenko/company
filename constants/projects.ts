export interface IOption {
  name: string;
  skills: string[];
}

export interface IChallendge {
  text: string;
  image: string;
}

export interface IProject {
  title: string;
  image: string;
  options: IOption[];
  text: string;
  mainTextLeft: string;
  mainTextRight: string;
  challendge: IChallendge;
}

export const projects: IProject[] = [
  {
    title: "DYGMA",
    image: "dygma",
    options: [
      {
        name: "Frontend",
        skills: ["ElectronJS", "ReactJS", "MaterialUI", "React Hooks"],
      },
      {
        name: "API",
        skills: ["Lerna", "JavaScript", "ES6", "SerialPortJS"],
      },
      {
        name: "Machine Learning",
        skills: ["Arduino Zero", "Firmware", "Node Addons"],
      },
    ],
    text: "Software for the most advance keyboard for gamers",
    mainTextLeft:
      "Raise is an ergonomic mechanical keyboard designed to enhance performance and comfort, and prevent long-term injuries caused by many hours spent on a keyboard.",
    mainTextRight:
      "Its functionalities have been tested and validated by professionals, guaranteeing a revolutionary combination of features with an ergonomic split design.",
    challendge: {
      text:
        "The keycaps of the Raise have the standard OEM profile. This is the most common profile keycaps used in mechanical keyboards. There are 60 standard keycaps and 8 special keycaps. You can either get PBT double-injected keycaps or ABS laser-etched keycaps. PBT-ABS Double Injection Keycaps: made by a double-injection process where 2 types of material, PBT and ABS, are injected into a mold to create the keycap. Available languages: English US ANSI layout and the English UK ISO layout are offered in PBT.",
      image: "dygma",
    },
  },
  {
    title: "INFINIGROW",
    image: "infinity",
    options: [
      { name: "Frontend", skills: ["ReactJS", "Webpack", "PostCSS"] },
      { name: "Backend", skills: ["NodeJS", "Express", "Postgres"] },
      { name: "Deployment", skills: ["Docker", "Jenkins", "AWS"] },
    ],
    text: "Development of marketing tool for social media",
    mainTextLeft:
      "Raise is an ergonomic mechanical keyboard designed to enhance performance and comfort, and prevent long-term injuries caused by many hours spent on a keyboard.",
    mainTextRight:
      "Its functionalities have been tested and validated by professionals, guaranteeing a revolutionary combination of features with an ergonomic split design.",
    challendge: {
      text:
        "The keycaps of the Raise have the standard OEM profile. This is the most common profile keycaps used in mechanical keyboards. There are 60 standard keycaps and 8 special keycaps. You can either get PBT double-injected keycaps or ABS laser-etched keycaps. PBT-ABS Double Injection Keycaps: made by a double-injection process where 2 types of material, PBT and ABS, are injected into a mold to create the keycap. Available languages: English US ANSI layout and the English UK ISO layout are offered in PBT.",
      image: "dygma",
    },
  },
  {
    title: "SMARTH LIFE PATH",
    image: "smarthLife",
    options: [
      {
        name: "Frontend",
        skills: ["AngularJS", "TypeScript", "Apollo Client", "GraphQL"],
      },
      {
        name: "Backend",
        skills: ["NestJS", "Apollo Server", "GraphQL"],
      },
      { name: "Deployment", skills: ["Docker", "CircleCI", "Heroku"] },
    ],
    text:
      "Community platform that allows to define and rate community resources",
    mainTextLeft:
      "Raise is an ergonomic mechanical keyboard designed to enhance performance and comfort, and prevent long-term injuries caused by many hours spent on a keyboard.",
    mainTextRight:
      "Its functionalities have been tested and validated by professionals, guaranteeing a revolutionary combination of features with an ergonomic split design.",
    challendge: {
      text:
        "The keycaps of the Raise have the standard OEM profile. This is the most common profile keycaps used in mechanical keyboards. There are 60 standard keycaps and 8 special keycaps. You can either get PBT double-injected keycaps or ABS laser-etched keycaps. PBT-ABS Double Injection Keycaps: made by a double-injection process where 2 types of material, PBT and ABS, are injected into a mold to create the keycap. Available languages: English US ANSI layout and the English UK ISO layout are offered in PBT.",
      image: "dygma",
    },
  },
  {
    title: "FRIEND FILTER",
    image: "friendFilter",
    options: [
      {
        name: "Frontend",
        skills: ["VueJS", "Vuex", "VueBootstrap"],
      },
      {
        name: "Backend",
        skills: [
          "Ruby On Rails",
          "Grape",
          "Sidekiq",
          "Stripe",
          "Puma",
          "Postgres",
        ],
      },
      {
        name: "Chrome Extansion",
        skills: ["VueJS", "Vuex", "VueBootstrap"],
      },
    ],
    text: "Know which friends are active and inactive",
    mainTextLeft:
      "Raise is an ergonomic mechanical keyboard designed to enhance performance and comfort, and prevent long-term injuries caused by many hours spent on a keyboard.",
    mainTextRight:
      "Its functionalities have been tested and validated by professionals, guaranteeing a revolutionary combination of features with an ergonomic split design.",
    challendge: {
      text:
        "The keycaps of the Raise have the standard OEM profile. This is the most common profile keycaps used in mechanical keyboards. There are 60 standard keycaps and 8 special keycaps. You can either get PBT double-injected keycaps or ABS laser-etched keycaps. PBT-ABS Double Injection Keycaps: made by a double-injection process where 2 types of material, PBT and ABS, are injected into a mold to create the keycap. Available languages: English US ANSI layout and the English UK ISO layout are offered in PBT.",
      image: "dygma",
    },
  },
  {
    title: "HUMAN OS (NETWORK OS)",
    image: "humanos",
    options: [
      {
        name: "Frontend",
        skills: [
          "ReactJS",
          "Apollo Client",
          "GraphQL",
          "Styled Components",
          "Lodash",
        ],
      },
      {
        name: "Backend",
        skills: ["Nodejs", "Apollo Server", "KoaJS", "TypeScript", "Lodash"],
      },
      { name: "Deployment", skills: ["Docker", "CircleCI", "AWS"] },
    ],
    text: "Operating System for Healthy Living",
    mainTextLeft:
      "Raise is an ergonomic mechanical keyboard designed to enhance performance and comfort, and prevent long-term injuries caused by many hours spent on a keyboard.",
    mainTextRight:
      "Its functionalities have been tested and validated by professionals, guaranteeing a revolutionary combination of features with an ergonomic split design.",
    challendge: {
      text:
        "The keycaps of the Raise have the standard OEM profile. This is the most common profile keycaps used in mechanical keyboards. There are 60 standard keycaps and 8 special keycaps. You can either get PBT double-injected keycaps or ABS laser-etched keycaps. PBT-ABS Double Injection Keycaps: made by a double-injection process where 2 types of material, PBT and ABS, are injected into a mold to create the keycap. Available languages: English US ANSI layout and the English UK ISO layout are offered in PBT.",
      image: "dygma",
    },
  },
  {
    title: "TRAVEL INSURANCE",
    image: "insurance",
    options: [
      {
        name: "Backend",
        skills: ["VueJS", "SSR", "Java", "Spring"],
      },
    ],
    text: "The best travel insurance provider in Boston that offers",
    mainTextLeft:
      "Raise is an ergonomic mechanical keyboard designed to enhance performance and comfort, and prevent long-term injuries caused by many hours spent on a keyboard.",
    mainTextRight:
      "Its functionalities have been tested and validated by professionals, guaranteeing a revolutionary combination of features with an ergonomic split design.",
    challendge: {
      text:
        "The keycaps of the Raise have the standard OEM profile. This is the most common profile keycaps used in mechanical keyboards. There are 60 standard keycaps and 8 special keycaps. You can either get PBT double-injected keycaps or ABS laser-etched keycaps. PBT-ABS Double Injection Keycaps: made by a double-injection process where 2 types of material, PBT and ABS, are injected into a mold to create the keycap. Available languages: English US ANSI layout and the English UK ISO layout are offered in PBT.",
      image: "dygma",
    },
  },
  {
    title: "LUNIE",
    image: "lunie",
    options: [
      {
        name: "Frontend",
        skills: [
          "VueJS",
          "Veux",
          "Vuetify",
          "Apollo Client",
          "Apollo Cache",
          "GraphQL",
          "Axios",
        ],
      },
      { name: "Deployment", skills: ["Docker", "CircleCI", "DigitalOcean"] },
    ],
    text:
      "Manage your staking portfolio, participate in governance, all in one place.",
    mainTextLeft:
      "Raise is an ergonomic mechanical keyboard designed to enhance performance and comfort, and prevent long-term injuries caused by many hours spent on a keyboard.",
    mainTextRight:
      "Its functionalities have been tested and validated by professionals, guaranteeing a revolutionary combination of features with an ergonomic split design.",
    challendge: {
      text:
        "The keycaps of the Raise have the standard OEM profile. This is the most common profile keycaps used in mechanical keyboards. There are 60 standard keycaps and 8 special keycaps. You can either get PBT double-injected keycaps or ABS laser-etched keycaps. PBT-ABS Double Injection Keycaps: made by a double-injection process where 2 types of material, PBT and ABS, are injected into a mold to create the keycap. Available languages: English US ANSI layout and the English UK ISO layout are offered in PBT.",
      image: "dygma",
    },
  },
  {
    title: "MAXIHOST",
    image: "maxihost",
    options: [
      {
        name: "Frontend",
        skills: ["NextJS", "ReactJS", "Bootstrap", "React Router"],
      },
    ],
    text: "Deploy and manage single-tenant, high performance physical servers",
    mainTextLeft:
      "Raise is an ergonomic mechanical keyboard designed to enhance performance and comfort, and prevent long-term injuries caused by many hours spent on a keyboard.",
    mainTextRight:
      "Its functionalities have been tested and validated by professionals, guaranteeing a revolutionary combination of features with an ergonomic split design.",
    challendge: {
      text:
        "The keycaps of the Raise have the standard OEM profile. This is the most common profile keycaps used in mechanical keyboards. There are 60 standard keycaps and 8 special keycaps. You can either get PBT double-injected keycaps or ABS laser-etched keycaps. PBT-ABS Double Injection Keycaps: made by a double-injection process where 2 types of material, PBT and ABS, are injected into a mold to create the keycap. Available languages: English US ANSI layout and the English UK ISO layout are offered in PBT.",
      image: "dygma",
    },
  },
  {
    title: "TAX FINANCE",
    image: "taxFinance",
    options: [
      {
        name: "Frontend",
        skills: ["ReactJS", "Bootstrap", "React Router", "React Hooks"],
      },
    ],
    text: "Financing your personal and business tax",
    mainTextLeft:
      "Raise is an ergonomic mechanical keyboard designed to enhance performance and comfort, and prevent long-term injuries caused by many hours spent on a keyboard.",
    mainTextRight:
      "Its functionalities have been tested and validated by professionals, guaranteeing a revolutionary combination of features with an ergonomic split design.",
    challendge: {
      text:
        "The keycaps of the Raise have the standard OEM profile. This is the most common profile keycaps used in mechanical keyboards. There are 60 standard keycaps and 8 special keycaps. You can either get PBT double-injected keycaps or ABS laser-etched keycaps. PBT-ABS Double Injection Keycaps: made by a double-injection process where 2 types of material, PBT and ABS, are injected into a mold to create the keycap. Available languages: English US ANSI layout and the English UK ISO layout are offered in PBT.",
      image: "dygma",
    },
  },
];
