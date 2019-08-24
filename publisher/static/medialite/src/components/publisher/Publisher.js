import React, { Component } from 'react';
import ArticleApi from '../../api/ArticleApi';
import EditorApi from '../../api/EditorApi';
import WriterApi from '../../api/WriterApi'
import PropTypes from 'prop-types';

class Publisher extends Component {
    componentDidMount(){
        this.getArticles();
        this.getWriters();
        this.getEditors();
    };

    state = {
        latest_articles : [],
        writers : [],
        editors: []

    };

    render() {
        return (
            <div>
                <p> 
                    Publisher home.
                </p>
            </div>
        )
    }

    getArticles(){
        ArticleApi.getAllArticles();
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

//PropTypes for the Publisher component
Publisher.propTypes = {
    //user: 
    
}

export default  Publisher;