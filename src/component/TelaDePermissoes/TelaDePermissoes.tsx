import React from "react";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Checkbox from '@mui/material/Checkbox';
import "./TelaDePermissoes.scss";  
import Conteudo from "@compartilhados/Conteudo/Conteudo";

function permissoesUsuario() {
    return <Conteudo>
        <>
            <h1>Permissões do sistema <VerifiedUserIcon fontSize="large" /></h1>
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
