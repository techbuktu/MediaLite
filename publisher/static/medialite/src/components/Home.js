import React, { Component } from 'react'

class Home extends Component {
    state = {
        user = {},
        articles = [],
        writers = []
    }
    
    render() {
        return (
            <div>
            <p>
                Home component
            </p>
            </div>
        )
    }
}

export default Home;
