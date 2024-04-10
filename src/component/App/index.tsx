import React from 'react';
import './index.css';
import {} from 'react-router'
import { Route, Routes } from 'react-router-dom';
import Documento from '../Documento';
import Login from '../Login';
import Mesa from '../Mesa';
import VisualizarDoc from '../VisualizarDoc';
import TabelaUsuario from '../Usuario/Tabela';
import VisualizarDocCompleto from '../VisualizarDocCompleto';
import FormularioUsuario from '../Usuario/FormularioUsuario';
import UsuarioHome from '../Usuario/UsuarioHome';
import FormularioSetor from '../Setor/FormularioSetor';
import PaginaNaoEncontrada from '../PaginaNaoEncontrada';
import TramitarDoc from '../TramitarDoc/TramitarDoc';
import CadastrarSetor from '../CadastrarSetor';

import PermissoesUsuario from '../TelaDePermissoes/TelaDePermissoes';

import CadastrarOrgao from '../CadastrarOrgao';
import FormularioOrgao from '../Orgao';
import EditarDocumento from '../EditarDocumento';
import NaoAutorizado from '../NaoAutorizado';

function App() { 
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Mesa />} ></Route>
          <Route path="/mesa-virtual" element={<Mesa />} ></Route>
          <Route path="/documento" element={<Documento />} ></Route> 
          <Route path="/formulario-usuario" element={<FormularioUsuario />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/visualizar-documento" element={<VisualizarDoc />} ></Route>
          <Route path="/listarusuario" element={<TabelaUsuario />} ></Route>
          <Route path="/visualizar-documento-completo" element={<VisualizarDocCompleto />} ></Route>
          <Route path="/visualizar-documento/:codigo" element={<VisualizarDoc />} ></Route>
          <Route path="/listar-usuario" element={<UsuarioHome />} ></Route>
          <Route path="/FormularioSetor" element={<FormularioSetor />} ></Route>
          <Route path="/FormularioOrgao" element={<FormularioOrgao />} ></Route>
          <Route path="*" element={<PaginaNaoEncontrada/>} ></Route>
          <Route path="/Tramitar-documento" element={<TramitarDoc />} ></Route>
          <Route path="/cadastro-setor" element={<CadastrarSetor />} ></Route>
          <Route path='/permissoes-usuario' element={<PermissoesUsuario />}></Route>
          <Route path="/cadastro-orgao" element={<CadastrarOrgao />} ></Route>
          <Route path="/editar-documento" element={<EditarDocumento />} ></Route>
          <Route path='/nao-autorizado' element={<NaoAutorizado />}></Route>
        </Routes>
    </div>
    
  );
}

export default App;
