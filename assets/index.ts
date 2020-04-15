export interface ImagesOptions {
  [key: string]: (id: string) => any;
}

const images: ImagesOptions = {
  dygma: require("./dygma.png"),
  infinity: require("./infinity.png"),
  dygmaLogo: require("./dygma_logo.png"),
  infinityLogo: require("./infinity_logo.png"),
  dygmaProjects: require("./dygma-projects.png"),
  smarthLife: require("./smarth_life.png"),
  friendFilter: require("./friendFilter.png"),
  humanos: require("./humanos.png"),
  insurance: require("./insurance.png"),
  lunie: require("./lunie.png"),
  maxihost: require("./maxihost.png"),
  taxFinance: require("./taxFinance.png"),
};

export default images;
