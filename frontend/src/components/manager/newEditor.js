import React, { useContext, useState, useEffect } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewEditor } from '../../contextState/actions/editorActions';
import PropTypes from 'prop-types';
import { AppContext } from '../../contextState';

const newEditor = () => {
    const {editorState, editorDispatch} = useContext(AppContext);
    //const {editor, setEditor} = useState({});
    
    //placeholder userState.user object until auth is implemented
    user = {
        firstName: 'Abraham',
        lastName: 'Lincoln',
        email: 'coding.abe@example.com',
        joinDate: "2019-10-16T20:07:12.805Z"
    }

    onChange= (e) => {
        about = e.target.value;
        console.log(about);
    };

    onSubmit= (e) => {
        e.preventDefault();
        let newEditorObj = {
            user: user,
            about: about
        }
        const newEditorJson = JSON.stringify(newEditorObj);
        createNewEditor(newEditorJson)(editorDispatch);
    }

    return (
        <div>
                <form onSubmit={onSubmit}>
                    <div className="formContainer">
                        <p>
                            <label> About </label>
                        </p>
                        <p>
                            <textarea 
                                name="about" 
                                defaultValue="" 
                                placeholder="Enter some bio info about this new Editor." 
                                cols="30" rows="7"
                                onChange={onChange} 
                            />
                        </p>
                    </div>
                <button type="submit"> Add New Editor</button>
                </form>
        </div>
    )
}


newEditor.propTypes ={
    //add props and action creators here.
    createNewEditor: PropTypes.func,
    errorMessage: PropTypes.string
};



export default newEditor;
