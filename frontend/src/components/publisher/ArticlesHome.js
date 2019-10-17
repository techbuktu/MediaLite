import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
import { getAllArticles } from '../../dataStore/actions/articleActions';
//import action creators
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ArticlesHome extends Component {
    componentDidMount(){
        this.props.getAllArticles();
    };

    render() {
        const all_articles = this.props.article_list.map(article => {
            return (
                <p>
                    <Link to={`/articles/${article.link}`}>
                        {article.title}
                    </Link>
                </p>
            )
        });
        
        return (
            <div>
                {all_articles}
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
    article_list: state.articles.article_list,
    errorMessage: state.articles.errorMessage
});

export default connect(mapStateToProps, { getAllArticles })(ArticlesHome)