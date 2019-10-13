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
    editor: PropTypes.object.isRequired,
    getEditorById: PropTypes.func.isRequired,
    getwritersByEditor: PropTypes.func.isRequired,
    writers_under_editor: PropTypes.array // implement API endpoint, TYPE, action creator and reducer case for this.
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    editor: state.editors.editor
});

export default connect(mapStateToProps, { })(Editor);
