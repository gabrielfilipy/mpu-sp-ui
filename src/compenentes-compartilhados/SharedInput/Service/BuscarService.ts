import http from "../../../utils/http"; 

const baseURL = '/v1/user'

export const buscarUser = (nome?: string, departmentId?: string, matricula?: string, page?: any, size?: any) => {
    return http
        .get(`${baseURL}/filtro?page=${page}&size=${size}&nome=${nome}&departmentId=${departmentId}&matricula=${matricula}`)
        .then(response => response.data); 
}