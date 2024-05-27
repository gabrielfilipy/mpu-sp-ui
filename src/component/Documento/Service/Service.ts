import http from "../../../utils/http-document"; 

const baseModelURL = '/v1/model'
const baseMobilURL = '/v1/mobil'

export const listarModelos = (name?: string) => {
    return http
        .get(`${baseModelURL}/listar`)
        .then(response => response.data); 
}

export const buscarMobilPorSigla = (sigla?: string) => {
    return http
        .get(`${baseMobilURL}/buscar/${sigla}/sigla`)
        .then(response => response.data); 
}