const express = require('express');
const app = express();
const logger = require('morgan');

app.set('view engine', 'pug');

const employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

// app.use(function(req,res,next){
//     console.log("Request - Middleware 1");
//     next();
//     console.log("Response - Middleware 1");
// })

// app.use(function(req,res,next){
//     console.log("Request - Middleware 2");
//     next();
//     console.log("Response - Middleware 2");
// })

app.use(logger('dev'));

app.get('/', (req, res) => {
    console.log("Get Handler");
    res.render('index', { pTitle: "Express App" });
})

app.get('/employees', (req, res) => {
    res.render('employees', { pTitle: "Employees View", empList: employees });
})

app.listen(3000, () => {
    console.log("Express App started");
})