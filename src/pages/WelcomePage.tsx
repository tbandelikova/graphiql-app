import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <>
      <div>Welcome Page</div>
      <Link to="/auth">Sign In / Sign Up</Link>
    </>
  );
};

export default WelcomePage;
