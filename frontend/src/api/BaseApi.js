import axios from 'axios';


const auth_token = localStorage.getItem('auth_token');

const RequestHeaders = {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
    'x-auth-token': `${auth_token}`
}


const Axios = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: RequestHeaders,
})

export default Axios;