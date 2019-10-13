import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getArticle } from '../../dataStore/actions/articleActions';
import { getCommentsforArticle } from '../../dataStore/actions/commentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';

class Article extends Component {
    render() {
        return (
            <div>
                Details about an article: Life in the Tech Lane.
                data: article
            </div>
        )
    }
}


Article.propTypes ={
    //add props and action creators here.
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


export default connect(mapStateToProps, { })(Article)