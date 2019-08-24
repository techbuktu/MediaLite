import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Manager extends Component {

    componentDidMount(){
        this.getEditors();
        this.getWriters();
    }

    render() {
        return (
            <div>
                Manager Home
            </div>
        )
    }

    getWriters(){

    }

    getEditors(){

    }
}

Manager.propTypes = {
    editors: PropTypes.array.isRequired,
    writers: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
};

export default Manager;