import http from "../../../utils/http-document"; 
import { Cossignatario } from "../Incluir";

const baseURL = '/v1/movimentacao'

export const incluircossignatario = (cossignatario: Cossignatario, siglaDocumento: String) => {
    http.post(`${baseURL}/incluir-cossignatario/${siglaDocumento}`, cossignatario)
}