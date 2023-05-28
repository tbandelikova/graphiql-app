import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const AuthPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) return navigate('/main');
  }, [user, loading]);
    
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
