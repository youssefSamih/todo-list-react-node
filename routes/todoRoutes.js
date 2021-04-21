const mongoose = require('mongoose');

const Todo = mongoose.model('Todo');

module.exports = (app) => {
  app.get("/", async (_, response) => {
    const todos = await Todo.find({});
    response.status(200).json(todos)
  });

  app.post("/", async (request, response) => {
    const { title } = request.body;
    const todo = new Todo({
      title,
      done: false
    });
    try {
      await todo.save();
      response.status(201).json();
    } catch (e) {
      response.send(400, err);
    }
  });

  app.put("/:id", async (request, response) => {
    const id = request.params.id;
    try {
      await Todo.findByIdAndUpdate(id, { done: true })
      response.status(201).json();
    } catch (e) {
      response.status(400).json(e);
    }
  });

  app.delete("/:id", async (request, response) => {
    const _id = request.params.id;
    try {
      await Todo.deleteOne({ _id });
      response.status(201).json();
    } catch (error) {
      response.status(400).json(error);
    }
  });
};
