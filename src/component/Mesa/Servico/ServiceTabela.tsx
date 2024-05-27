import http from "../../../utils/http-document"; 

const baseURL = '/v1/mobil';

export const buscarMovimentosPorTipo = (subscritorId?: string, pessoaRecebedoraId?: number, typeMovement?: string, page?: any, size?: any) => {
    // Construir a parte da query da URL com os parâmetros fornecidos
    let queryParams = '';
    if (page !== undefined && size !== undefined) {
        queryParams += `page=${page}&size=${size}`;
    }
    if (typeMovement !== undefined) {
        queryParams += `${queryParams.length > 0 ? '&' : ''}typeMovement=${typeMovement}`;
    }
    if (pessoaRecebedoraId !== undefined) {
        queryParams += `${queryParams.length > 0 ? '&' : ''}pessoaRecebedoraId=${pessoaRecebedoraId}`;
    }
    if (subscritorId !== undefined) {
        queryParams += `${queryParams.length > 0 ? '&' : ''}subscritorId=${subscritorId}`;
    }

    // Concatenar a parte da query da URL à baseURL
    const url = `${baseURL}/filtro${queryParams.length > 0 ? '?' + queryParams : ''}`;

    // Fazer a requisição HTTP
    return http.get(url)
        .then(response => response.data);
}

