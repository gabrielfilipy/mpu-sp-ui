import React, { useEffect, useState } from "react";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Checkbox from '@mui/material/Checkbox';
import "./TelaDePermissoes.scss";  
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import { listarRoles } from "./servico/servico";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Button from "../../compenentes-compartilhados/Button/Button";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DualInput from "../../compenentes-compartilhados/Input/DualInputWithButtonProps"; // import the DualInput component here

function PermissoesUsuario() {

    const [ regras, setCadastros ] = useState([])

    async function listar() {
        try{  
            const _cadastros = await listarRoles()
            setCadastros(_cadastros);
        } catch(err) {
            if(err instanceof Error)
            Swal.fire('Oops!', 'Erro ao se conectar com o servidor!', 'error')
        }
    }

    useEffect(() => {
        listar()
    }, []);

    return <Conteudo>
        
        <>
            <h1>Permissões do sistema <VerifiedUserIcon fontSize="large" /></h1>
                        <DualInput
                             label1="Nome"
                             name1="nome"
                             placeholder1="Digite o nome"
                             label2="Descrição"
                             name2="descricao"
                             placeholder2="Digite a descrição"
                             buttonText="..."
                             onButtonClick={() => {
                            }}
                        />
            <table className="Tabelastyle">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Permitir</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        regras.map(( listValue:any, index:any ) => {
                            return (
                                <tr key={index}>
                                    <td>{ listValue.orgao }</td> 
                                    <td>
                                        <div style={{ display: 'flex', maxWidth: '40px' }}>
                                            <Link className='BtnEditar' to={`/FormularioSetor/${listValue.id}`}>
                                                <Button icon={<BorderColorRoundedIcon/>}/> 
                                            </Link>
                                        </div>
                                    </td> 
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    </Conteudo>
}

export default PermissoesUsuario;