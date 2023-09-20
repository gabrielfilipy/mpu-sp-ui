import React from "react";
import Form from "../../compenentes-compartilhados/Form/Form";
import Input from "../../compenentes-compartilhados/Input/Input";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import { Grid } from "@mui/material";

function Documento() {

    return <Conteudo >
        <Form titulo="Criar documento">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <Input label="Responsável pela assinatura"/>
                </Grid>
                <Grid item xs={6}>
                <Input label="nome"/>
                </Grid>
            </Grid>
            
            <Grid container spacing={2}>
                <Grid item xs={5}>
                <Input label="idade"/>
                </Grid>
                <Grid item xs={4}>
                <Input label="cpf"/>
                </Grid>
            </Grid>


        </Form>
    </Conteudo>

}

export default Documento