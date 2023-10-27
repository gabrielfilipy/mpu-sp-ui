import React, {  useState } from 'react';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo'
import InputGroup from '../../compenentes-compartilhados/InputGroup/InputGroup'
import './Mesa.css'
import TableMesa from './Table/TableMesa';
import Button from '../../compenentes-compartilhados/Button/Button';
import { Link } from 'react-router-dom';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { buscarDocumento } from './Servico/documento.servico';
import Modal from './Modal/Modal';
import Swal from 'sweetalert2';
function Mesa() {

    const [documento, setDocumento] = useState("")

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

    //Buscar documento
    async function buscarDocumentoPelaSigla(sigla:string) {
        try {
            const _documento = await buscarDocumento(sigla)
            setDocumento(_documento.sigla)
            setOpen(true);
        } catch(err) {
            if (err instanceof Error) 
              Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
        }
    }

    //Modal
    const [open, setOpen] = React.useState(false);

    const handleClose = (value: string) => {
        setOpen(false);
    };

    return <Conteudo >
        
            <div className='HeaderMesa'>
                <h2>Mesa virtual <FolderCopyIcon /></h2>

                <div className='left'>
                    <InputGroup onChange={ (e) => setDocumento(e.target.value) } onClick={ () => buscarDocumentoPelaSigla(documento)}placeholder='Buscar Documento.....'></InputGroup>
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
            siglaDocumento={documento}
        />

        </Conteudo>
        
    
}

export default Mesa