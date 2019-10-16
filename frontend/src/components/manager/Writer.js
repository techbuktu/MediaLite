import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getWriter } from '../../dataStore/actions/writerActions'; //getAllArticlesforWriter() too
//import { getAllArticlesforWriter } from '../../dataStore/actions/articleActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Writer extends Component {
    componentDidMount(){
        let writerLink = this.props.match.params.writerLink;
        this.props.getWriter(writerLink);
        //getAllArticlesforWriter('123'); id from params.id
    };

    render() {
        if(this.props.writer.user){
            console.log(`this.props.writer: ${this.props.writer.user}`);
            const {about, user} = this.props.writer;
            return (
                <div>
                   <h4> {user.firstName} {user.lastName} </h4>
                   <p>
                       {about}
                   </p>
                </div>
            )
        }
        else {
            return ('Loading...')
        }
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
    writer: state.writers.writer,
    //articles_by_writer: state.articles.articles_by_writer
});


export default connect(mapStateToProps, { getWriter })(Writer)