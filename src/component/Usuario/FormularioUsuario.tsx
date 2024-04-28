import React, { useEffect, useState } from "react";
import Form from "../../compenentes-compartilhados/Form/Form";
import Input from "../../compenentes-compartilhados/Input/Input";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import { Grid } from "@mui/material";
import Button from "../../compenentes-compartilhados/Button/Button";
import './FormularioUsuario.css'
import { buscarUsuarioPorId, cadastrarUsuario, editarUsuario } from "./Servico/usuario.service";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import DualInputWithButton from "../../compenentes-compartilhados/Input/DualInputWithButtonProps";

export class Usuario {
    id?: string
    nome?: string
    rg?: string 
    cpf?: string
    nascimento?: string
    endereco?: string
    email?: string
    telefone?: string
    departmentId?: string
}

function FormularioUsuario() {

    const usuario = new Usuario()
    const { id } = useParams();
    const [ nome, setNome ] = useState('');
    const [ rg, setRg ] = useState('');
    const [ cpf, setCpf ] = useState(''); 
    const [ nascimento, setNascimento ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [departmentId, setDepartmentId] = useState('')

    function enviarFormulario(e:any) {
        e.preventDefault();

        if(nome === '' && rg === '') {
            alert('É obrigatório preencher todos os campos!')
            return;
        }

        usuario.id = id
        usuario.nome = nome
        usuario.rg = rg
        usuario.cpf = cpf
        usuario.nascimento = nascimento
        usuario.endereco = endereco
        usuario.email = email
        usuario.telefone = telefone
        usuario.departmentId = departmentId

        try {
            if(id == null){
                cadastrarUsuario(usuario)
            }else {
                editarUsuario(usuario, id)
            }
  
            Swal.fire('Usuário', `O Usuário ${ nome } foi cadastrado com sucesso`, 'success')
        } catch(err) {
            if (err instanceof Error) 
              Swal.fire('Oops!', err.message, 'error')
        }
 
    }

    useEffect(() => {
        if(id) {
          const _usuario = buscarUsuarioPorId(id)
          _usuario.then(data => {
              setNome(data.nome)
              setRg(data.rg)
              setCpf(data.cpf)
              setNascimento(data.nascimento)
              setEndereco(data.endereco)
              setEmail(data.email)
              setTelefone(data.telefone)
              setDepartmentId(data.departmentId)
          }).catch(error =>{
              console.error('Erro ao fazer login', error);
              Swal.fire("Oops!", error.message, "error")
          });
        }  
      },[]);

    return <Conteudo >
        
        <Form 
            titulo={!id? "Cadastro de Usuário" : "Edição de Usuário"}
            onSubmit={ enviarFormulario } 
        >   
            <Grid item xs={12}>
                    <Input label="Nome Completo" 
                       onChange={ (e) => setNome(e.target.value) }
                       value={ nome }
                       validation={(value) => value.length > 0}
                       errorMessage="O nome completo é obrigatório!"
                    />
             </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                    <Input 
                        label="CPF" 
                        onChange={ (e) => setCpf(e.target.value) }
                        value={ cpf }
                        validation={(value) => value.length > 0}
                        errorMessage="O cpf é obrigatório!"
                    />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Input 
                        label="RG"
                        onChange={ (e) => setRg(e.target.value) }
                        value={ rg }
                        validation={(value) => value.length > 0}
                        errorMessage="O rg é obrigatório!"
                    />
                </Grid>

                <Grid item xs={6}sm={4}>
                    <Input 
                        label="Telefone" 
                        onChange={ (e) => setTelefone(e.target.value) }
                        value={ telefone }
                        validation={(value) => value.length > 0}
                        errorMessage="O telefone é obrigatório!"
                    />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Input 
                        label="Data Nascimento"
                        onChange={ (e) => setNascimento(e.target.value) }
                        value={ nascimento }
                        validation={(value) => value.length > 0}
                       errorMessage="A data de nascimento é obrigatório!"
                    />
                </Grid>
                <Grid item xs={6}sm={4}>
                    <Input 
                        label="Endereço"
                        onChange={ (e) => setEndereco(e.target.value) }
                        value={ endereco }
                        validation={(value) => value.length > 0}
                        errorMessage="O endereço é obrigatório!"
                    />
                </Grid>
                <Grid item xs={6}sm={4}>
                    <Input 
                        label="Departamento"
                        onChange={ (e) => setDepartmentId(e.target.value) }
                        value={ departmentId }
                        validation={(value) => value.length > 0}
                        errorMessage="O departamento é obrigatório!"
                    />
                </Grid>
                </Grid>
                    <Input 
                        label="E-mail"
                        onChange={ (e) => setEmail(e.target.value) }
                        value={ email }
                        validation={(value) => value.length > 0}
                        errorMessage="O e-mail é obrigatório!"
                    />
                 <br></br>
                <Grid container spacing={1}>
                    <Grid item xs={6}sm={3}>
                        <Button>
                            Cadastrar  
                        </Button> 
                    </Grid>
                    <Grid item xs={6}sm={3}>
                        <Link className='BtnCriarDocumento AppCriarDocumento' to="/listar-usuario"><Button value="Voltar" color="grey" /></Link>
                    </Grid>
                </Grid>

        </Form>
    </Conteudo>

}

export default FormularioUsuario