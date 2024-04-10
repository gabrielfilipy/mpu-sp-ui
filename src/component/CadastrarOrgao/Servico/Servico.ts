import http from "../../../utils/http"; 
import { OrgaoSearch} from "..";

export const listarOrgaos = () => {
    return http
        .get('/cadastro-orgao/listar')
        .then(response => response.data); 
}

export const buscarOrgaos = (nome?:string) => {
    console.log(nome)
    return http
        .get(`//buscar?Orgao=${nome}`)
        .then(response => response.data); 
} 

export const buscarIdentificador = (id:string) => {
    return http
        .get(`/cadastro-orgao/buscar?id=${id}`)
        .then(response => response.data); 
}   

export const cadastrarOrgao = (Orgao: OrgaoSearch) => {
    http.post('/cadastro-orgao/cadastro', Orgao)
}