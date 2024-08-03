// models/Todo.js
import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema({
  jobId:{
    type: mongoose.Schema.Types.ObjectId,
  } , 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location:{
    type: String,
    required: true,
  },
  companyName:{
    type: String,
    required: true,
  },
  salaryRange: {
    min: {
      type: Number,
      required: true,
      min: 0 // Minimum value should be 0 or more
    },
    max: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: function(value) {
          return value >= this.salaryRange.min;
        },
        message: 'Maximum salary must be greater than or equal to the minimum salary'
      }
    }
  },
  applicationDeadline: {
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        return value > Date.now();
      },
      message: 'Application deadline must be a future date'
    }
  }
});

const Job = mongoose.model('Todo', JobSchema);

export default Job
