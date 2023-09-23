import React from 'react'
import Form from '../../compenentes-compartilhados/Form/Form'
import Input from '../../compenentes-compartilhados/Input/Input';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo';
import Button from '../../compenentes-compartilhados/Button/Button';
import './Login.css'
import { Grid } from "@mui/material";

function Login() {
    return <Conteudo>
        
        <div className='FormLogin'>
       <Form titulo={"Login"}>
            <Input label='Login:'/>
            <Input label='Senha:'/>
            <div className='Logar'>
                <Button value='Logar'></Button>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                <div className='Criar'>
                    <span>Criar conta</span>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div className='Botao'>
                    <Button value='Cadastre-se'></Button>
                </div>
            </Grid>
            </Grid>
        </Form>   
        </div>
        
    </Conteudo>
}

export default Login