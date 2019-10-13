import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getEditorById, getwritersByEditor } from '../../dataStore/actions/editorActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Editor extends Component {
    render() {
        return (
            <div>
                Details about an editor.
                data: editor
            </div>
        )
    }
}


Editor.propTypes = {
    //add props and action creators here.
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});

export default connect(mapStateToProps, { })(Editor);
