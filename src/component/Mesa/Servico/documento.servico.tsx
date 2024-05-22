
import http from "../../../utils/http-document"; 
import { DocumentoModel } from "../../Documento/Documento"; 

const baseURL = '/v1/mobil'

export const listarDocumentos = () => {
    return http
        .get('/documento/listar')
        .then(response => response.data); 
}

export const buscarDocumento = async (sigla: string) => {
    try {
        const response = await http.get(`${baseURL}/buscar/${sigla}/sigla`);
        return response.data;
    } catch (error: any) { 
        if (error.response && error.response.status === 404) {
            const errorDetail = error.response.data.detail || 'O documento informado não existe.';
            throw new Error(errorDetail);
        } else {
            throw error; // Outro tipo de erro, lançamos novamente
        }
    }
};

export const cadastrarDocumento = (documento: DocumentoModel) => {
    http.post('/documento/cadastro', documento)
}
