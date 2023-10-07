import React from 'react';
import './App.css';
import {} from 'react-router'
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Documento from '../Documento/Documento';
import Login from '../Login/Login';
import Formulario from '../Usuario/FormularioUsuario';
import Mesa from '../Mesa/Mesa';
import VisualizarDoc from '../VisualizarDoc/visualizarDoc';
import ListarUsuario from '../Usuario/Tabela/TabelaUsuario'
import FormularioUsuario from '../Usuario/FormularioUsuario';
import UsuarioHome from '../Usuario/UsuarioHome';
import PaginaNaoEncontrada from '../PaginaNaoEncontrada/PaginaNaoEncontrada';

function App() { 
  return (
    <div className="App">
        <Routes>
          <Route path="/mesa-virtual" element={<Mesa />} ></Route>
          <Route path="/documento" element={<Documento />} ></Route> 
          <Route path="/formulario-usuario" element={<FormularioUsuario />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/visualizar-documento/:codigo" element={<VisualizarDoc />} ></Route>
          <Route path="/listar-usuario" element={<UsuarioHome />} ></Route>
          <Route path="*" Component={PaginaNaoEncontrada}></Route>
        </Routes>
    </div>
    
  );
}

export default App;
