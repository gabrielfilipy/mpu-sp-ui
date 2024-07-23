import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Documento from '../Documento/Documento';
import Login from '../Login/Login';
import Mesa from '../Mesa/Mesa';
import VisualizarDoc from '../VisualizarDoc/visualizarDoc';
import TabelaUsuario from '../Usuario/Tabela/TabelaUsuario';
import VisualizarDocCompleto from '../VisualizarDocCompleto/VisualizarDocCompleto';
import FormularioUsuario from '../Usuario/FormularioUsuario';
import UsuarioHome from '../Usuario/UsuarioHome';
import FormularioSetor from '../Setor/FormularioSetor';
import PaginaNaoEncontrada from '../PaginaNaoEncontrada/PaginaNaoEncontrada';
import TramitarDoc from '../TramitarDoc/TramitarDoc';
import CadastrarSetor from '../CadastrarSetor/CadastrarSetor';
import PermissoesUsuario from '../TelaDePermissoes/TelaDePermissoes';
import CadastrarOrgao from '../CadastrarOrgao/CadastrarOrgao';
import FormularioOrgao from '../Orgao/FormularioOrgao';
import NaoAutorizado from '../NaoAutorizado/NaoAutorizado';
import Incluir from '../Incluir-Consignatario/Incluir';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const routesWithLoader = [
    '/mesa-virtual',
    '/visualizar-documento',
    '/Incluir-Consignatario',
    '/Tramitar-documento'
  ];

  // Verificar se a rota atual precisa de loader
  const shouldShowLoader = routesWithLoader.some(route => location.pathname.startsWith(route));


  useEffect(() => {
    // Ativar loader ao entrar em uma das rotas com carregamento
    if (shouldShowLoader) {
      setLoading(true);

      // Simular um tempo de carregamento de 3 segundos
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer); // Limpar timeout em desmontagem do componente
    }
  }, [location.pathname, shouldShowLoader]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mesa />} />
        <Route path="/mesa-virtual" element={<Mesa />} />
        <Route path="/documento/:sigla" element={<Documento />} />
        <Route path="/documento" element={<Documento />} />
        <Route path="/formulario-usuario" element={<FormularioUsuario />} />
        <Route path="/formulario-usuario/:id" element={<FormularioUsuario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/visualizar-documento" element={<VisualizarDoc />} />
        <Route path="/listarusuario" element={<TabelaUsuario />} />
        <Route path="/visualizar-documento-completo" element={<VisualizarDocCompleto />} />
        <Route path="/visualizar-documento/:codigo" element={<VisualizarDoc />} />
        <Route path="/listar-usuario" element={<UsuarioHome />} />
        <Route path="/FormularioSetor" element={<FormularioSetor />} />
        <Route path="/FormularioSetor/:id" element={<FormularioSetor />} />
        <Route path="/FormularioOrgao" element={<FormularioOrgao />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
        <Route path="/Tramitar-documento" element={<TramitarDoc />} />
        <Route path="/cadastro-setor" element={<CadastrarSetor />} />
        <Route path="/permissoes-usuario" element={<PermissoesUsuario />} />
        <Route path="/cadastro-orgao" element={<CadastrarOrgao />} />
        <Route path="/nao-autorizado" element={<NaoAutorizado />} />
        <Route path="/Incluir-Consignatario" element={<Incluir />} />
      </Routes>

      {/* Loader */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading && shouldShowLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default App;
