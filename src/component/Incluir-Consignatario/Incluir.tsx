import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Button from '../../compenentes-compartilhados/Button/Button';
import './Incluir.css'
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo';
import Form from '../../compenentes-compartilhados/Form/Form';
import Input from '../../compenentes-compartilhados/Input/Input';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import SharedInput from '../../compenentes-compartilhados/SharedInput/SharedInput';
import ModalIncluir from '../../compenentes-compartilhados/SharedInput/ModalIncluir/ModalIncluir';
import { IncluirCossignatario } from './Servico/ServiceT';

export class Cossignatario {
  matricula?: string; 
}

function Incluir() {
  const cossignatario = new Cossignatario();
  const [matricula, setMatricula] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  function enviarFormulario(e:any) {
    e.preventDefault();

    if (!matricula) {
      alert('É obrigatório preencher o campo de matrícula!');
      return;
    }

    cossignatario.matricula = matricula;

    try {
      IncluirCossignatario()
      Swal.fire('Sucesso', `O cossignatário com matrícula ${matricula} foi cadastrado com sucesso`, 'success');
    } catch (err) {
      if (err instanceof Error) {
        Swal.fire('Oops!', err.message, 'error');
      }
    }
  }

  return (
    <Conteudo>
      <Form
        titulo={"Inclusão de Cossignatário"}
        onSubmit={enviarFormulario}
      >
        <Grid container spacing={2}>
        <Grid item xs={6}sm={7}>
        <SharedInput 
        label="Matrícula" 
        placeholder="Matrícula"
        onButtonClick={handleOpenModal}
      />
          </Grid>
          <Grid item xs={6}sm={5}>
           <Input 
              label="Função; Lotação; Localidade"
              onChange={(e) => setMatricula(e.target.value)}
              value={matricula}
              validation={(value) => value.length > 0}
              errorMessage="A matrícula é obrigatória!"
               />
           </Grid>

        </Grid>
        <Grid container spacing={1}>
           <Grid item xs={4}sm={3}>
               <Button>
                   Incluir  
               </Button> 
           </Grid>
               <Grid item xs={4}sm={3}>
                 <Link className='BtnCriarDocumento AppCriarDocumento' to="/visualizar-documento"><Button value="Voltar" color="grey" /></Link>
                </Grid>
       </Grid>
      </Form>
      <ModalIncluir open={modalOpen} handleClose={handleCloseModal} />
    </Conteudo>
  );
}

export default Incluir
