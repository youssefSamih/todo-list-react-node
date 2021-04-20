import React from 'react';
import Button from 'Ui/Button';
import Input from 'Ui/Input';
import Title from 'Ui/Title';

import {
  Container,
  Divider,
  InputsContainer,
  ListItem,
  ListItemTextContent,
  ListUl,
} from './style';

const TodoMain = () => {
  const [state, setState] = React.useState({
    todolistInput: '',
    todoList: [],
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      todoList: [
        ...prevState.todoList.filter(
          (todo) => todo.value !== prevState.todolistInput
        ),
        {
          value: prevState.todolistInput,
          done: false,
        },
      ],
    }));
  };
  const onRemove = (value) =>
    setState((prevState) => ({
      ...prevState,
      todoList: prevState.todoList.filter((todo) => todo.value !== value),
    }));
  const handleDoneTodo = (updatedTodo) =>
    setState((prevState) => ({
      ...prevState,
      todoList: [
        ...prevState.todoList
          .slice(0)
          .filter((todo) => todo.value !== updatedTodo.value),
        {
          ...updatedTodo,
          done: !updatedTodo.done,
        },
      ],
    }));
  return (
    <Container>
      <Title title="To Do" />
      <InputsContainer {...{ onSubmit }}>
        <Input
          name="todolistInput"
          placeholder="What needs to be done"
          value={state.todolistInput}
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              todolistInput: e.target.value,
            }))
          }
        />
        <Button type="submit">Add</Button>
      </InputsContainer>
      <ListUl>
        {state.todoList.map((todo, i) => (
          <React.Fragment key={todo.value}>
            <ListItem>
              <ListItemTextContent
                onClick={() => handleDoneTodo(todo)}
                done={todo.done}
              >
                {todo.value}
              </ListItemTextContent>
              {!todo.done && (
                <Button
                  borderRadius={12}
                  state="danger"
                  onClick={() => onRemove(todo.value)}
                >
                  Remove
                </Button>
              )}
            </ListItem>
            {state.todoList.length - 1 !== i && <Divider />}
          </React.Fragment>
        ))}
      </ListUl>
    </Container>
  );
};

export default TodoMain;
