import React, { Component } from 'react'

class Publisher extends Component {
    componentDidMount(){
        this.getArticles();
    };

    state = {
        latest_articles : []

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

    };
}

export default  Publisher;