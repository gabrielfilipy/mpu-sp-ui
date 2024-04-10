import React from 'react'
import { Dialog } from '@mui/material'
import Button from '@compartilhados/Button/Button';
import './Incluir.css'

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
    tituloHeader?: string,
    titulo?: string
    radius?: boolean
}
  
function Incluir(props: SimpleDialogProps) {
    const { onClose, selectedValue, open, titulo, radius } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <Dialog onClose={handleClose} open={open} >
        <div className='AppModal'>
                
        <h2>{ titulo }</h2>
  
        { radius && 
            <div className="input-group">
                <input type='text'placeholder='Matrícula' className="input-field" />
                <span className="plus-sign"></span>
                <input type='text' className="input-field" />
            </div>
        }
  
        <Button>Incluir</Button>
        </div>
      </Dialog>
    );
}

export default Incluir
