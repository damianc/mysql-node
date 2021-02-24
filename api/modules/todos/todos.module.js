const express = require('express');
const todosRouter = require('./todos.router');

var todosModule = express();
todosModule.use('/todos', todosRouter);

module.exports = todosModule;