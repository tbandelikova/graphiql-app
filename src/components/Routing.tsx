import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import Page404 from '../pages/Page404';

const Routing = () => {
  return (
    <Routes>
      <Route path="/404" element={<Page404 />} />
      <Route path="/" element={<WelcomePage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Routing;
