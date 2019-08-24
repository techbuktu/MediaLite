import React, { Component } from 'react';
import ArticleApi from '../api/ArticleApi';
import CommentApi from '../api/CommentApi';
import WriterApi from '../api/WriterApi';
import EditorApi from '../api/EditorApi';

class Home extends Component {
    state = {
        user : { },
        articles : [],
        writers : []
    }

    componentDidMount(){
        this.getArticles();
        this.getWriters();
    };

    render() {
        return (
            <div>
            <p>
                Home component
            </p>
            </div>
        )
    }

    getArticles(){
        ArticleApi.getAllArticles()
            .then(res => {
                this.setState({
                    articles : res
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
                    writers: res
                })
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log("WriterApi.getAllWriters() ran...");
            })

    }
}

export default Home;
