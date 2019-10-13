import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { loginUser } from '../../dataStore/actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LogIn extends Component {
    render() {
        return (
            <div>
                Login form
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

});


export default connect(mapStateToProps, { loginUser })(LogIn);