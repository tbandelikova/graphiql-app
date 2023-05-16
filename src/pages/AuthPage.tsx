import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <main className="main auth">
      <div className="container">
        <div className="auth__wrap">
          <div className="auth__btns">
            <Button color="secondary" size="large" endIcon={<LoginIcon color="secondary" />}>
              Sign In
            </Button>
            <Button variant="contained" color="secondary" size="large" endIcon={<HowToRegIcon />}>
              Sign Up
            </Button>
          </div>
          <div className="auth__content">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
