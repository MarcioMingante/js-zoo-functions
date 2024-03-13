const data = require('../data/zoo_data');

const isManager = (id) => {
  const checkManager = data.employees
    .some((employee) => employee.managers.includes(id));

  return checkManager;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const infos = data.employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((key) => `${key.firstName} ${key.lastName}`);

  return infos;
};

module.exports = { isManager, getRelatedEmployees };
