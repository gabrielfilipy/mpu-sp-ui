import React from "react";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Checkbox from '@mui/material/Checkbox';
import "./TelaDePermissoes.scss";  
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import DualInput from "../../compenentes-compartilhados/DualInputWithButtonProps/DualInput";

function permissoesUsuario() {
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
                    <tr>
                        <td>CAD_USUARIO</td>
                        <td>cadastro de usuário</td>
                        <td>
                        <Checkbox  defaultChecked />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    </Conteudo>
}

export default permissoesUsuario;
