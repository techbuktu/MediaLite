import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Writer from './Writer';
import EditorApi from '../../api/EditorApi';


class Editor extends Component {
   constructor(props){
       super(props);
       //this.props = props;
       console.log(this.props);
       this.props = this.props;
   }

    componentDidMount(){
        console.log("from componentDidMount(): " + this.props);
        const { match: {params}} = this.props;
        //console.log("this.props.params object: " + this.props.params);
        //console.log(this.params.editorLink);
        console.log("this.props: " + this.props);
        this.getWritersByEditor(`${params.editorLink}`);
        
    }
    render() {
        console.log("from render(): " + this.props);
        
        return (
            <div>
                <h5> 
                    {this.props.editor.full_name} 
                </h5>
                <p>
                    I am editor 1
                </p>

            </div>
        )
    }

    getWritersByEditor(editor_link){

    }
}

Editor.propTypes = {
    editor: PropTypes.object.isRequired

}

export default Editor;