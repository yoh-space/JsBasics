import employee from './employee.json' with {type: 'json'};

const parsedEmployee = JSON.parse(employee);
console.log(parsedEmployee);