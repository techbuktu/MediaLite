import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Import API services for perform CRUD ops against MediaLite API
import WriterApi from '../../api/WriterApi';
import EditorApi from '../../api/EditorApi';


class Manager extends Component {
    state = {
        writers: [],
        editors: [],
        writer_api_error_msg : "",
        editor_api_error_msg : ""
    }

    componentDidMount(){
        this.getEditors();
        this.getWriters();
    }

    render() {
        return (
            <p>
                <button> <Link to="">Editors Corner</Link> </button>  {''}
                <button> <Link to=""> Writers Valley</Link> </button> 
            </p>

        )
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

    getEditors(){
        EditorApi.getAllEditors()
            .then(response => {
                this.setState({
                    editors: response.data
                })
                console.log(this.state.editors);
            })
            .catch(err => {
                this.setState({
                    editor_api_error_msg: err
                })
            })
            .finally(() => {})
    }
}

Manager.propTypes = {
    //editors: PropTypes.array.isRequired,
    //writers: PropTypes.array.isRequired,
    //user: PropTypes.object.isRequired
};

export default Manager;