import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <>
      <div>AuthPage</div>
      <Outlet />
    </>
  );
};

export default AuthPage;
