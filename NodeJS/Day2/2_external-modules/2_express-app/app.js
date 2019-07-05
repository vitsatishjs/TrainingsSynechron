const express = require('express');
const app = express();

const employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/api/data', (req, res) => {
    res.json(employees);
})

app.listen(3000, () => {
    console.log("Express App ;started");
})