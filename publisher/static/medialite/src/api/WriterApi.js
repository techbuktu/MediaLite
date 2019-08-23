import axios from 'axios';

class WriterApi{
    constructor(){}

    getAllWriters(){
        return axios.get("http://localhost:8000/api/manager/writers/");
    }

    getWriterByLink(writer_link){
        return axios.get("http://localhost:8000/api/manager/writers/${writer_link}/");
    }

    newWriter(new_writer){
        return axios.get("http://localhost:8000/api/manager/writers/", new_writer);
    }
}