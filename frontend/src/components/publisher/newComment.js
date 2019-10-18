import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewComment } from '../../dataStore/actions/commentActions';
import { getArticle } from '../../dataStore/actions/articleActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class NewComment extends Component {
    constructor(){
        super();

        //placeholder for this.props.commenter until auth is implemented
        this.commenter = {
            "isActive":true,
            "_id":"5d910ef06b3fcb4e13ac3544",
            "firstName":"Alice","lastName":"Diallo",
            "email":"alice.diallo@example.com",
            "joinDate":"2019-09-29T20:07:12.805Z",
            "__v":0
        };

        //Instantiate newCommentObj
        this.newCommentObj ={
            commenter: this.commenter
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        //
    };

    onChange(e){
        this.newCommentObj["commentBody"] = e.target.value;
    };

    onSubmit(e){
        e.preventDefault();
        this.newCommentObj["article"] = this.props.parentArticle;
        //call action creators here to submit form data to API
        let newCommentJson = JSON.stringify(this.newCommentObj);
        this.props.createNewComment(newCommentJson);
    };
    
    render() {
        return (
            <div>
                Hi, comment here! :)
                <form onSubmit={this.onSubmit}>
                    <div className="formContainer">
                        <h5>Submit Your Comment</h5>
                        <p>
                            <textarea defaultValue="" onChange={this.onChange} rows="7" cols="30" name="commentBody" />
                        </p>
                        <input type="submit" value="Submit Comment"/>
                    </div>
                </form>
            </div>
        )
    }
}

NewComment.propTypes ={
    //add props and action creators here.
    createNewComment: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired,
    errorMessage: PropTypes.object,
    new_comment: PropTypes.object
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    article: state.articles.article,
    errorMessage: state.comments.errorMessage,
    new_comment: state.comments.new_comment
});

export default connect(mapStateToProps, { createNewComment })(NewComment);