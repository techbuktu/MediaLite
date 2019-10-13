import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { registerUser } from '../../dataStore/actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Register extends Component {
    render() {
        return (
            <div>
                Register for an Account
            </div>
        )
    }
};

Register.propTypes ={
    //add props and action creators here.
    registerUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


export default connect(mapStateToProps, { })(Register);