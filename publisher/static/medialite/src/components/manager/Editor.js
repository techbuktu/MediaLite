import React, { Component } from 'react';
import Writer from './Writer';
import EditorApi from '../../api/EditorApi';

class Editor extends Component {
    componentDidMount(){
        const { match: {params}} = this.props;
        console.log(this.params.editorLink);
        //console.log(this.match);
        this.getWritersByEditor();
        
    }
    render() {
        return (
            <div>
                <h5> {this.props.editor.full_name} </h5>

                I am editor 1
            </div>
        )
    }

    getWritersByEditor(){

    }
}

export default Editor;