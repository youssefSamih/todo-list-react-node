module.exports = (app) => {
  let todos = [
    { id: 1, title: "buy the milk", done: false },
    { id: 2, title: "rent a car", done: false },
    { id: 3, title: "feed the cat", done: false },
  ];
  let count = todos.length;
  app.get("/", (_, response) => response.status(200).json(todos));

  app.post("/", (request, response) => {
    const newTodo = request.body;
    count = count + 1;
    newTodo.id = count;
    newTodo.done = false
    todos.push(newTodo);
    response.status(201).json();
  });

  app.put("/:id", (request, response) => {
    var id = request.params.id;
    const todoToUpdate = todos.filter((todo) => todo.id == id);
    if (todoToUpdate.length !== 0) {
      const updatedTodo = [...todos.filter((todo) => todo.id != id), {...todoToUpdate[0], done: !todoToUpdate[0].done}];
      todos = updatedTodo;
      response.status(204).send();
    } else {
      response.status(404, "The task is not found").send();
    }
  });

  app.delete("/:id", (request, response) => {
    const id = request.params.id;
    if (todos.filter((todo) => todo.id == id).length !== 0) {
      todos = todos.filter((todo) => todo.id != id);
      response.status(200).send();
    } else {
      response.status(404).send();
    }
  });
};
