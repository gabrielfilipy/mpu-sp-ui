import React, { useEffect, useRef, useState } from "react";
import { listarModelos } from './Service/Service';
import './Documento.css'
import Form from "../../compenentes-compartilhados/Form/Form";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import { Grid, TextField } from "@mui/material";
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Autocomplete from '@mui/material/Autocomplete';
import Swal from "sweetalert2";
import ModalComponent from "../../compenentes-compartilhados/Modal/Modal";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
  
export class DocumentoModel {
    sigla?: string
    siglaResponsavelAssinatura?: string
    modelo?: number 
    tempo?: string
}

interface Modelo {
  modelId: number;
  html: string;
  label: string
  descricaoCompleta: string
  active: boolean,
  siglaModel: string
}

function Documento() {
 
    const [modelos, setModelos] = useState<Modelo[]>([]);
    const [modelo, setModelo] = useState<Modelo | null>(null);
    const { sigla } = useParams();
    const [descricaoDetalhadaModelo, setDescricaoDetalhadaModelo] = useState('');
    const [ label, setLabel ] = useState('')
    /**Modal */
    const [modalOpen, setModalOpen] = useState(false);

    const [html, setHtml] = useState("");
    const [text, setText] = useState('');
    const [editorOpen, setEditorOpen] = useState(false);

    const handleChange = (content: string, delta: any, source: string, editor: any) => {
      setText(content);
    };

useEffect(() => {
      // Atualiza o HTML sempre que o estado 'modelo' mudar.
    if (modelo) {
      setHtml(modelo.html);
    } 
}, [modelo, setModelo]);

useEffect(() => {
    //Oculta a label e o textarea da descrição do documento para aparecer o editor de texto customizado.
    const textarea = document.querySelector('textarea');
    const label = document.querySelector(`label[for='DescricaoLabel']`) as HTMLLabelElement;

    if(label) {
      label.style.display = 'none';
    }

    if (textarea) {
      textarea.style.display = 'none';
      textarea.value = text;
      setEditorOpen(true)
    } else {
      setEditorOpen(false)
    }
}, [html]);

useEffect(() => {
    const scriptCadastroDocumento = async () => {
        try {
          const scriptCadastroDocumento = await require('../../scriptCadastroDocumento');
        } catch (error) {
          console.error("Erro ao importar script:", error);
        }
    };
    scriptCadastroDocumento();
    listar() 
}, []);

async function listar() {
  try{  
      const _cadastros = await listarModelos()
      setModelos(_cadastros)
  } catch(err) {
      if(err instanceof Error)
      Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
  }
}

    async function foiSelecionadoUmModelo(value: any) {
        setModelo(value);
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
                    renderInput={(params) => <TextField {...params} label="Selecione um modelo..." />}
                    onChange={(event, value) => {
                      foiSelecionadoUmModelo(value)
                    }}
                  />
                </Grid> 
                <Grid item xs={12} sm={6}>
                  <p className="descricao-completa-modelo">{ descricaoDetalhadaModelo }</p>
                </Grid>
            </Grid>
            
            <div>
              { 
                parse(
                  `<input type="hidden" class="Modelo" id="Modelo" value="${modelo?.modelId}">` +
                  `<form class="documentoForm" id="documentoForm">` + 
                  `<div class="container-box">
                    <div class="item-box-1">
                    <label>Matrícula</label>
                      <div class="input-group">
                        <input type="text" class="MatriculaUsuario" id="MatriculaUsuario" placeholder="Matrícula">
                        <button type="button" class="BtnModalListarPessoas" id="BtnModalListarPessoas">...</button>
                      </div>
                    </div>
                    <div class="item-box-2">
                      <label>Nome completo</label>
                      <input type="text" class="NomeClompletoUsuario" id="NomeClompletoUsuario" placeholder="Nome">
                    </div>
                  </div>
                  ` +
                    `<div class="item-gerais">` +
                      html + 
                    `<div>` +
                    `<br/><br/><button type="submit" class="BtnCriar">Criar</button>` +
                    `<button type="submit" class="btn btn-primary">Visualizar</button>` +
                  `</form>`
                ) 
              }
            </div>

            <div>
              {editorOpen ? (
                <ReactQuill 
                  value={text} 
                  onChange={handleChange} 
                  style={{height: '200px'}}
                />
              ) : null}
            </div>

        </Form>
        <ModalComponent descricao="O modelo do documento está sendo carregado..." open={modalOpen}/>
    </Conteudo>
}

export default Documento