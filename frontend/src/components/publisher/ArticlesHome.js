import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
import { getAllArticles } from '../../dataStore/actions/articleActions';
//import action creators
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ArticlesHome extends Component {
    render() {
        return (
            <div>
                Landing page and linked list of published articles
                data: article_list
            </div>
        )
    }
}


ArticlesHome.propTypes ={
    //add props and action creators here.
    getAllArticles: PropTypes.func.isRequired,
    article_list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});

export default connect(mapStateToProps, { })(ArticlesHome)