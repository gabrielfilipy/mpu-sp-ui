import React from "react";
import '../VisualizarDoc.css'
import Button from "../../../compenentes-compartilhados/Button/Button"; 
import { Grid } from "@mui/material";
import { deflate } from "zlib";

function Funcoes() {
    return <div className="AppFucoes"> 
    <Grid container spacing={0.5}>
                <Grid item xs={1.4}>
                <Button value='Finalizar'/> 
                </Grid>
                <Grid item xs={1.4}> 
                <Button value="Assinar"/>
                </Grid>
                <Grid item xs={1.4}>
                <Button value="Editar"/>
                </Grid>
                <Grid item xs={1.4}> 
                <Button value="Excluir"/>
                </Grid>
                <Grid item xs={2}> 
                <Button value="Incluir Cossignatário"/>
                </Grid>
            </Grid>
    </div>

}
export default Funcoes