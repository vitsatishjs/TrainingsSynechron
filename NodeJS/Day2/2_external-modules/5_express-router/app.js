const express = require('express');
const app = express();
const logger = require('morgan');

const indexRouter = require('./routes/index');
const employeesRouter = require('./routes/employees');

app.set('view engine', 'pug');

app.use(logger('dev'));
app.use('/', indexRouter);
app.use('/employees', employeesRouter);

module.exports = app;