import React, { Component } from 'react';
import Writer from './Writer';

class Editor extends Component {
    componentDidMount(){
        this.getWritersByEditor();
        
    }
    render() {
        return (
            <div>
                <h5> {this.props.editor.full_name} </h5>
            </div>
        )
    }

    getWritersByEditor(){

    }
}

export default Editor;