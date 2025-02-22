export const getImagesFromFolder = (folder, event, count) => {
  return Array.from(
    { length: count },
    (_, index) => `./images/${folder}/${event}/img${index + 1}.jpg`
  );
};
