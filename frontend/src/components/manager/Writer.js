import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getWriter } from '../../dataStore/actions/writerActions'; //getAllArticlesforWriter() too
//import { getAllArticlesforWriter } from '../../dataStore/actions/articleActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Writer extends Component {
    render() {
        return (
            <div>
                Details about a Writer.
                Data needed: writer
            </div>
        )
    }
}


Writer.propTypes ={
    //add props and action creators here.
    getWriter: PropTypes.func.isRequired,
    //getAllArticlesforWriter: PropTypes.func.isRequired,
    writer: PropTypes.object.isRequired,
    articles_by_writer: PropTypes.array 
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


export default connect(mapStateToProps, { })(Writer)