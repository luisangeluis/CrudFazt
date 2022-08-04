const router = require('express').Router();
const Task = require('../models/Task');

router.get('/', (req, res) => {
  // res.send('<h1>hello world</h1>');
  res.render('index');
});

router.post('/tasks/add', (req, res) => {
  // console.log(req.body);
  const task = Task(req.body);
  console.log(task);
  res.send('Saved');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/edit', (req, res) => {
  res.render('edit');
});

module.exports = {
  router,
};
