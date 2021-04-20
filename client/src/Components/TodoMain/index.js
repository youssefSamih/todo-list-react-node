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
  return (
    <Container>
      <Title title="To Do" />
      <InputsContainer>
        <Input placeholder="What needs to be done" />
        <Button>Add</Button>
      </InputsContainer>
      <ListUl>
        <ListItem>
          <ListItemTextContent>Buy milk</ListItemTextContent>
          <Button borderRadius={12} state="danger">
            Remove
          </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemTextContent done>Walk the dog</ListItemTextContent>
          <Button borderRadius={12} state="danger">
            Remove
          </Button>
        </ListItem>
      </ListUl>
    </Container>
  );
};

export default TodoMain;
