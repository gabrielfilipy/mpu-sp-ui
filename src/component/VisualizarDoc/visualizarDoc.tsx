import React, { useEffect, useState } from "react";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import { Grid } from "@mui/material";
import './VisualizarDoc.css'
import LogoDoc from "./Files/logo-prefeitura.png"
import Funcoes from "./Funcoes/Funcoes";
import Box from "../../compenentes-compartilhados/Box/Box";
import { useParams } from "react-router";
import parse from 'html-react-parser';
import { buscarMobilPorSigla } from '../Documento/Service/Service';

function VisualizarDoc () {

    //Recebendo código do documento por parâmetro.
    const { codigo } = useParams();
    const [html, setHtml] = useState("");

    var codigoDocumento = codigo
    var lista = ['Steve Jobs', 'Donal Trump'] 
    var descricao = "Memorando detrasssssssssss"
    var interessado = 'Interessado fssnfsfnsf'
    var assunto = 'Assunto csfcsvvvdvdvkndvkdnvdnvvndvnkn'
    var userName = 'Marcus'

    useEffect(() => {
        localStorage.clear();
      }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mobil = await buscarMobilPorSigla(codigoDocumento);
                if (mobil) {
                    setHtml(mobil.documento.file);
                }
            } catch (error) {
                console.error('Erro ao buscar documento:', error);
            }
        };

        fetchData();
    }, [codigoDocumento]);

    return <Conteudo>

    <h2>{ codigoDocumento }</h2>

    <Funcoes codigoDocumento={ codigoDocumento }/>

        <Grid container spacing={2.0}>
       
            <Grid item xs={7}sm={9}>
                <div className="VisuDoc" >
                { parse(html) }
                </div>
                
            </Grid>

            <Grid item xs={5}sm={3}>
                <Box array={ lista } titulo="Cossignatários"/>
            </Grid>
               
        </Grid>        
</Conteudo>

}
export default VisualizarDoc
