import axios from 'axios';

class EditorApi {
    constructor(){}

    static getAllEditors(){
        return axios.get("http://localhost:8000/api/manager/editors");
    }

    static getSingleEditor(editor_link){
        return axios.get("http://localhost:8000/api/manager/editors/${editor_link}/");
    }

    static postNewEditor(new_editor){
        return axios.post("http://localhost:8000/api/manager/editors/", new_editor);
    }
}