const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const selectedAnimal = data.species
    .filter(({ name }) => name === animal)[0].residents
    .every((resident) => resident.age >= age);

  return selectedAnimal;
};

module.exports = getAnimalsOlderThan;
