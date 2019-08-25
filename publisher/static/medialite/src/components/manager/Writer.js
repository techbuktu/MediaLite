import React, { Component } from 'react';

class Writer extends Component {
    componentDidMount(){
        
    }
    
    render() {
        return (
            <div>
                <h5> { this.props.writer.full_name} </h5>
            </div>
        )
    }
}

export default Writer;