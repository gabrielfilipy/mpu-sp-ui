import React from "react";
import Form from "../../compenentes-compartilhados/Form/Form";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import Button from "../../compenentes-compartilhados/Button/Button";
import { Grid } from "@mui/material";
import './VisualizarDoc.css'
import Header from "../Header/Header";
import LogoDoc from "./LogoDoc/Logo.png"
import Input from "../../compenentes-compartilhados/Input/Input";
import Funcoes from "./Funcoes/Funcoes";
import Box from "../../compenentes-compartilhados/Box/Box";



function VisualizarDoc () {
    var lista = ['Gabriel', 'Mateus'] 
    var descricao = "Memorando detran"
    var userName = 'Marcus'
    return <Conteudo>
 <Funcoes></Funcoes>

           <Grid container spacing={2.0}>
       
         
         <Grid item xs={9}>
               <div className="VisuDoc" >

                <div className="HeaderDocumento">
                   <img className="LogoDoc" src={LogoDoc} alt="Logo do VisuDoc" />
                               <div className="Texto">
                                <b>Detran</b>
                               </div>
                </div>
                
                <div className="descricaoDocumento">
                    <p><b>Número de Referência:</b>{ descricao }</p>
                    <p><b>Interessado:</b>{ descricao }</p>
                    <p><b>Assunto:</b>{ descricao }</p>
                </div>
                <div className="footer">
                { userName }
                <p>Unidade</p>
               </div>
               </div>
               
               </Grid>
               <Grid item xs={3}>
                <Box array={ lista } titulo="Cossignatários"/>
                </Grid>
               
               </Grid>
              
               
        
</Conteudo>

}
export default VisualizarDoc
