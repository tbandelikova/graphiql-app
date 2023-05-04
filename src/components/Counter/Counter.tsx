import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { increment, decrement } from '../../redux/reducers/counterSlice';
import Button from '@mui/material/Button';

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="counter-number">{counter}</div>
      <span className="button-container">
        <Button
          className="counter-button"
          variant="contained"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </span>
      <span className="button-container">
        <Button
          className="counter-button"
          variant="contained"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </span>
    </div>
  );
};

export default Counter;
