
import http from "../../../utils/http"; 
import { Setor } from "..";

export const cadastrarOrgao = (usu: Setor) => {
    http.post('/orgao/cadastro', usu)
}