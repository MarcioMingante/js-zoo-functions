const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const getOldest = data.employees
    .find((employee) => employee.id === id);

  const responsibilities = getOldest.responsibleFor[0];

  const getAnimal = data.species
    .find((specie) => specie.id === responsibilities);

  const oldest = getAnimal.residents
    .sort((a, b) => b.age - a.age);

  return [oldest[0].name, oldest[0].sex, oldest[0].age];
};

// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
