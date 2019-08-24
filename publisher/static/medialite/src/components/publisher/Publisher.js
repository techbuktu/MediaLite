import React, { Component } from 'react';
import ArticleApi from '../../api/ArticleApi';
import PropTypes from 'prop-types';

class Publisher extends Component {
    componentDidMount(){
        this.getArticles();
    };

    state = {
        latest_articles : []

    };

    render() {
        return (
            <div>
                <p> 
                    Publisher home.
                </p>
            </div>
        )
    }

    getArticles(){
        ArticleApi.getAllArticles();
    };

}

//PropTypes for the Publisher component
Publisher.propTypes = {
    
}

export default  Publisher;