import React, { useEffect, useState } from 'react';
import Conteudo from '../../../compenentes-compartilhados/Conteudo'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InputGroup from '../../../compenentes-compartilhados/InputGroup'
import { Link } from 'react-router-dom';
import './TabelaUsuario.scss'
import Button from '../../../compenentes-compartilhados/Button';
import { buscarUsuarios, listarUsuarios } from '../Servico/usuario.service';
import Swal from 'sweetalert2';

export class UsuarioSearch {
    nome?: any
    id?: string
    cpf?: string
    endereco?: string
}

function TabelaUsuario() {

    const [ usuarios, setUsuarios ] = useState([])
    const [ usuario, setUsuario ] = useState('')

    async function fetchData() {
        try{
            const _usuarios = await listarUsuarios()
            setUsuarios(_usuarios)
        } catch(err) {
            if(err instanceof Error)
            Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
        }
    }

    async function buscar() {
        try{
            const _usus = await buscarUsuarios(usuario)
            setUsuarios(_usus)
    } catch(err) {
        if(err instanceof Error)
        Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
    }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return <Conteudo > 
    <div className='HeaderUsuario'>
        
        <h2>Lista de Usuários <AssignmentIndIcon /></h2>

        <div className='left'>
            <InputGroup onChange={ (e) => setUsuario(e.target.value) } onClick={ buscar }placeholder='pesquisar usuário...'></InputGroup>
        </div>
    
        <Link className='BtnCriarDocumento AppCriarDocumento right' to="/formulario-usuario"><Button value='Novo usuário' color='create'></Button></Link>
        
        <div className="clear"></div>

    </div>
    <table className="AppTabelaUsuario">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Setor</th>
                <th>Contato</th>
            </tr>
        </thead>
            <tbody>
                
            {

                usuarios.map(( listValue:any, index:any ) => {
                    return (
                        <tr key={index}>
                            <td>{ listValue.nome }</td>
                            <td>{ listValue.setor }</td>
                            <td>{ listValue.telefone }</td> 
                        </tr>
                    );
                })

            }

            </tbody>

        </table>
    
    </Conteudo>

}

export default TabelaUsuario