const data = require('../data/zoo_data');

const objectEntries = Object.entries(data.hours);

const schedule = () => {
  const newObject = {};

  objectEntries.forEach((key) => {
    const currentDay = key[0];
    const currentinfo = key[1];
    const availableAnimals = data.species
      .filter((specie) => specie.availability.includes(currentDay))
      .map((specie) => specie.name);

    newObject[currentDay] = {
      officeHour: `Open from ${currentinfo.open}am until ${currentinfo.close}pm`,
      exhibition: availableAnimals,
    };

    if (currentDay === 'Monday') {
      newObject[currentDay] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    }
  });

  return newObject;
};

const getSchedule = (scheduleTarget) => {
  const animals = data.species
    .find(({ name }) => name === scheduleTarget);

  let newObject = {};

  const days = Object.entries(schedule())
    .find((day) => day[0] === scheduleTarget);

  if (days) {
    const currentDay = days[0];
    const currentinfo = days[1];
    newObject = { [currentDay]: currentinfo };
    return newObject;
  }

  if (animals) return animals.availability;

  if (scheduleTarget === undefined || animals === undefined) {
    return schedule();
  }
};

module.exports = getSchedule;
