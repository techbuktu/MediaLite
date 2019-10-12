import React, { Component } from 'react';
//import action creators
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class newComment extends Component {
    render() {
        return (
            <div>
                Form to submit a new Comment on an article.
                Data needed: article
            </div>
        )
    }
}

newComment.propTypes ={
    //add props and action creators here.
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


//after mapStateToProps: export default connect(mapStateToProps, {[action_creators,]})(componentName)
export default newComment;