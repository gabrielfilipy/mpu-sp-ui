import React from 'react';
import './ModalDoc.scss'
import Button from '../../Button';
import { Input } from '@mui/material';

export class UsuarioSearch {
    nome?: any
    id?: string
    cpf?: string
    endereco?: string
}

interface Imodal{
    isOpen: boolean;
    setOpenModal:( isOpen:boolean)=> void
}



 export default function ModalDoc ({isOpen, setOpenModal}: Imodal) {


    if (isOpen){

    return(
    <div className='background'>
        <div className='modal'>
            <div className='Header'>
                <h1>Pesquisar usuário:</h1>
                <Input></Input>
            <div className="Corpo">
                <table className="TabelaModal">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Setor</th>
                    </tr>
                </thead>
            </table>
            
            <Button onClick={()=> setOpenModal (!isOpen)}>Selecionar</Button>
            </div>
                

            </div>
        </div>
     </div>
     )
    }else{
        return <></>
}
  
}