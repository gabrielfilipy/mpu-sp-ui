import React, { useState } from 'react'
import { Grid } from '@mui/material' 
import Input from '../Input'
import Button from '../Button';
import ModalDoc from './ModalDoc';
import './User.css'

function User () {

    const [openModal,setOpenModal] = useState <boolean>(false);

    return <>
        <Grid item xs={10.7}sm={7.3}>
            <Input label="Responsável pela assinatura"/>
        </Grid>
        <Grid item xs={1} sm={0.7}>
            <div className='but'>
                <Button className='ModalOpen' onClick={()=> setOpenModal(!openModal)}>...</Button>
            </div>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Input label="Nome completo" disabled/>
        </Grid>

        <ModalDoc 
        isOpen={openModal} 
        setOpenModal={setOpenModal}
        
        />
    </>

}

export default User