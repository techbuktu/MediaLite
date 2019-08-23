import React, { Component } from 'react';
import ArticleApi from '../../api/ArticleApi';

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

export default  Publisher;