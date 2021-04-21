
const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String,
  done: Boolean,
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('Todo', todoSchema);