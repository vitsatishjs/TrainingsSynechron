const express = require('express');
const app = express();

app.set('view engine', 'pug');

const employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.get('/', (req, res) => {
    res.render('index', { pTitle: "Express App" });
})

app.get('/employees', (req, res) => {
    res.render('employees', { pTitle: "Employees View", empList: employees });
})

app.listen(3000, () => {
    console.log("Express App started");
})