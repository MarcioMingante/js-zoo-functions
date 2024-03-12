const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const animalsList = data.species
      .reduce((acc, specie) => {
        acc[specie.name] = specie.residents.length;
    
        return acc;
    }, {});

    return animalsList;
  }

  const currentAnimal = data.species
    .find((specie) => specie.name === animal.species);
  const selectedSex = currentAnimal.residents
    .filter((resident) => resident.sex === animal.sex);

  if (animal.sex === undefined) {
    return currentAnimal.residents.length;
  }

  return selectedSex.length;
};

module.exports = countAnimals;
