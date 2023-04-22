import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './route';
import { Header } from './components/Header';
import { AppContainer } from './components/AppContainer';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppContainer>
        <AppRoutes />
      </AppContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
