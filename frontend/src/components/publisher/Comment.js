import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getComment } from '../../dataStore/actions/commentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Comment extends Component {
    componentDidMount(){
        
    };
    
    render() {
        return (
            <div>
                <p>
                    { this.props.commentItem.commentBody }
                </p>
            </div>
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

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    article: state.articles.article,
    comment: state.comments.comment,
    errorMessage: state.comments.errorMessage
});

export default connect(mapStateToProps, { getComment })(Comment)
