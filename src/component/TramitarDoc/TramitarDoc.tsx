import React from "react";
import Input from "../../compenentes-compartilhados/Input/Input";
import Button from "../../compenentes-compartilhados/Button/Button";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import './TramitarDoc.css'
import { Grid } from "@mui/material";
import MensagemDeAlerta from "./MensagemDeAlerta/MensagemDeAlerta";





function TramitarDoc() {


    return <Conteudo>

        <div className="caixadotramitardoc">
            <div className="inputdotramitardoc">
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <Input label="Cod.Documento" disabled />
                    </Grid>
                    <Grid item xs={4}>
                        <Input label="Tramitar para:" disabled />
                    </Grid>
                    <Grid item xs={3.5}>
                        <Input disabled />
                    </Grid>
                </Grid>
            </div>

            <div className="mensagemdotramitar">
                <p><h2>Escolha para quem vai ser tramitado esse documento</h2></p>
            </div>

            <div className="botaodotramitardoc">
                <Grid container spacing={0.5}>
                    <Grid item xs={5}>
                        <Button value="Cancelar" color="danger" />
                    </Grid>
                    <Grid item xs={5}>
                        <Button value="Tramitar" onClick={MensagemDeAlerta}
                        />
                    </Grid>
                </Grid>
            </div>

        </div>

    </Conteudo>
}


export default TramitarDoc