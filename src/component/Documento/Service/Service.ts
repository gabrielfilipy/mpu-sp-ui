import http from "../../../utils/http-document"; 

const baseURL = '/v1/model'

export const listarModelos = (name?: string) => {
    return http
        .get(`${baseURL}/listar`)
        .then(response => response.data); 
}
