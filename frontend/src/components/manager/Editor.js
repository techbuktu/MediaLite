import React, { useEffect, useContext } from 'react';
//import react-router-dom components
import { Redirect, Link, useParams } from 'react-router-dom'; 
//import action creators
import { getEditorById, getEditorByUser } from '../../contextState/actions/editorActions';
import { getWritersUnderEditor } from '../../contextState/actions/writerActions';
import { getUser } from '../../contextState/actions/userActions';
import PropTypes from 'prop-types';
import { AppContext } from '../../contextState';

const Editor = () => {
    const {editorState, editorDispatch} = useContext(AppContext);
    const {writerState, writerDispatch} = useContext(AppContext);

    let { editorLink } = useParams();

    useEffect(() => {
        getEditorById(editorLink)(editorDispatch);
        getWritersUnderEditor(editorLink)(editorDispatch);
    }, [])

        const {about, user} = editorState.editor;

        const writersUnderEditorUI = writerState.writer_list.map(writer => {
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

        if(editorState.editor.user){
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

Editor.propTypes = {
    //add props and action creators here.
    editor: PropTypes.object.isRequired,
    getEditorById: PropTypes.func.isRequired,
    getwritersUnderEditor: PropTypes.func,
    writer_list: PropTypes.array,
    errorMessage: PropTypes.string
};


export default Editor;