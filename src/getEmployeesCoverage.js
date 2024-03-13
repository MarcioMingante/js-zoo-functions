const data = require('../data/zoo_data');

const selectedEmployee = (param) => {
  const obj = Object.values(param)[0];

  const employee = data.employees
    .find(({ firstName, lastName, id }) => firstName === obj || lastName === obj || id === obj);

    if (!employee) throw new Error('Informações inválidas');

    const animalsList = [];

    employee.responsibleFor
      .forEach((id) => {
        animalsList.push(data.species
          .find((specie) => specie.id === id));
      });
  
    const species = animalsList.map((animal) => animal.name);
    const locations = animalsList.map((animal) => animal.location);
  
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species,
      locations,
    };
};

const whenUndefined = () => {
  const getEmployees = data.employees
    .map(selectedEmployee);

  return getEmployees;
};

const getEmployeesCoverage = (param) => {
  if (!param) return whenUndefined();
  
  const employee = selectedEmployee(param);

  return employee;
};

module.exports = getEmployeesCoverage;
