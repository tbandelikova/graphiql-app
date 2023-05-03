import React from 'react';
import Counter from '../components/Counter/Counter';
import TodosList from '../components/TodosList/TodosList';

const WelcomePage = () => {
  return (
    <div>
      <Counter />
      <hr />
      <TodosList />
    </div>
  );
};

export default WelcomePage;
