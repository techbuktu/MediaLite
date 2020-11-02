import React, { useState, useContext } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { loginUser } from '../../contextState/actions/userActions';
import PropTypes from 'prop-types';
import { AppContext } from '../../contextState';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {userState, userDispatch} = useContext(AppContext);

    const loginCredsObj = {

    };    

    function onChange(e){
        //Populate the loginCredsObj 
        loginCredsObj[e.target.name] = e.target.value;
        console.log(loginCredsObj);
        
    };

    function logIn(e){
        e.preventDefault();
        //JSONify the object for the API call 
        let loginJson = JSON.stringify(loginCredsObj);
        //POST the login creds to the API using the loginUser action creator.
        loginUser(loginJson)(userDispatch);
        //Clear the login_form 
        document.getElementById("login_form").reset();
    }
    
    if(userState.user && userState.auth_token){
        return (
            <div> 
                <p>
                    {userState.user.firstName}, you are logged in.
                </p>
                <p>
                    You can head to the <Link to={'/'}>Home page</Link>
                </p>
            </div>
        )
    }else {
        return (
            <div>
                <div>
                    <form onSubmit={logIn} id="login_form">
                        <div className="formContainer">
                            <h5>Login to Your Medialite Account</h5>
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
                            <input type="submit" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

LogIn.propTypes ={
    //add props and action creators here.
    loginUser: PropTypes.func.isRequired,
    auth_token: PropTypes.string,
    user: PropTypes.object
};

export default LogIn;