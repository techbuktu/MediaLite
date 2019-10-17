import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getEditorById } from '../../dataStore/actions/editorActions';
import { getWritersUnderEditor } from '../../dataStore/actions/writerActions';
import { getUser } from '../../dataStore/actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Editor extends Component {

    componentDidMount(){
        let editorLink = this.props.match.params.editorLink;
        this.props.getEditorById(editorLink);
        this.props.getWritersUnderEditor()
    };

    render() {
        const {about, user} = this.props.editor;

        if(this.props.editor.user){
            return (
                <div>
                    <h5>
                        {user.firstName} {user.lastName}
                    </h5>
                    <h5>About Me</h5>
                    <p>
                        {about}
                    </p>
                </div>
            )
        }else {
            return(
                <p>
                    Loading...
                </p>
            )
        }
    }
}

Editor.propTypes = {
    //add props and action creators here.
    editor: PropTypes.object.isRequired,
    getEditorById: PropTypes.func.isRequired,
    getwritersUnderEditor: PropTypes.func,
    writers_under_editor: PropTypes.array // implement API endpoint, TYPE, action creator and reducer case for this.
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    editor: state.editors.editor
});

export default connect(mapStateToProps, { getEditorById, getWritersUnderEditor })(Editor);
