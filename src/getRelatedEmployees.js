const data = require('../data/zoo_data');

const isManager = (id) => {
  const managers = data.employees
    .find((employee) => employee.id === id);

  if (!managers) return false;

  return true;
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
};

module.exports = { isManager, getRelatedEmployees };
