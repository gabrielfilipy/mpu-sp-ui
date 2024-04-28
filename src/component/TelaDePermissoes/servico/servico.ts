import http from "../../../utils/http"; 

const baseURL = '/v1/roles'

export const listarRoles = () => {
    console.log("test");
    return http
        .get(`${baseURL}/listar-roles`)
        .then(response => response.data)
}

