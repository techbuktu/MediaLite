import axios from 'axios';


const auth_token = localStorage.getItem('auth_token');

const RequestHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'x-auth-token': `${auth_token}`
}


const Axios = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: RequestHeaders,
})

export default Axios;