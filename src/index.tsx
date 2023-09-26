import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App/App';
import Header from './component/Header/Header';
import SubHeader from './component/SubHeader/SubHeader';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <SubHeader></SubHeader>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
