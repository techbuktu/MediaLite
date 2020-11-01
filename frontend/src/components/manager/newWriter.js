import React, { useState, useContext } from 'react';
//import react-router-dom components
import { Redirect, Link, useParams } from 'react-router-dom'; 
//import action creators
import { createNewWriter } from '../../contextState/actions/writerActions'
import PropTypes from 'prop-types';
import { AppContext } from '../../contextState';

const NewWriter = () => {
    const [about, setAbout] = useState({});
    const {writerState, writerDispatch} = useContext(AppContext);

    //placeholder userStatae.user until auth is implemented
    let user = {
        isActive:true,
        firstName:"Alpha",
        lastName:"Jalloh",
        email:"techlite@jalloh.com"
    };

    //placeholder editorState.editor object until auth, etc. is implemented
    let editor = {
        "_id": "5f989a5b541e9f24d78b53a7",
        "user": {
            "isActive": true,
            "_id": "5f98993c541e9f24d78b53a4",
            "firstName": "Testley",
            "lastName": "Johnson",
            "email": "testley@example.com",
            "password": "$2a$10$s0A1ZC0kx2nLBqnhrpN7RuM4VASNieayj7OSM41ytb9FutTF9p3hK",
            "joinDate": "2020-10-27T22:03:40.386Z",
            "__v": 0
        },
        "about": "I am the Editor of the NodeVersity Times",
        "date": "2020-10-27T22:08:27.929Z",
        "__v": 0
    }

    const onChange = (e) => {
        setAbout(e.target.value);
    };

    const onSubmit = (e)=> {
        e.preventDefault();

        let newWriterObj = {
            user: user,
            about: about,
            editor: editor,
        };

        const newWriterJson = JSON.stringify(newWriterObj)
        console.log(newWriterJson);
        createNewWriter(newWriterJson)(writerDispatch);
    };
    
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="formContainer">
                    <h5> Use the Form Below to Add a New Staff Writer</h5>
                    <p>
                        <label> About </label>
                    </p>
                    <p>
                        <textarea 
                            name="about" 
                            defaultValue="" 
                            placeholder="Enter some details about this new Writer." 
                            cols="30" rows="7"
                            onChange={onChange} 
                        />
                    </p>
                </div>
                <button type="submit"> Add New Writer</button>
            </form>
        </div>
    )
}


NewWriter.propTypes ={
    //add props and action creators here.
    createNewWriter: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};

export default NewWriter