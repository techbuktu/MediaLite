import React, { useState, useContext } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewArticle } from '../../contextState/actions/articleActions';
import PropTypes from 'prop-types';
import { AppContext } from '../../contextState';


const NewArticle = () => {
    const {articleState, articleDispatch} = useContext(AppContext);

    //placeholder for writerState.writer obj until auth is fully-implemented
    const writer = {
        "_id":"5d93e3292327c36458f6de71",
        "user":{
            "isActive":true,
            "_id":"5d910d6e469e314c83fa4ed1",
            "firstName":"Alpha",
            "lastName":"Jalloh",
            "email":"techlite@jalloh.com",
            "joinDate":"2019-09-29T20:00:46.883Z"
        },
        "editor":
            {"_id":"5d93d9964a4a775ae07c3b58",
                "user":"5d910f646b3fcb4e13ac3545",
                "about":"I am the Editor-in-Chief of 'TechLite'.",
                "date":"2019-10-01T22:56:22.851Z","__v":"0"
            },
            "about":"I write for the TechLite.",
            "date":"2019-10-01T23:37:13.472Z"
    }
    
    let newArticleObj = {
        writer: writer
    };



    function onChange(e){
        //process form change
        newArticleObj[e.target.name] = e.target.value;
        console.log(newArticleObj); //For debugging only!
        
    };

    function onSubmit(e){
        e.preventDefault();
        let newArticleJson = JSON.stringify(newArticleObj);
        createNewArticle(newArticleJson)(articleDispatch);
    };

    if(articleState.article.title){
        return(
            <div>
                <h3>
                    Congrats! You have published a new article.
                </h3>
                <p>
                    See the new article: <Link to={`/articles/${articleState.article.link}`}> {articleState.article.title} </Link>
                </p>

            </div>
        )
    }else {
        return (
            <div>
                <h5>
                    Submit a New Article for Publication
                </h5>
                <form onSubmit={onSubmit}>
                    <div className="formContainer">
                        
                        <p>
                            <label> Title</label>
                            <input type="text" defaultValue="" onChange={onChange} name="title" />
                        </p>
                        <p>
                            <textarea defaultValue="" onChange={onChange} rows="13" cols="30" name="body" />
                        </p>
                        <p>
                            <label> Publish? </label>
                            <input type="checkbox" defaultValue={false} name="publish" onChange={onChange} />
                        </p>
                        <input type="submit" value="Publish Article"/>
                    </div>
                </form>
            </div>
        )
    }
}


NewArticle.propTypes ={
    //add props and action creators here.
    createNewArticle: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};



export default NewArticle;