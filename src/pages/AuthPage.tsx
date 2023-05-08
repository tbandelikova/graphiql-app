import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) return navigate('/main');
  }, [user, loading]);

  return (
    <>
      <div>AuthPage</div>
      <Outlet />
    </>
  );
};

export default AuthPage;
