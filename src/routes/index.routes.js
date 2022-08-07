const router = require('express').Router();
const {getAllTasks,createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone} =require('../controllers/tasks.controllers');

router.get('/', getAllTasks);

router.post('/tasks/add',createTask);

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/edit/:id',renderTaskEdit);

router.post('/edit/:id', editTask);

router.get('/delete/:id', deleteTask);

router.get('/toggleDone/:id', taskToggleDone);

module.exports = {
  router,
};
