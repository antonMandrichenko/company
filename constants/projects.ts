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
      "Know which friends are active and inactive",
  },
  {
    title: "HUMAN OS (NETWORK OS)",
    image: "humanos",
    options: ["Frontend", "Backend"],
    text:
      "Operating System for Healthy Living",
  },
  {
    title: "TRAVEL INSURANCE",
    image: "insurance",
    options: ["SSR", "Backend"],
    text:
      "The best travel insurance provider in Boston that offers",
  },
  {
    title: "LUNIE",
    image: "lunie",
    options: ["Frontend"],
    text:
      "Manage your staking portfolio, participate in governance, all in one place.",
  },
  {
    title: "MAXIHOST",
    image: "maxihost",
    options: ["Frontend", "SSR"],
    text:
      "Deploy and manage single-tenant, high performance physical servers",
  },
  {
    title: "TAX FINANCE",
    image: "taxFinance",
    options: ["Frontend"],
    text:
      "Financing your personal and business tax",
  },
];
