import React from "react";
import { Grid } from "@mui/material";
import Box from "@compartilhados/Box";
import './VisualizarDocCompleto.css'
import Conteudo from "@compartilhados/Conteudo";

function VisualizarDocCompleto () {

    var listaDeDocumentos = ['doc1.pdf', 'doc2.pdf', 'doc3.pdf']

    return <Conteudo> 
        <Grid container spacing={2.0}>

            <Grid item xs={5}sm={3}>
                <Box titulo="Titulo" array={listaDeDocumentos}/>
            </Grid>

            <Grid item xs={9}>
                
            <embed className="PDFView" src="http://www.africau.edu/images/default/sample.pdf" />

            </Grid>
        </Grid>

        </Conteudo> 
}
export default VisualizarDocCompleto