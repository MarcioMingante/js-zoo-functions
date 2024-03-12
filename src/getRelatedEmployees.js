const data = require('../data/zoo_data');

const isManager = (id) => {
  const checkManager = data.employees
    .some((employee) => employee.managers.includes(id));

  return checkManager;
};

const getRelatedEmployees = (managerId) => {
  // if (isManager(managerId)) {
  //   const colaboradores = data.employees
  //     .filter((employee) => )
  // }
};

module.exports = { isManager, getRelatedEmployees };
