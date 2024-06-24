const data = require('../data/zoo_data');

const whenUndefined = () => {
  const NE = data.species
    .filter((specie) => specie.location.includes('NE'))
    .map(({ name }) => name);

  const NW = data.species
    .filter((specie) => specie.location.includes('NW'))
    .map(({ name }) => name);

  const SE = data.species
    .filter((specie) => specie.location.includes('SE'))
    .map(({ name }) => name);

  const SW = data.species
    .filter((specie) => specie.location.includes('SW'))
    .map(({ name }) => name);

  return {
    NE,
    NW,
    SE,
    SW,
  };
};

const includeNamesTrue = () => {
  const animalsList = whenUndefined();
  const listValues = Object.values(animalsList);

  const formatedList = listValues
    .map((location) => location
    .map((animal) => ({
      [animal]: data.species
        .find(({ name }) => name === animal).residents
        .map((resident) => resident.name),
    })));

  return {
    NE: formatedList[0],
    NW: formatedList[1],
    SE: formatedList[2],
    SW: formatedList[3],
  };
};

const sortedTrue = () => {
  const animalsList = whenUndefined();
  const listValues = Object.values(animalsList);

  const formatedList = listValues
    .map((location) => location
    .map((animal) => ({
      [animal]: data.species
        .find(({ name }) => name === animal).residents
        .map((resident) => resident.name)
        .sort((a, b) => a.localeCompare(b)),
    })));

    return {
      NE: formatedList[0],
      NW: formatedList[1],
      SE: formatedList[2],
      SW: formatedList[3],
    };
};

console.log(sortedTrue());

const getAnimalMap = (options) => {
  if (options === undefined || !options.includeNames) return whenUndefined();

  if (options.includeNames) return includeNamesTrue();

  if (options.includeNames && sorted) return 
};

module.exports = getAnimalMap;
