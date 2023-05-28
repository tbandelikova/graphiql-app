import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const AuthPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const btnVariant = location.pathname === '/auth';

  useEffect(() => {
    if (loading) return;
    if (user) return navigate('/main');
  }, [user, loading]);

  return (
    <main className="main auth">
      <div className="container">
        <div className="auth__wrap">
          <div className="auth__btns">
            <Button
              variant={!btnVariant ? 'contained' : 'text'}
              color="secondary"
              size="large"
              endIcon={<LoginIcon />}
            >
              <NavLink to="/auth">Sign In</NavLink>
            </Button>
            <Button
              variant={btnVariant ? 'contained' : 'text'}
              color="secondary"
              size="large"
              endIcon={<HowToRegIcon />}
            >
              <NavLink to="/auth/register">Sign Up</NavLink>
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
