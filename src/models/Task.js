const { Schema, model, version } = require('mongoose');

const taskSchema = new Schema(
  {
    title: {
      type:String,
      required:true,
      unique:true,
      trim:true
    },
    description: {
      type:String,
      required:true
    },
    done: {
      type:Boolean,
      default:false
    },
  },
  {
    //Es para que tenga createAt and updateAt
    timestamps:true,
    versionKey:false
  }
  
)

const Task = model('Task',taskSchema);
module.exports=Task;
