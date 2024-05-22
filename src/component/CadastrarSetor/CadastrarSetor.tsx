import './CadastrarSetor.scss'
import React, { useEffect, useState } from 'react';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo';
import InputGroup from '../../compenentes-compartilhados/InputGroup/InputGroup';
import { Link } from 'react-router-dom';
import Button from '../../compenentes-compartilhados/Button/Button';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Swal from 'sweetalert2';
import UpdateIcon from '@mui/icons-material/Update';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import { listarSetores, ativarDesativarSetor} from './Servico/Servico';
import { access } from 'fs';
import { Pagination } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import ModalComponent from '../../compenentes-compartilhados/Modal/Modal';


export class DepartmentActive {
    active?: boolean;
}

function CadastrarSetor() {
    const SIZE_LIST = 5
    const [ cadastrados, setCadastros ] = useState([])
    const [ paramBuscar, setParamBuscar ] = useState('')
    const [ tipoBuscar, setTipoBuscar ] = useState(0)

    /**PAGINAÇÃO */
    const [totalPage, setTotalPage] = useState(0);
    const [pageActual, setPageActual] = useState(0);
    const [numberPage, setNumberPage] = useState(0);
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setPageActual(page - 1)
    };

    /**Modal */
    const [modalOpen, setModalOpen] = useState(false);

    async function listar() {
        try{  
            const _cadastros = await listarSetores('', '', pageActual, SIZE_LIST)
            setCadastros(_cadastros.content)
            setNumberPage(_cadastros.number)
            setTotalPage(_cadastros.totalPages)
        } catch(err) {
            if(err instanceof Error)
            Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
        }
    }

    async function buscar() {
        try{  
            const _cadastros = await listarSetores(
                tipoBuscar === 0 ? paramBuscar : '',
                tipoBuscar === 1 ? paramBuscar : '', 
                '', 
                SIZE_LIST)
            setCadastros(_cadastros.content)
            setNumberPage(_cadastros.number)
            setTotalPage(_cadastros.totalPages)
        } catch(err) {
            if(err instanceof Error)
            Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
        }
    }

    async function ativacaoSetor(id:any, active: any) {
        setModalOpen(true);
        const dep = new DepartmentActive()
        dep.active = active 
        setTimeout(() => {
            setModalOpen(false);
            Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
        }, 6000);
        await ativarDesativarSetor(id, dep)
            listar();
    } 

    useEffect(() => {
        listar()
    }, [pageActual])

    return  <Conteudo >
    <div className='HeaderUsuario'>
        <h2>Lista de Setor <ApartmentIcon /></h2>
        <div className='left'>
            <InputGroup 
                onChange={ (e) => setParamBuscar(e.target.value) } 
                onClickButton={ buscar }
                placeholder='buscar setor...' />
        </div>
        <Link className='BtnCriarDocumento AppCriarDocumento right' to="/FormularioSetor"><Button value='Novo Setor' color='create'></Button></Link>
        <div className="clear"></div>
    </div>
    <table className="AppTabelaUsuario">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sigla</th>
                <th>Orgao</th>
                <th>Acoes</th>
            </tr>
        </thead>
            <tbody>
                {
                    cadastrados.map(( listValue:any, index:any ) => {
                            return (
                                <tr key={index}>
                                    <td>{ listValue.nome }</td>
                                    <td>{ listValue.sigla }</td>
                                    <td>{ listValue.orgao }</td> 
                                    <td>
                                        <div style={{ display: 'flex', maxWidth: '40px' }}>
                                            <Link className='BtnEditar' to={`/FormularioSetor/${listValue.id}`}>
                                                <Button icon={<BorderColorRoundedIcon/>}/> 
                                            </Link>
                                            {
                                                listValue.active ? 
                                                    <a onClick={() => ativacaoSetor(listValue.id, !listValue.active)} 
                                                        style={{'cursor': 'pointer', 'marginLeft': '10px'}}><HttpsOutlinedIcon color={'error'}/></a>
                                                :
                                                    <a onClick={() => ativacaoSetor(listValue.id, !listValue.active)} 
                                                        style={{'cursor': 'pointer', 'marginLeft': '10px'}}><LockOpenIcon/></a>
                                            }
                                        </div>
                                    </td> 
                                </tr>
                            );
                        })
                }
            </tbody>
        </table>
        <div className="pagination-container">
            <Pagination 
                count={totalPage} 
                page={numberPage + 1} 
                onChange={handleChange} 
                variant="outlined" 
                shape="rounded" 
                color='primary'/>
        </div>
        <ModalComponent descricao="Aguarde..." open={modalOpen}/>
        </Conteudo>
}

export default CadastrarSetor