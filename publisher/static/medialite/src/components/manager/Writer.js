import React, { Component } from 'react';

class Writer extends Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){
        const { match: {params}} = this.props;
        
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