import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) return navigate('/main');
  }, [user, loading]);

  return (
    <>
      <div>Welcome Page</div>
      <Link to="/auth">Sign In / Sign Up</Link>
    </>
  );
};

export default WelcomePage;
