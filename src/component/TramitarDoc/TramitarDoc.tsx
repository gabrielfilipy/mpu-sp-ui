import React, { useEffect, useState } from "react";
import Button from "../../compenentes-compartilhados/Button/Button";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import './TramitarDoc.css';
import { Autocomplete, Grid, TextField } from "@mui/material";
import MensagemDeAlerta from "./MensagemDeAlerta/MensagemDeAlerta";
import { Link } from "react-router-dom";
import SharedInput from "../../compenentes-compartilhados/SharedInput/SharedInput";
import Form from "../../compenentes-compartilhados/Form/Form";
import ModalIncluir from "../../compenentes-compartilhados/SharedInput/ModalIncluir/ModalIncluir";
import Swal from "sweetalert2";
import { listarUsuario } from "./Servico/Servico";
import Input from "../../compenentes-compartilhados/Input/Input";

// Definir os tipos para os dados do usuário
interface User {
  userModel: {
    nome: string;
    active: boolean | null;
    id: number;
    matricula: string;
    email: string;
    departmentId: number;
    telefone: string | null;
    endereco: string | null;
    rg: string | null;
    cpf: string | null;
  };
  department: {
    id: number;
    nome: string;
  };
}

function TramitarDoc() {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  async function listar() {
    try {  
      const response = await listarUsuario();
      const _cadastros = response.content; 
      setUsuarios(_cadastros);
    } catch (err) {
      if (err instanceof Error)
        Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error');
    }
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <Conteudo>
      <Form titulo={'Tramitar Documento'}>
        <Grid item xs={7.8}>
          <p>Escolha para quem será tramitado esse documento</p>
        </Grid>
        <Grid container spacing={4}>
        <Grid item xs={6}sm={3}>
              <Input label="Sigla do Documento" disabled />
        </Grid>
          <Grid item xs={6} sm={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={usuarios}
              getOptionLabel={(option) => option.userModel.nome}
              sx={{
                '& .MuiAutocomplete-inputRoot': {
                  borderRadius: '2px',
                  marginTop: '35px',
                  alignItems: 'center',
                  height: '45px',
                  width: {
                  xs: '100%', // Para telas menores que 600px, o width será 100%
                  md: '300px' // Para telas maiores que 600px, o width será 300px
                  }
                }
              }}
              renderInput={(params) => (<TextField {...params} label="Destinatário"
                sx={{
                  '& label': {
                    marginTop: '35px',
                  },
                }}
              />
              )}
            />
        </Grid>
          
          <Grid item xs={12} sm={7}>
            <SharedInput 
              label="" 
              placeholder=""
              onButtonClick={handleOpenModal}
            />
           
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container spacing={0.5}>
          <Grid item xs={4} sm={2}>
            <Button color="primary" onClick={MensagemDeAlerta}>Tramitar</Button>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Link to="/visualizar-documento">
              <Button value="Cancelar" color="danger"></Button>
            </Link>
          </Grid>
        </Grid>
      </Form>
      <ModalIncluir open={modalOpen} handleClose={handleCloseModal} />
    </Conteudo>
  );
}

export default TramitarDoc;
