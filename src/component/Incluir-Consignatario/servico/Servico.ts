import http from "../../../utils/http"

const baseURL = "v1/user"

export const buscarMatricula = (matricula?: string) => {
    return http
    .get(`${baseURL}/buscar/${matricula}/matricula`)
    .then(response => response.data)
}