import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getArticle } from '../../dataStore/actions/articleActions';
import { getCommentsforArticle } from '../../dataStore/actions/commentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';
import NewComment from './newComment';

class Article extends Component {
    componentDidMount(){
        let articleLink = this.props.match.params.articleLink;
        this.props.getArticle(articleLink); 
        this.props.getCommentsforArticle(articleLink);
    };

    render() {
        const article_comments = this.props.comment_list.map(comment => {
            return (
                <p key={comment._id}>
                    { comment.body }
                </p>
            )
        })
        if(this.props.comment_list){
            return (
                <div>
                    <h4> {this.props.article.title} </h4>
                    <div>
                        {this.props.article.body}
                    </div>
                    <div>
                        <h5> Reader comments: </h5>
                        {article_comments}
                    </div>
                    <h5>Got something to share?</h5>
                    <NewComment parentArticle={this.props.article} />

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
}


Article.propTypes ={
    //add props and action creators here.
    getArticle: PropTypes.func.isRequired,
    getCommentsforArticle: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired,
    comment_list: PropTypes.array.isRequired,
    errorMessage: PropTypes.object,
    commentsErrorMessage: PropTypes.object
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    article: state.articles.article,
    comment_list: state.comments.comment_list,
    errorMessage: state.articles.errorMessage,
    commentsErrorMessage: state.comments.errorMessage
});


export default connect(mapStateToProps, { getArticle, getCommentsforArticle })(Article)