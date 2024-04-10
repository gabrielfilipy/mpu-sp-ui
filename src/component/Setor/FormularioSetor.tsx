import React, { useState } from "react";
import Form from "@compartilhados/Form";
import Input from "@compartilhados/Input";
import Conteudo from "@compartilhados/Conteudo";
import { Grid } from "@mui/material";
import Button from "@compartilhados/Button";
import './FormularioSetor.css'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { cadastrarSetor } from "./Servico/sertor.service";

export class Setor {
    orgao?: string
    nome?: string
    sigla?: string 
    unidadepai?: string
    localidade?: string

}

function FormularioSetor() {

    const setor = new Setor()

    const [ orgao, setOrgao] = useState('');
    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');
    const [ unidadepai, setUnidadePai ] = useState(''); 
    const [ localidade, setLocalidade ] = useState('');

    function enviarFormulario(e:any) {
        e.preventDefault();

        if(orgao === '' && sigla === '') {
            alert('É obrigatório preencher todos os campos!')
            return;
        }

        setor.orgao = orgao
        setor.nome = nome
        setor.sigla = sigla
        setor.unidadepai = unidadepai
        setor.localidade = localidade
      

        try {
           cadastrarSetor(setor)
            Swal.fire('Setor', `O setor ${ orgao } foi cadastrado com sucesso`, 'success')
        } catch(err) {
            if (err instanceof Error) 
              Swal.fire('Oops!', err.message, 'error')
        }

    }

    return <Conteudo >
        
        <Form 
            titulo={"Cadastro de Setor"}
            onSubmit={ enviarFormulario } 
        >
            <Grid container spacing={2}>
                <Grid item xs={12}sm={4}>
                    <Input 
                        label="Nome" 
                        onChange={ (e) => setNome(e.target.value) }
                        value={ nome }
                    />
                </Grid>
                <Grid item xs={6}sm={4}>
                    <Input 
                        label="Órgão" 
                        onChange={ (e) => setOrgao(e.target.value) }
                        value={ orgao }
                    /> 
                    </Grid>
                <Grid item xs={6}sm={4}>
                    <Input 
                        label="Sigla"
                        onChange={ (e) => setSigla(e.target.value) }
                        value={ sigla }
                    />
                </Grid>

                <Grid item xs={6}sm={4}>
                    <Input 
                        label="Unidade Pai" 
                        onChange={ (e) => setUnidadePai(e.target.value) }
                        value={ unidadepai }
                    />
                </Grid>
                <Grid item xs={6}sm={4}>
                    <Input 
                        label="Localidade"
                        onChange={ (e) => setLocalidade(e.target.value) }
                        value={ localidade}
                    />
                </Grid>
            </Grid>
                <br></br>
                <Grid container spacing={1}>
                    <Grid item xs={4}sm={3}>
                        <Button>
                            Cadastrar  
                        </Button> 
                    </Grid>
                    <Grid item xs={4}sm={3}>
                        <Link className='BtnCriarDocumento AppCriarDocumento' to="/listar-usuario"><Button value="Cancelar" color="grey" /></Link>
                    </Grid>
                </Grid>

        </Form>
    </Conteudo>

}

export default FormularioSetor