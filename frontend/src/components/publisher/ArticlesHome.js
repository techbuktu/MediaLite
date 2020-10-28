import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../contextState';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
import { getAllArticles } from '../../contextState/actions/articleActions';
//import articleReducer, { initialArticleState } from '../../contextState/reducers/articleReducer';
//import action creators
import PropTypes from 'prop-types';


const ArticlesHome = () => {
    const { articleState, articleDispatch} = useContext(AppContext);

    console.log(articleState);

    useEffect(() => {
        getAllArticles();
        console.log(`state.article_list: ${articleState.article_list.length}`)
    }, [articleState.article_list])

    return(
            <div>

                {articleState.article_list.map(article => (
                    <p>
                        <Link to={`/articles/${article.link}`}>
                            {article.title}
                        </Link>
                    </p>
                ))}
                
            </div>
        )

}

ArticlesHome.propTypes ={
    //add props and action creators here.
    getAllArticles: PropTypes.func,
    article_list: PropTypes.array,
    errorMessage: PropTypes.string
};


export default ArticlesHome;