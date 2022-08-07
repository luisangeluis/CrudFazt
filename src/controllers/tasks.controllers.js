const Task = require('../models/Task');

const getAllTasks=async (req, res) => {
  // res.send('<h1>hello world</h1>');
  const tasks = await Task.find().lean();
  console.log(tasks);
  res.render('index', { tasks: tasks });
}

const createTask=async (req, res) => {
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

}

const renderTaskEdit = async(req, res) => {
  try{
    const task = await Task.findById(req.params.id).lean();
    console.log(task);
    res.render('edit',{task});
  }catch(error){
    console.log(error);
  }
  
}

const editTask=async (req, res) => {
  try{
    console.log(req.body);
    const {id} =req.params;
    await Task.findByIdAndUpdate(id,req.body);
    res.redirect('/');
  }catch(error){
    console.log(error.message);
  }
  
}

const deleteTask =async (req, res) => {
  try{
    const {id} =req.params;
    await Task.findByIdAndDelete(id)
    res.redirect('/');
  }catch(error){
    console.log(error.message);
  }
}

const taskToggleDone=async (req, res) => {
  try{
    const {id} =req.params;
    const task =await Task.findById(id);
    
    task.done =!task.done;

    await task.save();
    
    res.redirect('/');
  }catch(error){
    console.log(error);
  }
}

module.exports = {
  getAllTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone
};