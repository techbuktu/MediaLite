import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Import API services for perform CRUD ops against MediaLite API
import WriterApi from '../../api/WriterApi';
import EditorApi from '../../api/EditorApi';


class Manager extends Component {
    constructor(){
        super();
        
        this.state = {
            writers: [],
            editors: [],
        }

    }

    componentDidMount(){
        
    }

    render() {
        return (
            <p>
                <button> <Link to="/manager/editors">Editors Corner</Link> </button>  {''}
                <button> <Link to="/manager/writers"> Writers Valley</Link> </button> 
            </p>
        )
    }
}

Manager.propTypes = {
    //editors: PropTypes.array.isRequired,
    //writers: PropTypes.array.isRequired,
    //user: PropTypes.object.isRequired
};

export default Manager;