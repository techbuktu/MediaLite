import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../contextState';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getAllEditors } from '../../contextState/actions/editorActions';
import { getAllWriters } from '../../contextState/actions/writerActions';
import PropTypes from 'prop-types';


const ManagerHome = () => {
        const {editorState, editorDispatch} = useContext(AppContext);
        const {writerState, writerDispatch} = useContext(AppContext);

        useEffect(() => {
            getAllEditors()(editorDispatch);
            getAllWriters()(writerDispatch);
        }, [])

        const editorsUI = editorState.editor_list.map(editor => {
            return(
                    <li key={editor._id}>
                        <Link to={`/editors/${editor._id}`}>
                            {editor.user.firstName} {editor.user.lastName}
                        </Link>
                    </li>
            )
        });

        const writersUI = writerState.writer_list.map(writer => {
            return (
                    <li key={writer._id}>
                        <Link to={`/writers/${writer._id}`}>
                            {writer.user.firstName} {writer.user.lastName}
                        </Link>
                    </li>
            )
        })
        
        return (
            <div>
                <h5>Editors</h5>
                <ul>
                    {editorsUI}
                </ul>
                <h5> Writers</h5>
               <ul>
                    {writersUI}
               </ul>
            </div>
        )
}


ManagerHome.propTypes ={
    //add props and action creators here.
    editor_list: PropTypes.array.isRequired,
    writer_list: PropTypes.array,
    getAllEditors: PropTypes.func.isRequired,
    getAllWriters: PropTypes.func.isRequired,
    editorsErrorMessage: PropTypes.string,
    writersErrorMessage: PropTypes.string
};


export default ManagerHome;