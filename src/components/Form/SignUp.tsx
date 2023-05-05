import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const SignUp = () => {
  return (
    <div className="register">
      <div className="register__container">
        <h2>Sign Up</h2>
        <Form title="Sign Up" />
        <div className="register__link">
          Already have an account? <Link to="..">Login</Link> now.
        </div>
      </div>
    </div>
  );
};

export default SignUp;
