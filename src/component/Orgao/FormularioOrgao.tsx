import React, { useState } from "react";
import Form from "@compartilhados/Form/Form";
import Input from "@compartilhados/Input/Input";
import Conteudo from "@compartilhados/Conteudo/Conteudo";
import { Grid } from "@mui/material";
import Button from "@compartilhados/Button/Button";
import './FormularioOrgao.css'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { cadastrarOrgao } from "./Servico/orgao.service";

export class Setor {
    orgao?: string
    nome?: string

}

function FormularioOrgao() {

    const setor = new Setor()
    const [ orgao] = useState('');
    const [ nome, setNome ] = useState('');

    function enviarFormulario(e:any) {
        e.preventDefault();

        if(orgao === '' && nome === '') {
            alert('É obrigatório preencher todos os campos!')
            return;
        }

        setor.orgao = orgao
        setor.nome = nome
      

        try {
           cadastrarOrgao(setor)
            Swal.fire('Setor', `O Órgão ${ orgao } foi cadastrado com sucesso`, 'success')
        } catch(err) {
            if (err instanceof Error) 
              Swal.fire('Oops!', err.message, 'error')
        }

    }

    return <Conteudo >
        
        <Form 
            titulo={"Cadastro de Órgão"}
            onSubmit={ enviarFormulario } >
        
            <Grid container spacing={1}> 
                <Grid item xs={12}>
                    <Input 
                        label="Nome:" 
                        onChange={ (e) => setNome(e.target.value) }
                        value={ nome }
                    />
                </Grid>
            
            </Grid>
            <div className="btnComando">
                <Grid container spacing={2}>
                    <Grid item xs={4}sm={2}>
                        <div className="btnCadastrar">
                            <Button>
                                Cadastrar  
                            </Button> 
                        </div>
                    </Grid>

                    <Grid item xs={4}sm={2}>
                        <div className="btnCancelar">
                            <Link className='BtnCriarDocumento AppCriarDocumento' to="/cadastro-orgao"><Button value="Cancelar" color="grey" /></Link>
                        </div>                    
                    </Grid>
                </Grid>
            </div>

        </Form>
    </Conteudo>

}

export default FormularioOrgao