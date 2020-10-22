import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getComment } from '../../contextState/actions/commentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Comment extends Component {
    componentDidMount(){
        
    };
    
    render() {
        const {commenter, commentBody} = this.props.commentItem;
        if(this.props.commentItem.commenter){
            return (
                <p> 
                    <h5> {commenter.firstName} {commenter.lastName} said:</h5>
                    <i>
                        { commentBody }
                    </i>
                </p>
            )
        } else {
            return (
                <p>
                    Loading chatter ... :)
                </p>
            )
        }
    }
}


Comment.propTypes = {
    //add props and action creators here.
    getComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    article: PropTypes.object,
    errorMessage: PropTypes.string
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    article: state.articles.article,
    comment: state.comments.comment,
    errorMessage: state.comments.errorMessage
});

export default connect(mapStateToProps, { getComment })(Comment)
