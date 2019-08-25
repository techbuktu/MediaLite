import React, { Component } from 'react';
import Writer from './Writer';

class Editor extends Component {
    componentDidMount(){
        this.getWritersByEditor();
        
    }
    render() {
        return (
            <div>
                {Editor.full_name}
            </div>
        )
    }

    getWritersByEditor(){

    }
}

export default Editor;