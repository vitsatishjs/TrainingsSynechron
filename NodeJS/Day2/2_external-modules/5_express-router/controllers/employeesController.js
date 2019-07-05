const da = require('../data-access');

module.exports.list = (req, res) => {
    res.render('employees/list', { pTitle: "Employees View", empList: da.getAllEmployees() });
}

module.exports.details = (req, res) => {
    var emp = da.getEmployee(req.params.id);
    res.render('employees/details', { pTitle: "Details View", employee: emp });
}