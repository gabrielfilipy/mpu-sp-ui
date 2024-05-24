import http from "../../../utils/http-document"; 

const baseURL = '/v1/mobil';

export const buscarMovimentosPorTipo = (pessoaRecebedoraId?: string, typeMovement?: string, page?: any, size?: any) => {
    return http
        .get(`${baseURL}/filtro?page=${page}&size=${size}&typeMovement=${typeMovement}&pessoaRecebedoraId=${pessoaRecebedoraId}`)
        .then(response => response.data);
}
