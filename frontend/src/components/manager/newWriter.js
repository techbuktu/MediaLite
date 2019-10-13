import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewWriter } from '../../dataStore/actions/writerActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class newWriter extends Component {
    render() {
        return (
            <div>
                Form to create a new Writer.
            </div>
        )
    }
}


newWriter.propTypes ={
    //add props and action creators here.
    createNewWriter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


export default connect(mapStateToProps, { createNewWriter })(newWriter)