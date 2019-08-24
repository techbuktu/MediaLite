import axios from 'axios';

class WriterApi{
    constructor(){}

    static getAllWriters(){
        return axios.get("http://localhost:8000/api/manager/writers/");
    }

    static getWriterByLink(writer_link){
        return axios.get("http://localhost:8000/api/manager/writers/${writer_link}/");
    }

    static newWriter(new_writer){
        return axios.get("http://localhost:8000/api/manager/writers/", new_writer);
    }
}

export default WriterApi;