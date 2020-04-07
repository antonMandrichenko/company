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
];