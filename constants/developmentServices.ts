export interface IDevelopmentServices {
  title: string;
  services: string[];
}

export const developmentServices: IDevelopmentServices[] = [
  {
    title: "Frontend",
    services: [
      "JavaScript (+jQuery) / React / Redux",
      "MongoDB, Firebase, GraphQL, JPA(Hibernate), MySQL, PostgreSQL",
      "EsLint, SassLint, Webpack, npm, yarn, etc...",
      "HTML, CSS, SCSS...",
      "Material-UI, Semantic-UI, Bootstrap...",
    ],
  },
  {
    title: "Backend",
    services: [
      "Java(+Spring)",
      "Node(+Express), Apollo",
      "PHP(+Laravel)",
      "Phyton (+Django)",
    ],
  },
  {
    title: "IOS, Android",
    services: [
      "Swift (RX Swift), Objective-C, Cocoa, Xamarin.iOS",
      "Java, Kotlin",
      "React Native, Cordova, Ionic, NativeScript, Xamarin...",
      "MongoDB, Firebase, GraphQL, JPA(Hibernate), MySQL, PostgreSQL",
    ],
  },
  {
    title: "Additional Services",
    services: [
      "IoT, Arduino, LoRa/Sigfox, 3G/LTE penetration",
      "Git, Bitbucket",
      "AWS",
      "Docker",
      "CI/CD",
    ],
  },
];
