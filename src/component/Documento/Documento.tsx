import React, { useEffect, useState } from "react";
import Form from "../../compenentes-compartilhados/Form/Form";
import Input from "../../compenentes-compartilhados/Input/Input";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";

import './Documento.css'
import { Grid } from "@mui/material";
import Button from "../../compenentes-compartilhados/Button/Button";
import { Link } from "react-router-dom";
import { listarDocumentos } from "../Mesa/Servico/documento.servico";
import User from "../../compenentes-compartilhados/User/User";

export class DocumentoModel {
    sigla?: string
    siglaResponsavelAssinatura?: string
    modelo?: number 
    tempo?: string
}

function Documento() {

    return <Conteudo >
        
        <Form titulo={"Criar documento"}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Input label="Modelo"/>
                </Grid>
                <Grid item xs={6}>
                    <Input label="Meus textos padrões"/>
                </Grid>

                <User />

            </Grid>
                <Input label="Interessado"/>
                <Input label="Assunto"/>
                <Input label="Número de referência"/>
            
            <textarea className="TextArea"></textarea>

            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Button value="Criar" color="create" />
                </Grid>
                <Grid item xs={2}>
                    <Button>Visualizar</Button>
                </Grid>
                <Grid item xs={2}>
                    <Link className='BtnCriarDocumento AppCriarDocumento' to="/mesa-virtual">
                        <Button value="Cancelar" color="danger" />
                    </Link>
                    
                </Grid>
            </Grid>

        </Form>
    </Conteudo>

}

export default Documento