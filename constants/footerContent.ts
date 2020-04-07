export interface IFooterContentLink {
  text: string;
  link: string;
}

export interface IFooterContent {
  title: string;
  links?: IFooterContentLink[];
  mainText?: string[];
}

export const content: IFooterContent[] = [
  {
    title: "IOT WEB LAB",
    mainText: ["17 Khreshchatyk str.", "01001 Kyiv, Ukraine"],
  },
  {
    title: "Contacts",
    mainText: ["+38(095)8477364", "info@iotweblab.com"],
  },
  {
    title: "Follow us ",
    links: [{text: "Facebook", link: "https://www.facebook.com/anton.mandrychenko.3"}, {text: "Linkedin", link: "https://linkedin.com/in/mandrychenko"}],
  },
];
