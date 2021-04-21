import React from 'react';
import api from 'services/api';
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
  const getData = async () => {
    try {
      const res = await api.get('/');
      setState({
        todolistInput: '',
        todoList: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/', {
        title: state.todolistInput,
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  };
  const onRemove = async (id) => {
    try {
      await api.delete(`/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };
  const handleDoneTodo = async (id) => {
    try {
      await api.put(`/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };
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
        {state.todoList?.map((todo, i) => (
          <React.Fragment key={todo._id}>
            <ListItem>
              <ListItemTextContent
                onClick={() => handleDoneTodo(todo._id)}
                done={todo.done}
              >
                {todo.title}
              </ListItemTextContent>
              {!todo.done && (
                <Button
                  borderRadius={12}
                  state="danger"
                  onClick={() => onRemove(todo._id)}
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
