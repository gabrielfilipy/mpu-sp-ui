import './CadastrarSetor.scss'
import React, { useEffect, useState } from 'react';
import Conteudo from '@compartilhados/Conteudo';
import InputGroup from '@compartilhados/InputGroup';
import { Link } from 'react-router-dom';
import Button from '@compartilhados/Button';
import { listarSetores, buscarSetores} from './Servico/Servico';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Swal from 'sweetalert2';

export class SetorSearch {
    id?: string
    nome?: string
    rg?: string 
    cpf?: string
    setor?: string
    nascimento?: string
    endereco?: string
    email?: string
    telefone?: string
}


function CadastrarSetor() {

    const [ cadastrados, setCadastros ] = useState([])
    const [ cadastro, setCadastro ] = useState('')
    
    async function fetchData() {
        try{  
            const _cadastros = await listarSetores()
            setCadastros(_cadastros)
        } catch(err) {
            if(err instanceof Error)
            Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
    }
    }

    async function buscar() {
        try{
            const _dacstr = await buscarSetores (cadastro)
            setCadastros(_dacstr)
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

        <h2>Lista de Setor <ApartmentIcon /></h2>


        <div className='left'>
            <InputGroup onChange={ (e) => setCadastro(e.target.value) } onClick={ buscar }placeholder='buscar setor...'></InputGroup>
        </div>

        <Link className='BtnCriarDocumento AppCriarDocumento right' to="/FormularioSetor"><Button value='Novo Setor' color='create'></Button></Link>

        <div className="clear"></div>

    </div>
    <table className="AppTabelaUsuario">
        <thead>
            <tr>
                <th>Sigla</th>
                <th>Nome</th>
                <th>Situação</th>
            </tr>
        </thead>
            <tbody>

            {

            cadastrados.map(( listValue:any, index:any ) => {
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

export default CadastrarSetor