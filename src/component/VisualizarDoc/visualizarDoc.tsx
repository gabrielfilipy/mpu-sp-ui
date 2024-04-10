import React from "react";
import Conteudo from "@compartilhados/Conteudo/Conteudo";
import { Grid } from "@mui/material";
import './VisualizarDoc.css'
import LogoDoc from "./Files/logo-prefeitura.png"
import Funcoes from "./Funcoes/Funcoes";
import Box from "@compartilhados/Box/Box";
import { useParams } from "react-router";

function VisualizarDoc () {

    //Recebendo código do documento por parâmetro.
    const { codigo } = useParams();

    var codigoDocumento = codigo
    var lista = ['Steve Jobs', 'Donal Trump'] 
    var descricao = "Memorando detrasssssssssss"
    var interessado = 'Interessado fssnfsfnsf'
    var assunto = 'Assunto csfcsvvvdvdvkndvkdnvdnvvndvnkn'
    var userName = 'Marcus'
    return <Conteudo>

    <h2>{ codigoDocumento }</h2>

    <Funcoes codigoDocumento={ codigoDocumento }/>

        <Grid container spacing={2.0}>
       
            <Grid item xs={7}sm={9}>
                <div className="VisuDoc" >

                    <div className="HeaderDocumento">
                        <img className="LogoDoc" src={LogoDoc} alt="Logo do VisuDoc" />
                        <div className="Texto">
                            <b>Detran</b>
                        </div>
                    </div>
                    
                    <div className="body">
                        <p><b>Número de Referência: </b>{ descricao }</p>
                        <p><b>Interessado: </b>{ interessado }</p>
                        <p><b>Assunto: </b>{ assunto }</p>
                    </div>

                    <div className="footer">
                        { userName }
                        <p>Unidade</p>
                    </div>
                </div>
                
            </Grid>

            <Grid item xs={5}sm={3}>
                <Box array={ lista } titulo="Cossignatários"/>
            </Grid>
               
        </Grid>
              
               
        
</Conteudo>

}
export default VisualizarDoc
