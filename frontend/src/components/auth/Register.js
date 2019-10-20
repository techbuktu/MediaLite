import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { registerUser } from '../../dataStore/actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Register extends Component {
    constructor(){
        super();

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Instantiate the newUserObj to submit to the API to register a new User
        this.newUserObj = {

        };
    };

    componentDidMount(){
        //
    };

    onChange(e){
        //Populate the newUserObj
        this.newUserObj[e.target.name] = e.target.value;
        console.log(`this.newUserObj: ${this.newUserObj}`);
    }

    onSubmit(e){
        e.preventDefault();
        let newUserJson = JSON.stringify(this.newUserObj);
        this.props.registerUser(newUserJson);
        document.getElementById("register_form").reset();
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} id="register_form">
                    <div className="formContainer">
                        <h5>Register for a New Medialite Account</h5>
                        <p>
                            <label>
                                First Name
                            </label>
                            <input type="text" className="formInput" name="firstName" defaultValue="" onChange={this.onChange} />
                        </p>
                        <p>
                            <label>
                                Last Name
                            </label>
                            <input type="text" className="formInput" name="lastName" defaultValue="" onChange={this.onChange} />
                        </p>
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
    new_user: PropTypes.object
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    new_user: state.users.new_user
});


export default connect(mapStateToProps, { registerUser })(Register);