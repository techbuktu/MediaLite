import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getEditorById } from '../../dataStore/actions/editorActions';
import { getWritersByEditor } from '../../dataStore/actions/writerActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Editor extends Component {

    componentDidMount(){
        let editorLink = this.props.match.params.editorLink;
        this.props.getEditorById(editorLink);
    };

    render() {
        const {user, about} = this.props.editor;
        console.log(this.props.editor);
        return (
            <div>
                <h5>
                   
                </h5>
                <h5>About Me</h5>
                <p>
                    {this.props.editor.about}
                </p>
            </div>
        )
    }
}


Editor.propTypes = {
    //add props and action creators here.
    editor: PropTypes.object.isRequired,
    getEditorById: PropTypes.func.isRequired,
    getwritersByEditor: PropTypes.func,
    writers_under_editor: PropTypes.array // implement API endpoint, TYPE, action creator and reducer case for this.
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    editor: state.editors.editor
});

export default connect(mapStateToProps, { getEditorById, getWritersByEditor })(Editor);
