import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewArticle } from '../../dataStore/actions/commentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class newArticle extends Component {
    render() {
        return (
            <div>
                Form to create a new Article 
            </div>
        )
    }
}


newArticle.propTypes ={
    //add props and action creators here.
    createNewArticle: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


export default connect(mapStateToProps, { })(newArticle)