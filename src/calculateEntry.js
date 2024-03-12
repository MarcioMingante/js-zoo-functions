const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const childs = entrants
    .filter(({ age }) => age < 18);

  const adults = entrants
    .filter(({ age }) => age >= 18 && age < 50);

  const seniors = entrants
    .filter(({ age }) => age >= 50);

  return {
    child: childs.length,
    adult: adults.length,
    senior: seniors.length,
  };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants.length === 0) return 0;

  const currentObject = countEntrants(entrants);

  const childs = currentObject.child * data.prices.child;
  const adults = currentObject.adult * data.prices.adult;
  const seniors = currentObject.senior * data.prices.senior;

  const result = childs + adults + seniors;

  return result;
};

module.exports = { calculateEntry, countEntrants };
