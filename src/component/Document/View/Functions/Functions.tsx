import React from 'react';
import '../View.css';
import Button from "../../../../shared-component/Button/Button"; 
import { Grid } from "@mui/material";
import Assinar from '../../Signature/Signature';
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";

declare interface FuncoesProp {
    codigoDocumento?: string;
}

const Excluir = () => {
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
            );
        }
    });
}

function Funcoes(props: FuncoesProp) {
    const [openAssinar, setOpenAssinar] = React.useState(false);
    const [openIncluir, setOpenIncluir] = React.useState(false);
    const { codigoDocumento } = props;
    const navigate = useNavigate();

    const handleIncluirConsignatario = () => {
        if (codigoDocumento) {
            navigate('/Incluir-Consignatario', { state: { siglaDocumento: codigoDocumento } });
        } else {
            Swal.fire('Erro', 'Código do documento não encontrado', 'error');
        }
    };

    const handleTramitarDocumento = () => {
        if (codigoDocumento) {
            navigate('/Tramitar-documento', { state: { siglaDocumento: codigoDocumento } });
        } else {
            Swal.fire('Erro', 'Código do documento não encontrado', 'error');
        }
    };

    const handleEditarDocumento = () => {
        if (codigoDocumento) {
            navigate('/editar-documento', { state: { siglaDocumento: codigoDocumento } });
        } else {
            Swal.fire('Erro', 'Código do documento não encontrado', 'error');
        }
    };

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

    return (
        <div className="AppFucoes">
            <Grid container spacing={0.7}>
                <Grid item xs={4} sm={2.4}>
                    <Button>Finalizar</Button>
                </Grid>
                <Grid item xs={4} sm={2.4}>
                    <Button onClick={handleAssinarClick}>Assinar</Button>
                </Grid>
                <Grid item xs={4} sm={2.4}>
                    <Button onClick={handleEditarDocumento}>Editar</Button>
                </Grid>
                <Grid item xs={4} sm={2.4}>
                    <Button onClick={Excluir}>Excluir</Button>
                </Grid>
                <Grid item xs={4} sm={2.4}>
                    <Button onClick={handleIncluirConsignatario}>Incluir Cossignatário</Button>
                </Grid>
                <Grid item xs={4} sm={2.4}>
                    <Link to="/visualizar-documento-completo">
                        <Button>Visualizar</Button>
                    </Link>
                </Grid>
                <Grid item xs={4} sm={2.4}>
                 
                    <Button onClick={handleTramitarDocumento}>Tramitar Documento</Button> {/* Alterado para usar handleTramitarDocumento */}
                  
                </Grid>
            </Grid>
            <Assinar
                open={openAssinar}
                selectedValue=""
                onClose={handleClose}
                tituloHeader="Assinatura do Documento"
                titulo="Escolha o método de assinatura"
                radius={true}
                codigoDocumento={props.codigoDocumento}
            />
        </div>
    );
}

export default Funcoes;