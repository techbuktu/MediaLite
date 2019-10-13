import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewEditor } from '../../dataStore/actions/editorActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class newEditor extends Component {
    render() {
        return (
            <div>
                Form to create a new Editor 
            </div>
        )
    }
}


newEditor.propTypes ={
    //add props and action creators here.
    createNewEditor: PropTypes.func
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


export default connect(mapStateToProps, { createNewEditor })(newEditor);
