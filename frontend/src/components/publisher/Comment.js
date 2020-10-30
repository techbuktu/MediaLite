import React from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getComment } from '../../contextState/actions/commentActions';
import PropTypes from 'prop-types';

const Comment = ({commentItem}) => {
    
        const {commenter, commentBody} = commentItem;

        if(commentItem.commenter){
            return (
                <>
                    <p> 
                        <h5> {commenter.firstName} {commenter.lastName} said:</h5>
                        <i>
                            { commentBody }
                        </i>
                     </p>
                </>
            )
        } else {
            return (
                <p>
                    Loading chatter ... :)
                </p>
            )
        }
}


Comment.propTypes = {
    //add props and action creators here.
    getComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    article: PropTypes.object,
    errorMessage: PropTypes.string
};

export default Comment;
