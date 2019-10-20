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
        
    }

    onChange(e){

        
    };

    logIn(e){
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit} id="login_form">
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
    loginUser: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    errorMessage: state.users.errorMessage

});


export default connect(mapStateToProps, { loginUser })(LogIn);