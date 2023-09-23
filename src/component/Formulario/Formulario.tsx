import React, { useState } from "react";
import Form from "../../compenentes-compartilhados/Form/Form";
import Input from "../../compenentes-compartilhados/Input/Input";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";


import { Grid } from "@mui/material";
import Button from "../../compenentes-compartilhados/Button/Button";

function Formulario() {

    return <Conteudo >
        
        <Form titulo={"Cadastro de Usuário"}>
        <Input label="Nome Completo"/>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Input label="CPF"/>
                </Grid>
                <Grid item xs={4}>
                    <Input label="RG"/>
                </Grid>

                <Grid item xs={4}>
                    <Input label="Setor"/>
                </Grid>
                <Grid item xs={3}>
                    <Input label="Dados de Nascimento"/>
                </Grid>
                <Grid item xs={7}>
                    <Input label="Endereço"/>
                </Grid>
            </Grid>
            <Input label="E-mail"/>
      
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Button value="Cadastrar"></Button>
                </Grid>
            </Grid>

        </Form>
    </Conteudo>

}

export default Formulario