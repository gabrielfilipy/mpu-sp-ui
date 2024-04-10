import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@componentes/App';
import Header from '@componentes/Header';
import { BrowserRouter } from 'react-router-dom';
import SubHeader from '@componentes/SubHeader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <SubHeader/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
