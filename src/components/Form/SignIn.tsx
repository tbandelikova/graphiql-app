import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const SignIn = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h2>Sign In</h2>
        <Form title="Sign in" />
        {/* <button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div> */}
        <div className="login__link">
          Don&apos;t have an account? <Link to="register">Register</Link> now.
        </div>
      </div>
    </div>
  );
};

export default SignIn;
