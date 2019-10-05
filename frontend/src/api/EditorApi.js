import Axios from './BaseApi';

class EditorApi {
    //Handles all CRUD ops against Editor model at: /api/manager/editors endpoint.

    static newEditor(new_editor_obj){
        return Axios.post(`/manager/editors`, new_editor_obj);
    }

    static getEditorById(editorId){
        return Axios.get(`/manager/editors/${editorId}`);
    }

    static getEditorByUser(user_obj){
        return Axios.get(`/manager/editors/user`, user_obj);
    }

    static updateEditor(editorId, updated_editor_obj){
        return Axios.put(`/manager/editors/${editorId}`, updated_editor_obj);
    }

    static deleteEditor(editorId){
        return Axios.delete(`/manager/editors/${editorId}`);
    }

    static getAllEditors(){
        return Axios.get(`/manager/editors`);
    }
    
}