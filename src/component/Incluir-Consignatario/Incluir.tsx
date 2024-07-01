import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Button from '../../compenentes-compartilhados/Button/Button';
import './Incluir.css'
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo';
import Form from '../../compenentes-compartilhados/Form/Form';
import Input from '../../compenentes-compartilhados/Input/Input';
import Swal from 'sweetalert2';
import { Link, useLocation } from 'react-router-dom';
import SharedInput from '../../compenentes-compartilhados/SharedInput/SharedInput';
import ModalIncluir from '../../compenentes-compartilhados/SharedInput/ModalIncluir/ModalIncluir';
import { incluircossignatario } from './Servico/ServiceT';
import Cookies from 'universal-cookie';

export class Cossignatario {
  subscritorId?: string
  pessoaRecebedoraId?: string
}

function Incluir() {
  const [subscritorId, setSubscritorId] = useState('');
  const [pessoaRecebedoraId, setPessoaRecebedoraId] = useState('');
  const location = useLocation();
  const siglaDocumento = location.state?.siglaDocumento;
  
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get('Token');
    if (!token) {
      return;
    }
    const object = JSON.parse(atob(token.split('.')[1]));
    setSubscritorId(object['sub']);
  }, [cookies]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleIncluir = async (event: any) => {
    event.preventDefault();

    if (!pessoaRecebedoraId) {
      return;
    }

    const cossignatario = new Cossignatario();
    cossignatario.subscritorId = subscritorId;
    cossignatario.pessoaRecebedoraId = pessoaRecebedoraId;

    console.log('siglaDocumento:', siglaDocumento);

    try {
      if (siglaDocumento) {
        await incluircossignatario(cossignatario, siglaDocumento);
        Swal.fire('Sucesso', `O cossignatário foi incluído com sucesso`, 'success');
      } else {
        Swal.fire('Erro', 'Sigla do documento não encontrada', 'error');
      }
    } catch (err) {
      if (err instanceof Error) {
        Swal.fire('Oops!', err.message, 'error');
      }
    }
  };

  return (
    <Conteudo>
      <Form
        titulo={"Inclusão de Cossignatário"}
        onSubmit={handleIncluir}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={7}>
            <SharedInput
              label="Matrícula"
              placeholder="Matrícula"
              onButtonClick={handleOpenModal}
              value={matricula}
              disabledValue={nome}
              onChange={(e) => setPessoaRecebedoraId(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={5}>
            <Input
              label="Função; Lotação; Localidade"
              onChange={(e) => setDepartmentId(e.target.value)}
              value={departmentId}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={4} sm={3}>
            <Button type="submit">Incluir</Button>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Link className='BtnCriarDocumento AppCriarDocumento' to="/visualizar-documento">
              <Button value="Voltar" color="grey" />
            </Link>
          </Grid>
        </Grid>
      </Form>
      <ModalIncluir
        open={modalOpen}
        handleClose={handleCloseModal}
        setMatricula={setMatricula}
        setNome={setNome}
        setDepartmentId={setDepartmentId}
        setPessoaRecebedoraId={setPessoaRecebedoraId}
      />
    </Conteudo>
  );
}

export default Incluir;
