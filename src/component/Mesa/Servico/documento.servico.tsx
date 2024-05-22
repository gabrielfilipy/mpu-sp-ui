
import http from "../../../utils/http-document"; 
import { DocumentoModel } from "../../Documento/Documento"; 

const baseURL = '/v1/mobil'

export const listarDocumentos = () => {
    return http
        .get('/documento/listar')
        .then(response => response.data); 
}

export const buscarDocumento = (sigla:string) => {
    return http
        .get(`${baseURL}/buscar/${sigla}/sigla`)
        .then(response => response.data); 
}   

export const cadastrarDocumento = (documento: DocumentoModel) => {
    http.post('/documento/cadastro', documento)
}
