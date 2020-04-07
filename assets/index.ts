export interface ImagesOptions {
  [key: string]: (id: string) => any;
}

const images: ImagesOptions = {
  dygma: require("./dygma.png"),
  infinity: require("./infinity.png"),
};

export default images;
