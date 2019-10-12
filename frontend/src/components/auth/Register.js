import React, { Component } from 'react';
//import action creators
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
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


export default connect(mapStateToProps, { })(Register);