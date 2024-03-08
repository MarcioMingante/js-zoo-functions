const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const selectedEmployee = data.employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);

  if (selectedEmployee === undefined) return {};

  return selectedEmployee;
};
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
