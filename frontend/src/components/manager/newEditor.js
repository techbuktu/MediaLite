import React, { useContext, useState, useEffect } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewEditor } from '../../contextState/actions/editorActions';
import PropTypes from 'prop-types';
import { AppContext } from '../../contextState';

 const NewEditor = () => {
    const {editorState, editorDispatch} = useContext(AppContext);
    const [about, setAbout] = useState('');
    
    //placeholder userState.user object until auth is implemented
    const user = {
        firstName: 'Ramadhan',
        lastName: 'Fatih',
        email: 'coding.farouq@example.com',
        joinDate: "2019-10-16T20:07:12.805Z"
    }

    const onChange= (e) => {
        setAbout(e.target.value);
        console.log(about);
    };

    const onSubmit= (e) => {
        e.preventDefault();
        let newEditorObj = {
            user: user,
            about: about
        }

        const newEditorJson = JSON.stringify(newEditorObj);
        createNewEditor(newEditorJson)(editorDispatch);
        setAbout('');
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
                                class="about"
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


NewEditor.propTypes ={
    //add props and action creators here.
    createNewEditor: PropTypes.func,
    errorMessage: PropTypes.string
};

export default NewEditor;
