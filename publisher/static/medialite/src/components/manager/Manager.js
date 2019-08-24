import React, { Component } from 'react';


class Manager extends Component {
    state = {
        writers : [ ],
        editors : [ ]
    }

    componentDidMount(){
        this.getEditors();
        this.getWriters();
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }

    getWriters(){

    }

    getEditors(){

    }
}

export default Manager;