import axios from "axios";
import Cookies from "universal-cookie";

const httpDocument = axios.create({
    baseURL: 'http://localhost:8082/'
});

httpDocument.interceptors.request.use(async config => {
    const cookies = new Cookies();
    const token = cookies.get('Token');
    if (token) {
        httpDocument.defaults.headers.authorization = `Bearer ${token}`;
    }
    return config;
});
 
export default httpDocument;