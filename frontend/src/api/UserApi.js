import Axios from './BaseApi';

class UserApi {
    //Performs all CRUD ops against backend User API: /api/manager/users

    static newUser(new_user_obj){
        return Axios.post(`/manager/users`, new_user_obj);
    }

    static getUser(userId){
        return Axios.get(`/manager/users/${userId}`);
    }

    static updateUser(userId, updatedUserObj){
        return Axios.put(`/manager/users/${userId}`, updatedUserObj);
    }

    static deleteUser(userId){
        return Axios.delete(`/manager/users/${userId}`);
    }

    static getAllUsers(){
        return Axios.get(`/manager/users`);
    }

    static loginUser(login_creds){
        return Axios.post(`/manager/users/login`, login_creds);
    }
}