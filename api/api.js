const express = require('express');
const cors = require('cors');

const todosModule = require('./modules/todos/todos.module');

const app = express();
const API = express();

app.use(cors());
app.use('/api', API);

API.use(todosModule);

app.listen(3600, () => {
  console.log('MySQL API server works on port 3600');
});