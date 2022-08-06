const router = require('express').Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  // res.send('<h1>hello world</h1>');
  const tasks = await Task.find().lean();
  console.log(tasks);
  res.render('index', { tasks: tasks });

});

router.post('/tasks/add', async (req, res) => {
  try {
    const task = Task(req.body);
    // console.log(task);
    // const taskSaved =await task.save()
    await task.save()
    // console.log(taskSaved);
    // res.send('Saved');
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }

});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/edit/:id', async (req, res) => {

  try{
    const task = await Task.findById(req.params.id).lean();
    console.log(task);
    res.render('edit',{task});
  }catch(error){
    console.log(error);
  }
  
});

router.post('/edit/:id', async (req, res) => {
  try{
    console.log(req.body);
    const {id} =req.params;
  
    await Task.findByIdAndUpdate(id,req.body);
  
    res.redirect('/');
  }catch(error){
    console.log(error.message);
  }
  
});

module.exports = {
  router,
};
