import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Writer from './Writer';
import EditorApi from '../../api/EditorApi';


class Editor extends Component {
   constructor(props){
       super(props);
       console.log(this.props);
   }

    componentDidMount(){
        //const { match: {params}} = this.props;
        console.log("this.props.params object: " + this.props.params);
        //console.log(this.params.editorLink);
        //console.log(this.match);
        this.getWritersByEditor();
        
    }
    render() {
        
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

    getWritersByEditor(){

    }
}

Editor.propTypes = {
    editor: PropTypes.object.isRequired

}

export default Editor;