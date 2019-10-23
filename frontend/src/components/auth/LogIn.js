import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { loginUser } from '../../dataStore/actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LogIn extends Component {
    constructor(){
        super();

        this.loginCredsObj = {

        };

        this.onChange = this.onChange.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    onChange(e){
        //Populate the loginCredsObj 
        this.loginCredsObj[e.target.name] = e.target.value;
        console.log(this.loginCredsObj);
        
    };

    logIn(e){
        e.preventDefault();
        //JSONify the object for the API call 
        let loginJson = JSON.stringify(this.loginCredsObj);
        //POST the login creds to the API using the loginUser action creator.
        this.props.loginUser(loginJson);
        //Clear the login_form 
        document.getElementById("login_form").reset();
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.logIn} id="login_form">
                        <div className="formContainer">
                            <h5>Login to Your Medialite Account</h5>
                            <p>
                                <label>
                                    eMail 
                                </label>
                                <input type="email" className="formInput" name="email" defaultValue="" onChange={this.onChange} />
                            </p>
                            <p>
                                <label>
                                    Password
                                </label>
                                <input type="password" className="formInput" name="password" defaultValue="" onChange={this.onChange} />
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


const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    errorMessage: state.users.errorMessage,
    auth_token: state.users.auth_token,
    user: state.users.user

});


export default connect(mapStateToProps, { loginUser })(LogIn);