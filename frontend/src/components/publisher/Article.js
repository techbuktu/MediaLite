import React, { useEffect, useContext } from 'react';
//import react-router-dom components
import { Redirect, Link, useParams } from 'react-router-dom'; 
//import action creators
import { getArticle } from '../../contextState/actions/articleActions';
import { getCommentsforArticle } from '../../contextState/actions/commentActions';
import PropTypes from 'prop-types';
import Comment from './Comment';
import NewComment from './newComment';
import { AppContext } from '../../contextState';

const Article = (props) => {
    const {articleState, articleDispatch} = useContext(AppContext);
    const {commentState, commentDispatch } = useContext(AppContext);
    const { articleLink } = useParams();

    useEffect(() => {
        getArticle(articleLink)(articleDispatch);
        console.log(`articleState.article: ${articleState.article.title}`)
    }, [articleLink])


    const commentsUI = () => {
        if(commentState.comment_list.length > 0){
            return commentState.comment_list.map(comment => {
                    return (
                        <Comment commentItem = {comment} key={comment._id} />
                    )
                });
            }else {
                return (
                    <p>
                    <i>
                        No comments have been posted on this article yet.
                    </i>
                    </p>
                )
            }
    };
        
    if(articleState.article){
        return (
            <div>
                <h4> {articleState.article.title} </h4>
                <div>
                    {articleState.article.body}
                </div>
                <div>
                    <h5> Reader comments: </h5>
                    {commentsUI()}
                </div>
                
                <NewComment parentArticle={articleState.article} />

            </div>
        )
    }else {
        return (
            <div>
                Loading... Please, wait....
            </div>
        )
    }
}


Article.propTypes ={
    //add props and action creators here.
    getArticle: PropTypes.func,
    getCommentsforArticle: PropTypes.func,
    article: PropTypes.object,
    comment_list: PropTypes.array,
    errorMessage: PropTypes.object,
    commentsErrorMessage: PropTypes.object
};


export default Article;