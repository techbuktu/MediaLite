import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewComment } from '../../dataStore/actions/commentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class newComment extends Component {
    componentDidMount(){
        //
    };

    onChange(e){
        //
    };

    onSubmit(e){
        e.preventDefault();
        //call action creators here to submit form data to API
    };
    
    render() {
        return (
            <div>
                Form to submit a new Comment on an article.
                Data needed: article
            </div>
        )
    }
}

newComment.propTypes ={
    //add props and action creators here.
    createNewComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    article: state.articles.article
});

export default connect(mapStateToProps, { createNewComment })(newComment)