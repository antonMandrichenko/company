export interface IProject {
  title: string;
  image: string;
  options: string[];
  text: string;
}

export const projects: IProject[] = [
  {
    title: "DYGMA",
    image: "dygma",
    options: ["Backend"],
    text: "Software for the most advance keyboard for gamers",
  },
  {
    title: "INFINIGROW",
    image: "infinity",
    options: ["Marketing", "Backend"],
    text: "Development of marketing tool for social media",
  },
  {
    title: "SMARTH LIFE PATH",
    image: "smarthLife",
    options: ["Marketing", "Backend"],
    text:
      "Community platform that allows to define and rate community resources",
  },
  {
    title: "FRIEND FILTER",
    image: "friendFilter",
    options: ["Frontend", "Chrome Extansion", "Backend"],
    text:
      "Community platform that allows to define and rate community resources",
  },
  {
    title: "HUMAN OS (NETWORK OS)",
    image: "humanos",
    options: ["Frontend", "Backend"],
    text:
      "Community platform that allows to define and rate community resources",
  },
  {
    title: "TRAVEL INSURANCE",
    image: "insurance",
    options: ["SSR", "Backend"],
    text:
      "Community platform that allows to define and rate community resources",
  },
  {
    title: "LUNIE",
    image: "lunie",
    options: ["Frontend"],
    text:
      "Community platform that allows to define and rate community resources",
  },
  {
    title: "MAXIHOST",
    image: "maxihost",
    options: ["Frontend", "SSR"],
    text:
      "Community platform that allows to define and rate community resources",
  },
  {
    title: "TAX FINANCE",
    image: "taxFinance",
    options: ["Frontend"],
    text:
      "Community platform that allows to define and rate community resources",
  },
];
