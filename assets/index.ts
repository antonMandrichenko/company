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
  solution_dygma: require("./solution_dygma.png"),
  challendge_dygma: require("./solution_dygma.gif"),
  main_dygma: require("./challendge_dygma.png"),
  main_infinity: require("./infinity.png"),
  main_humanos: require("./humanos.png"),
  main_lunie: require("./lunie.png"),
  main_friendFilter: require("./friendFilter.png"),
  main_smarthLife: require("./smarth_life.png"),
  main_insurance: require("./insurance.png"),
  main_maxihost: require("./maxihost.png"),
  main_taxFinance: require("./taxFinance.png"),
};

export default images;
