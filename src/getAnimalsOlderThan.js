const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const selectedAnimal = data.species
    .filter((specie) => specie.name === animal)[0].residents
    .every((resident) => resident.age >= age);

  return selectedAnimal;
};

// console.log(getAnimalsOlderThan('penguins', 14));

module.exports = getAnimalsOlderThan;
