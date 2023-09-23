import React from 'react';
import './App.css';
import {} from 'react-router'
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Documento from '../Documento/Documento';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/documento" element={<Documento />} ></Route>
          <Route path="/login" element={<Login />} ></Route>

        </Routes>
      </BrowserRouter>
    </div>
);
  
}

export default App;
