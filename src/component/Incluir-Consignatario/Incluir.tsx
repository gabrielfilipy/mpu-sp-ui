import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import Button from '../../compenentes-compartilhados/Button/Button';
import './Incluir.css';
import { buscarMatricula } from './servico/Servico';

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
    tituloHeader?: string;
    titulo?: string;
    radius?: boolean;
}

function Incluir(props: SimpleDialogProps) {
    const { onClose, selectedValue, open, titulo, radius } = props;
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [erro, setErro] = useState<string | null>(null);

    const handleClose = () => {
        onClose(selectedValue);
    };

    const closeClick = () => {
      onClose(selectedValue)
    }

    const matriculaChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatricula(event.target.value);
    };

    const nomeChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    };

    const handleClickInsideModal = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target instanceof HTMLInputElement ) {
            return ;
        } else 
        if (event.target instanceof HTMLButtonElement){
          return ;
        }
        // Limpar o estado de erro
        setErro(null);
        try {
            const resultado = await buscarMatricula(matricula);
            setNome(resultado.nome);
            console.log(matricula, resultado.nome)
        } catch (error) {
            setErro("Matrícula não encontrada.");
            setNome('')
        }
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className='AppModal' onClick={handleClickInsideModal}>
                <h2>{titulo}</h2>
                {radius && (
                    <div className="input-group">
                        <input
                            type='text'
                            placeholder='Matrícula'
                            className="input-field"
                            value={matricula}
                            onChange={matriculaChanger}
                        />
                        <span className="plus-sign"></span>
                        <input
                            type='text'
                            className="input-field"
                            value={nome}
                            onChange={nomeChanger}
                        />
                    </div>
                )}
                {erro && <p>{erro}</p>}
                <Button onClick={closeClick}>Incluir</Button>
            </div>
        </Dialog>
    );
}

export default Incluir;
