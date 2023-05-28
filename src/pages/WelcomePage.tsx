import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { getTranslation as translate } from '../services/translationService';

const WelcomePage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) return navigate('/main');
  }, [user, loading]);
    
  return (
    <main className="main">
      <div className="container">
        <div className="wrap">
          <div className="intro">
            <div className="shape">
              <h2 className="title">{translate('title')}</h2>
              <p className="subtitle">
                {translate('subtitle')}
              </p>
              <p className="text">
                {translate('text')}
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
