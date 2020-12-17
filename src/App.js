import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Header />
          <Routes />
          <GlobalStyle />
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
