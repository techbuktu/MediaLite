import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getComment } from '../../dataStore/actions/commentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Comment extends Component {
    render() {
        return (
            <div>
                Details about a Comment.
                data: comment 
            </div>
        )
    }
}


Comment.propTypes = {
    //add props and action creators here.
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});

export default connect(mapStateToProps, { })(Comment)
