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
        this.props.getWritersUnderEditor(editorLink);
    };

    render() {
        const {about, user} = this.props.editor;

        const writersUnderEditorUI = this.props.writer_list.map(writer => {
            const { user, _id } = writer;
            if(user){
                return (
                    <p>
                        <Link to={`/writers/${_id}`}> {user.firstName} {user.lastName}</Link>
                    </p>
                )
            }else {
                return (
                    <p>
                        Loading ... writer...
                    </p>
                )
            }
        })

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
                    <h5> Writers I Work With</h5>
                    {writersUnderEditorUI}

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
    writer_list: PropTypes.array,
    errorMessage: PropTypes.string
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    editor: state.editors.editor,
    writer_list: state.writers.writer_list,
    errorMessage: state.editors.errorMessage
});

export default connect(mapStateToProps, { getEditorById, getWritersUnderEditor })(Editor);
