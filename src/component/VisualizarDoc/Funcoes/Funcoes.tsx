import React, { useState } from 'react';
import '../VisualizarDoc.css'
import Button from "../../../compenentes-compartilhados/Button/Button"; 
import { Grid } from "@mui/material";
import Assinar from '../../Assinar/Assinar';
import AssinarComCertificadoDigital from '../../AssinarComCertificadoDigital/AssinarComCertificadoDigital';
import { deflate } from "zlib";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import Incluir from '../../Incluir-Consignatario/Incluir';

declare interface FuncoesProp {
    codigoDocumento?: string
}

const Excluir=()=>{

    Swal.fire({
        title: 'Você tem certeza?',
        text: "Você não poderá reverter isso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim,  delete isso!',
        cancelButtonText: 'cancelar'

        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Excluído!',
                'Seu arquivo foi excluído.',
                'success'
              )
            }
          })
    }



function Funcoes(props: FuncoesProp) {

    const [openAssinar, setOpenAssinar] = React.useState(false);
    const [openIncluir, setOpenIncluir] = React.useState(false);

    const handleClose = (value: string) => {
        setOpenAssinar(false);
        setOpenIncluir(false);
    };

    const handleAssinarClick = () => {
        setOpenAssinar(true);
    };
    const handleIncluirClick = () => {
        setOpenIncluir(true);
    };

    return <div className="AppFucoes"> 
        <Grid container spacing={0.5}>
            <Grid item xs={1.4}>
                <Button>Finalizar</Button> 
            </Grid>
            <Grid item xs={1.4}> 
                <Button onClick={handleAssinarClick}>Assinar</Button>
            </Grid>
            <Grid item xs={1.4}>
                <Button>Editar</Button>
            </Grid>
                <Grid item xs={1.4}> 
                <Button onClick={Excluir}>Excluir</Button>
            </Grid>
            
            <Grid item xs={2}> 
                <Button onClick={handleIncluirClick}>Incluir Cossignatário</Button>
            </Grid>
            <Grid item xs={2}> 
                <Link to="/visualizar-documento-completo">
                    <Button>Visualizar Documento Completo</Button>
                </Link>
            </Grid>
         
        </Grid>

            <Assinar
                selectedValue={'selectedValue'}
                open={openAssinar}
                onClose={handleClose}
                titulo='Qual forma de assinatura?'
                tituloHeader='Assinar documento'
                radius={true}
                codigoDocumento={ props.codigoDocumento }
            />

            <Incluir
                selectedValue={'selectedValue'}
                open={openIncluir}
                onClose={handleClose}
                titulo='Incluir Consignatário'
                radius={true}
            />
    </div>

}

export default Funcoes