import React, { Component } from 'react';
import ArticleApi from '../api/ArticleApi';
import CommentApi from '../api/CommentApi';
import WriterApi from '../api/WriterApi';
import EditorApi from '../api/EditorApi';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import sectional base components 
import Manager from './manager/Manager';
import Publisher from './publisher/Publisher';

class Home extends Component {
    state = {
        user : { },
        articles : [],
        writers : [],
        editors: []
    }

    componentDidMount(){
        this.getArticles();
        this.getWriters();
        this.getEditors();
    };

    render() {
        return (
                <React.Fragment>
                   <Publisher />
                   <Manager />
                </React.Fragment>
        )
    }

    getArticles(){
        ArticleApi.getAllArticles()
            .then(res => {
                this.setState({
                    articles : res.data
                });
                console.log(this.state.articles);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log("ArticleApi.getAllArticles() ran...");
            })

    };

    getWriters(){
        WriterApi.getAllWriters()
            .then(res => {
                this.setState({
                    writers: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log("WriterApi.getAllWriters() ran...");
            })
    }

    getEditors(){
        EditorApi.getAllEditors()
            .then(response => {
                this.setState({
                    editors: response.data
                })
            })
            .catch(err => {

            })
            .finally(() => {

            })
    }
}

export default Home;
