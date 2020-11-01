import React, { useContext, useEffect } from 'react';
//import react-router-dom components
import { Redirect, Link, useParams } from 'react-router-dom'; 
//import action creators
import { getWriter } from '../../contextState/actions/writerActions'; //getAllArticlesforWriter() too
import { getAllArticlesByWriter } from '../../contextState/actions/articleActions';
import PropTypes from 'prop-types';
import { AppContext } from '../../contextState';


const Writer =  () => {
    const {writerState, writerDispatch} = useContext(AppContext);
    const {articleState, articleDispatch} = useContext(AppContext);

    let { writerLink } = useParams();

    useEffect(() => {
        getWriter(writerLink)(writerDispatch);
        getAllArticlesByWriter(writerLink)(articleDispatch);

    }, [writerState])


    const articlesByWriterUI = articleState.article_list.map(article => {
        return (
            <li key={article.link}>
                <Link to={`/articles/${article.link}`}> {article.title} </Link>
            </li>
        )
    })
    if(writerState.writer.user){
        const {about, user} = writerState.writer;
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


Writer.propTypes ={
    //add props and action creators here.
    getWriter: PropTypes.func.isRequired,
    getAllArticlesByWriter: PropTypes.func.isRequired,
    writer: PropTypes.object.isRequired,
    articles_by_writer: PropTypes.array 
};



export default Writer;