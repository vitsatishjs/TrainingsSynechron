const employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

module.exports.getAllEmployees = function () {
    return employees;
}

module.exports.getEmployee = function (id) {
    return employees.find(e => e.id == id);
}