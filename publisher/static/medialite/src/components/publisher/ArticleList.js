import React, { Component } from 'react';


class ArticleList extends Component {
    state = {
        new_article : {

        },
        article_list : []
    }
    render() {
        return (
            <div>
                <p>
                    List of Articles.
                </p>
            </div>
        )
    }

    getArticles(){

    };

    publishNewArticle(){

    };
}

export default ArticleList;