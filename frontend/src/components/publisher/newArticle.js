import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewArticle } from '../../dataStore/actions/articleActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class newArticle extends Component {
    constructor(){
        super();

        //placeholder for this.props.user until auth is implemented
        this.writer = {
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
        

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    componentDidMount(){
        //
    };

    onChange(e){
        //process form change
        
    };

    onSubmit(e){
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <h5>
                    SUbmit a New Article for Publication
                </h5>
                <form onSubmit={this.onSubmit}>
                    <div className="formContainer">
                        
                        <p>
                            <label> Title</label>
                            <input type="text" defaultValue="" onChange={this.onChange} name="title" />
                        </p>
                        <p>
                            <textarea defaultValue="" onChange={this.onChange} rows="13" cols="30" name="body" />
                        </p>
                        <input type="submit" value="Publish Article"/>
                    </div>
                </form>
            </div>
        )
    }
}


newArticle.propTypes ={
    //add props and action creators here.
    createNewArticle: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    errorMessage: state.articles.errorMessage
});


export default connect(mapStateToProps, { createNewArticle })(newArticle)