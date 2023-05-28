import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAppSelector } from '../hooks/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { getTranslation as translate } from '../services/translationService';

const WelcomePage = () => {
  const [user, loading, error] = useAuthState(auth);
  const lang = useAppSelector((state) => state.settings.lang);
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
              <h2 className="title">{translate('title', lang)}</h2>
              <p className="subtitle">{translate('subtitle', lang)}</p>
              <p className="text">{translate('text', lang)}</p>
            </div>
          </div>
          <Link to="/auth" className="link">
            Sign In / Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
