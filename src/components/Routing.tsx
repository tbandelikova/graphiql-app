import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import Page404 from '../pages/Page404';
import SignIn from './Form/SignIn';
import SignUp from './Form/SignUp';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';

const Routing = () => {
  return (
    <Routes>
      <Route path="/404" element={<Page404 />} />
      <Route path="/" element={<WelcomePage />} />
      <Route path="/auth" element={<AuthPage />}>
        <Route path="" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
      </Route>
      <Route path="/main" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Routing;
