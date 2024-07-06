import http from "../../../utils/http-document"; 
import { Cossignatario } from "../Incluir";

const baseURL = '/v1/movimentacao'

export const incluircossignatario = (cossignatario: Cossignatario, siglaDocumento: String) => {
    http.post(`${baseURL}/incluir-cossignatario/${siglaDocumento}`, cossignatario)
}

export const listarCossignatario = (mobilId?: string, typeMovement?: string, page?: any, size?: any) => {
    return http
        .get(`${baseURL}/filtro?page=${page}&size=${size}&mobilId=${mobilId}&typeMovement=${typeMovement}`)
        .then(response => response.data); 
}