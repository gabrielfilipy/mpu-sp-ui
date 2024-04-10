import './CadastrarOrgao.scss'
import React, { useEffect, useState } from 'react';
import Conteudo from '@compartilhados/Conteudo/Conteudo';
import InputGroup from '@compartilhados/InputGroup/InputGroup';
import { Link } from 'react-router-dom';
import Button from '@compartilhados/Button/Button';
import { listarOrgaos, buscarOrgaos } from './Servico/Servico'; 
import Swal from 'sweetalert2';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export class OrgaoSearch {
    id?: string
    nome?: string
    email?: string
}


function CadastrarOrgao() {

    const [ cadastrados, setCadastros ] = useState([])
    const [ cadastro, setCadastro ] = useState('')
    
    
    async function fetchData() {
        try{  
        const _cadastros = await listarOrgaos()
        setCadastros(_cadastros)
    } catch(err) {
        if (err instanceof Error) 
        Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
}
    }

    async function buscar() {
        try{
        const _dacstr = await buscarOrgaos (cadastro)
        setCadastros(_dacstr)
    } catch(err){
        if (err instanceof Error) 
        Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
}
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return <Conteudo >
    <div className='HeaderUsuario'>

        <h2>Lista de Órgãos <AccountBalanceIcon /></h2>

        <div className='left'>
            <InputGroup onChange={ (e) => setCadastro(e.target.value) } onClick={ buscar } placeholder='pesquisar órgãos...'></InputGroup>
        </div>

        <Link className='BtnCriarDocumento AppCriarDocumento right' to="/FormularioOrgao"><Button value='Novo Órgão' color='create'></Button></Link>

        <div className="clear"></div>

    </div>
    <table className="AppTabelaUsuario">
        <thead>
            <tr>
                <th>Nome</th>
            </tr>
        </thead>
            <tbody>

            {

            cadastrados.map(( listValue:any, index:any ) => {
                    return (
                        <tr key={index}>
                            <td>{ listValue.nome }</td>
                        </tr>
                    );
                })

            }

            </tbody>

        </table>

    </Conteudo>






}

export default CadastrarOrgao