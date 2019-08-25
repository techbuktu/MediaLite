import React, { Component } from 'react';
import Writer from './Writer';
import WriterApi from '../../api/WriterApi';


export default class WriterList extends Component {
    state = {
        writers: [ ],
        writers_api_error_msg : ""
    }
    
    componentDidMount(){
        this.getWriters();
    }

    render() {
        return this.state.writers.map((writer) => (
            <Writer key={writer.link} writer={writer} />
        ))
    }

    getWriters(){
        WriterApi.getAllWriters()
            .then(response => {
                this.setState({
                    writers: response.data
                })
                console.log(this.state.writers);
            })
            .catch(err => {
                this.setState({
                    writer_api_erro_msg: err
                })
                console.log(this.state.api_error_msg);
            })
            .finally(() => {})

    }

}
