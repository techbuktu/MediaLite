import React, { Component } from 'react'

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

    };

    getWriters(){

    }
}

export default Home;
