export interface ImagesOptions {
  [key: string]: (id: string) => any;
}

const images: ImagesOptions = {
  dygma: require("./dygma.png"),
  infinity: require("./infinity.png"),
  dygmaLogo: require("./dygma_logo.png"),
  infinityLogo: require("./infinity_logo.png"),
};

export default images;
