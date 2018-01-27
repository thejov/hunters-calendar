export default type Animal = {
  species: string,
  region: string,
  huntingSeason: { text: string, dates: Array<string> }
};
