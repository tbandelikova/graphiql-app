import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetTodosQuery } from '../../services/fetchTodosService';
import { addTodo } from '../../redux/reducers/todosSlice';
// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';

const TodosList = () => {
  const { todos, counter } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { data: todosList, error, isLoading } = useGetTodosQuery(counter.counter);

  useEffect(() => {
    if (error) console.error(error);
    todosList && dispatch(addTodo(todosList));
  }, [counter.counter]);

  return (
    <List>
      {error ? <div>Something went wrong</div> : null}
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
