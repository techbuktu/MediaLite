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
        const articlesByWriterUI = this.props.articles_by_writer.map(article => {
            return (
                <li key={article.link}>
                    <Link to={`articles/${article.link}`}> {article.title} </Link>
                </li>
            )
        })
        if(this.props.writer.user){
            const {about, user} = this.props.writer;
            return (
                <div>
                   <h4> {user.firstName} {user.lastName} </h4>
                   <p>
                       {about}
                   </p>
                   <h5> {user.firstName} {user.lastName}'s Articles:</h5>
                   <ul>
                        {articlesByWriterUI}
                   </ul>
                </div>
            )
        }
        else {
            return ('Loading...writer... and his/her penmanly entourage!')
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
    errorMessage: state.writers.errorMessage,
    articles_by_writer: state.articles.article_list
});


export default connect(mapStateToProps, { getWriter })(Writer)