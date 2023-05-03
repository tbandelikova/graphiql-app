import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetTodosQuery } from '../../services/fetchTodosService';
import { addTodo } from '../../redux/reducers/todosSlice';
// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';

const TodosList = () => {
  const { todos, counter } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { data: todosList, error, isLoading } = useGetTodosQuery(counter.counter);

  useEffect(() => {
    console.log(todos.todos);
    todosList && dispatch(addTodo(todosList));
  }, [counter.counter]);

  return (
    <List>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        todos.todos.map((elem) => (
          <ListItem className="list-item" key={elem.id}>
            {' '}
            <Checkbox edge="start" />
            {elem.title}
          </ListItem>
        ))
      )}
    </List>
  );
};

export default TodosList;
