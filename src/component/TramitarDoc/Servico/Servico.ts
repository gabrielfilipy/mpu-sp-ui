import http from "../../../utils/http"; 

const baseURL = '/v1/user'
export const listarUsuario = () => {
    return http
        .get(`${baseURL}/listar`)
        .then(response => response.data); 
}

export const buscarSetores = (nome?:string) => {
    console.log(nome)
    return http
        .get(`//buscar?setor=${nome}`)
        .then(response => response.data); 
} 

export const buscarIdentificador = (id:string) => {
    return http
        .get(`/Cadastro-Setor/buscar?id=${id}`)
        .then(response => response.data); 
}   