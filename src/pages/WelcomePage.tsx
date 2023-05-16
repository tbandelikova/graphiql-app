import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="wrap">
          <div className="intro">
            <div className="shape">
              <h2 className="title">Welcome!</h2>
              <p className="subtitle">
                to a playground/IDE for graphQL requests
              </p>
              <p className="text">
                Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results.
              </p>
            </div>
          </div>
          <Link to="/auth" className="link">Sign In / Sign Up</Link>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
