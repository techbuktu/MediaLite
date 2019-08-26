import React, { Component } from 'react';
import Comment from './Comment';
import NewComment from './NewComment';

class Article extends Component {
    state = {
        article : {

        },
        new_comment : {

        },
        comments : [

        ]
    }
    render() {
        return (
            <div>
                <h5>Title of Article</h5>
            </div>
        )
    }

    getArticleDetails(link){
        
    };

    getArticleComments(){

    };

    commentOnArticle(link){

    };
}

export default Article;