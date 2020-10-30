import React, { useContext } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewComment } from '../../contextState/actions/commentActions';
import { getArticle } from '../../contextState/actions/articleActions';
import PropTypes from 'prop-types';
import { AppContext } from '../../contextState';

function NewComment(props){
        const {commentState, commentDispatch} = useContext(AppContext);

        //placeholder for this.props.commenter until auth is implemented
        let commenter = {
            "isActive":true,
            "_id":"5d910ef06b3fcb4e13ac3544",
            "firstName":"Alice","lastName":"Diallo",
            "email":"alice.diallo@example.com",
            "joinDate":"2019-09-29T20:07:12.805Z",
            "__v":0
        };

        //Instantiate newCommentObj
        let newCommentObj ={
            commenter: commenter
        };

        //this.onChange = this.onChange.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);

        function onChange(e){
            newCommentObj["commentBody"] = e.target.value;
        };

        function onSubmit(e){
            e.preventDefault();
            newCommentObj["article"] = props.parentArticle;
            //call action creators here to submit form data to API
            let newCommentJson = JSON.stringify(newCommentObj);
            createNewComment(newCommentJson)(commentDispatch);
            //Reset the form after submitting it. Keep it clean! :)
            //document.getElementById("create-course-form").reset();
            document.getElementById("comment_form").reset();
        };
    
        return (
            <div>
                <form onSubmit={onSubmit} id="comment_form">
                    <div className="formContainer">
                        <h5>Got something to share?</h5>
                        <h6>Submit Your Comment Below</h6>
                        <br/>
                            <textarea defaultValue="" onChange={onChange} rows="7" cols="30" name="commentBody" />
                        <br/>
                        <input type="submit" value="Submit Comment"/>
                    </div>
                </form>
            </div>
        )
}

NewComment.propTypes ={
    //add props and action creators here.
    createNewComment: PropTypes.func,
    article: PropTypes.object,
    errorMessage: PropTypes.object,
    new_comment: PropTypes.object
};



export default NewComment;