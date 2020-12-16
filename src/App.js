import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
