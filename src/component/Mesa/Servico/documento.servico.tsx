
import http from "../../../utils/http"; 
import { DocumentoModel } from "../../Documento"; 

export const listarDocumentos = () => {
    return http
        .get('/documento/listar')
        .then(response => response.data); 
}

export const buscarDocumento = (sigla:string) => {
    return http
        .get(`/documento/${sigla}/buscar`)
        .then(response => response.data); 
}   

export const cadastrarDocumento = (documento: DocumentoModel) => {
    http.post('/documento/cadastro', documento)
}
