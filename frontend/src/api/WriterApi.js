import Axios from './BaseApi';

class WriterApi {
    //Handles all CRUD operations against the Writer model at: /api/manager/writers

    static newWriter(new_writer_obj){
        return Axios.post(`/manager/writers`, new_writer_obj);
    }

    static getWritersByEditor(editorId){
        return Axios.get(`/manager/editors/${editorId}`);
    }

    static updateWriter(writerId, updated_writer_obj){
        return Axios.put(`/manager/writers/${writerId}`, updated_writer_obj);
    }

    static getWriterByUser(userId){
        return Axios.get(`/manager/writers/${userId}`);
    }

    static deleteWriter(writerId){
        return Axios.delete(`/manager/writers/${writerId}`);
    }

    getAllWriters(){
        return Axios.get(`/manager/writers`);
    }

}