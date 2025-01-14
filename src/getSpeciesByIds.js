const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const selectedSpecie = data.species
    .filter((specie) => ids.find((specieId) => specieId === specie.id));

  return selectedSpecie;
};

module.exports = getSpeciesByIds;
