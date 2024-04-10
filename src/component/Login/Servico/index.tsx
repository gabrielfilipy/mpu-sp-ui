import http from "../../../utils/http"; 
import { LoginModel } from "..";

export const logar = (loging: LoginModel ) => {
    return http.post('/v1/auth/login', loging)
            .then(response => response.data);
}
