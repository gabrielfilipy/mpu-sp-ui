import React from "react";
import Input from "@compartilhados/Input/Input";
import Button from "@compartilhados/Button/Button";
import Conteudo from "@compartilhados/Conteudo/Conteudo";
import './TramitarDoc.css'
import { Grid } from "@mui/material";
import MensagemDeAlerta from "./MensagemDeAlerta/MensagemDeAlerta";
import GradingIcon from '@mui/icons-material/Grading';
import { Link } from "react-router-dom";


function TramitarDoc() {


    return <Conteudo>

        <div className="caixadotramitardoc">
            <h1>Tramitar Documento <GradingIcon fontSize="large" /></h1>
            <Grid item xs={7.8}>
                <p>Escolha para quem será tramitado esse documento</p>
            </Grid>
            <div className="inputdotramitardoc">
                <Grid container spacing={5}>
                    <Grid item xs={12}sm={4}>
                        <Input label="Assinatura:" disabled />
                    </Grid>
                    <Grid item xs={6}sm={4}>
                        <Input label="Cod.Documento" disabled />
                    </Grid>
                    <Grid item xs={6}sm={4}>
                        <Input disabled />
                    </Grid>
                </Grid>
            </div>
                <br></br>
                <br></br>
                <br></br>
                <Grid container spacing={0.5}>
                    <Grid item xs={4}sm={2}>
                       <Button color="primary" onClick={MensagemDeAlerta} >Tramitar</Button>
                    </Grid>
                    <Grid item xs={4}sm={2}>
                     <Link to="/visualizar-documento/MEM-5546"  ><Button value="Cancelar" color="danger"  ></Button></Link>
                    </Grid>
                </Grid>

        </div>

    </Conteudo>
}


export default TramitarDoc