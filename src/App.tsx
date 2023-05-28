import React from 'react';
import Routing from './components/Routing';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
