import React, {  useEffect, useState } from 'react';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo'
import InputGroup from '../../compenentes-compartilhados/InputGroup/InputGroup'
import './Mesa.css'
import TableMesa from './Table/TableMesa';
import Button from '../../compenentes-compartilhados/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { buscarDocumento } from './Servico/documento.servico';
import Modal from './Modal/Modal';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie'; 

function Mesa() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    useEffect(() => {
        const token = cookies.get('Token');
        if (!token) {
            navigate('/nao-autorizado');
        }
    }, [navigate]);
    
    const [siglaDocumento, setSiglaDocumento] = useState("")
    const [showAccordion1, setAccordion1] = useState(true)
    const [showAccordion2, setAccordion2] = useState(false)
    const [showAccordion3, setAccordion3] = useState(false)
    const [showAccordion4, setAccordion4] = useState(false)

    function handleClick (ids:any) {
        if(ids === 1) {
            setAccordion1(true)
            setAccordion2(false)
            setAccordion3(false)
            setAccordion4(false)
        } else if(ids === 2) { 
            setAccordion1(false)
            setAccordion2(true)
            setAccordion3(false)
            setAccordion4(false)
        } else if(ids === 3) { 
            setAccordion1(false)
            setAccordion2(false)
            setAccordion3(true)
            setAccordion4(false)
        } else if(ids === 4) { 
            setAccordion1(false)
            setAccordion2(false)
            setAccordion3(false)
            setAccordion4(true)
        }
    }

    async function buscarDocumentoPelaSigla(sigla: any): Promise<boolean> {
        if(!sigla){
            return false;
        }
        try {
            const _documento = await buscarDocumento(sigla);
            setSiglaDocumento(_documento.sigla);
            setOpen(true);
            return true; // Indica sucesso
        } catch (err: any) {
            if (err instanceof Error) {
                await Swal.fire('Atenção!', err.message, 'error');
            }
            return false; // Indica falha
        }
    }

    //Modal
    const [open, setOpen] = React.useState(false);
    const handleClose = (value: string) => {
        setOpen(false);
    };

    async function redirecionaVisualizarDocumento() {
        const sucesso = await buscarDocumentoPelaSigla(siglaDocumento);
        if (sucesso) {
            navigate(`/visualizar-documento/${siglaDocumento}`);
        }
    }

    return <Conteudo >
            <div className='HeaderMesa'>
                <h2>Mesa virtual <FolderCopyIcon /> </h2>
                <div className='left'>
                    <InputGroup onChange={ (e) => setSiglaDocumento(e.target.value) } onClickButton={ () => redirecionaVisualizarDocumento()} placeholder='Buscar Documento'></InputGroup>
                </div>
                <Link className='BtnCriarDocumento AppCriarDocumento right' to="/documento"><Button value='Criar Documento' color='create'></Button></Link>
                <div className="clear"></div>
            </div>
            <div className="accordion-heading" onClick={() => handleClick(1) } >Documentos criados</div>
            {showAccordion1 && (
                <div className="accordion-content" >
                    <TableMesa></TableMesa>
                </div>
            )}
            <div className="accordion-heading" onClick={() =>  handleClick(2) } >Documentos recebidos</div>
            {showAccordion2 && (
                <div className="accordion-content" >
                    <TableMesa></TableMesa>
                </div>
            )}
            <div className="accordion-heading" onClick={() => handleClick(3)} >Documentos tramitados</div>
            {showAccordion3 && (
                <div className="accordion-content" >
                    <TableMesa></TableMesa>
                </div>
            )}
            <div className="accordion-heading" onClick={() => handleClick(4)} >Documentos assinados</div>
            {showAccordion4 && (
                <div className="accordion-content" >
                    <TableMesa></TableMesa>
                </div>
            )}
        <Modal
            selectedValue={'selectedValue'}
            open={open}
            onClose={handleClose}
            titulo='Desaja visualizar esse documento?'
            tituloHeader='Visualizar documento'
            siglaDocumento={siglaDocumento}
        />
        </Conteudo>
}

export default Mesa