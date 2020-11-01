import React, { useState, useContext } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { registerUser } from '../../contextState/actions/userActions';
import PropTypes from 'prop-types';
import { AppContext } from '../../contextState';

const Register = () => {
    const {userState, userDispatch} = useContext(AppContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    
    //Instantiate the newUserObj to submit to the API to register a new User
    const newUserObj = {

    };

    function onChange(e){
        //Populate the newUserObj
        newUserObj[e.target.name] = e.target.value;
        console.log(`newUserObj: ${newUserObj}`);
    }

    function onSubmit(e){
        e.preventDefault();
        let newUserJson = JSON.stringify(newUserObj);
        registerUser(newUserJson)(userDispatch);
        document.getElementById("register_form").reset();
    };
    
    
    if(userState.user.firstName){
        return (
            <div>
                <h5>Congrats, {userState.user.firstName}! You have registered as {userState.user.email}</h5>
            </div>
        )
    }else {
        return (
            <div>
                <form onSubmit={onSubmit} id="register_form">
                    <div className="formContainer">
                        <h5>Register for a New Medialite Account</h5>
                        <p>
                            <label>
                                First Name
                            </label>
                            <input type="text" className="formInput" name="firstName" defaultValue="" onChange={onChange} />
                        </p>
                        <p>
                            <label>
                                Last Name
                            </label>
                            <input type="text" className="formInput" name="lastName" defaultValue="" onChange={onChange} />
                        </p>
                        <p>
                            <label>
                                eMail 
                            </label>
                            <input type="email" className="formInput" name="email" defaultValue="" onChange={onChange} />
                        </p>
                        <p>
                            <label>
                                Password
                            </label>
                            <input type="password" className="formInput" name="password" defaultValue="" onChange={onChange} />
                        </p>
                        <input type="submit" value="Submit Comment"/>
                    </div>
                </form>
            </div>
        )
    }
};

Register.propTypes ={
    //add props and action creators here.
    registerUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    errorMessage: PropTypes.object
};


export default Register;