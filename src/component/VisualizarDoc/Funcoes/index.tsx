import React from 'react';
import '../VisualizarDoc.css'
import Button from "../../../compenentes-compartilhados/Button"; 
import { Grid } from "@mui/material";
import Assinar from '../../Assinar';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import Incluir from '../../Incluir-Consignatario';

declare interface FuncoesProp {
    codigoDocumento?: string
}

const Excluir=()=>{

    Swal.fire({
        title: 'Você tem certeza?',
        text: "Você não vai poder reverte essa ação!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, Excluir!',
        cancelButtonText: 'Cancelar!'
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deletado!',
                'Seu documento foi deletado!.',
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
        <Grid container spacing={0.7}>
            <Grid item xs={4}sm={2.4}>
                <Button>Finalizar</Button> 
            </Grid>
            <Grid item xs={4}sm={2.4}> 
                <Button onClick={handleAssinarClick}>Assinar</Button>
            </Grid>
            <Grid item xs={4}sm={2.4}>
            <Link className='BtnCriarDocumento AppCriarDocumento' to="/editar-documento">
  <Button>Editar</Button></Link>
            </Grid>
                <Grid item xs={4}sm={2.4}> 
                <Button onClick={Excluir}>Excluir</Button>
            </Grid>
            
            <Grid item xs={4}sm={2.4}> 
                <Button onClick={handleIncluirClick}>Incluir Cossignatário</Button>
            </Grid>
            <Grid item xs={4}sm={2.4}> 
                <Link to="/visualizar-documento-completo">
                    <Button>Visualizar</Button>
                </Link>
            </Grid>
              <Grid item xs={4}sm={2.4}> 
                <Link to="/Tramitar-documento">
                    <Button>Tramitar Documento</Button>
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