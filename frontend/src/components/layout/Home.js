import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                The landing page of the user-facing MediaLite app;
                <p>
                    This is the home page! :)
                </p>
            </div>
        )
    }
}

Home.propTypes ={
    //add props and action creators here.
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});

export default connect(mapStateToProps, {})(Home)
