import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Documento from '../Documento/Documento';
import Login from '../Login/Login';
import Header from '../Header/Header';

function App() {
  return (
    <>

      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/documento" element={<Documento />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
