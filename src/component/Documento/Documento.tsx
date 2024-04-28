import React, { useEffect, useRef, useState } from "react";

import { listarDocuments } from './Service/Service';
import './Documento.css'
import Form from "../../compenentes-compartilhados/Form/Form";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import { Grid, TextField } from "@mui/material";
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Autocomplete from '@mui/material/Autocomplete';
import Swal from "sweetalert2";
import ModalComponent from "../../compenentes-compartilhados/Modal/Modal";
import DualInput from "../../compenentes-compartilhados/Input/DualInputWithButtonProps";

export class DocumentoModel {
    sigla?: string
    siglaResponsavelAssinatura?: string
    modelo?: number 
    tempo?: string
}

interface Modelo {
  id: number;
  html: string;
  label: string
  descricaoCompleta: string
}

function Documento() {

  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [modelo, setModelo] = useState<Modelo | null>(null);
    const { sigla } = useParams();
    const [descricaoDetalhadaModelo, setDescricaoDetalhadaModelo] = useState('');
    const [selection, setSelection] = useState(false);
    /**Modal */
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        listar()
    }, []);

    useEffect(() => {
      if (modelos.length > 0) {
        setModelo(modelos[0]);
      }
    }, [modelos]);

    useEffect(() => {
      if(selection) {
        
      }
      setSelection(false)
    }, [setModelo]);

    const html = `${modelo?.html}`;

    async function listar() {
      try{  
          const _cadastros = await listarDocuments()
          setModelos(_cadastros)
      } catch(err) {
          if(err instanceof Error)
          Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
      }
    }

    async function foiSelecionadoUmModelo(value: any) {
        setModalOpen(true)
        setModelo(value);
        setTimeout(() => {
        const importarScriptQualquer = async () => {
        const scriptQualquer = require('../../scriptCadastroDocumento');
        };
          importarScriptQualquer();
          setModalOpen(false)
        }, 5000);
    }
    
    return <Conteudo >
        <Form titulo={!sigla ? 'Criar documento' : 'Editar documento'}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={modelos}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField {...params} label="Modelo" />}
                    onChange={(event, value) => {
                      foiSelecionadoUmModelo(value)
                    }}
                  />
                   <Grid item xs={6} sm={4}>
                  <DualInput
                     label1="Nome"
                     name1="nome"
                     placeholder1="Digite o nome"
                     label2="Descrição"
                     name2="descricao"
                     placeholder2="Digite a descrição"
                     buttonText="..."
                     onButtonClick={() => {
                    }}
                  />
                  </Grid>
                </Grid> 
                <Grid item xs={12} sm={6}>
                  <p className="descricao-completa-modelo">{ descricaoDetalhadaModelo }</p>
                </Grid>
            </Grid>
            <div>
              { parse(html) }
            </div>
        </Form>
        <ModalComponent descricao="O modelo do documento está sendo carregado..." open={modalOpen}/>
    </Conteudo>
}

export default Documento