import React, { Component } from 'react'
import PropTypes from 'prop-types';
import EditorApi from '../../api/EditorApi';
import Editor from './Editor';

class EditorList extends Component {

    state = {
        editors: [],
        editor_api_error_msg : ""
    }

    componentDidMount(){
        this.getEditors();
    }

    render() {
        return this.props.editors.map((editor)=>(
            <Editor key={editor.link} editor={editor} />
        ))
    }

    getEditors(){
        EditorApi.getAllEditors()
            .then(response => {
                this.setState({
                    editors: response.data
                })
                console.log(this.state.editors);
            })
            .catch(err => {
                this.setState({
                    editor_api_error_msg: err
                })
            })
            .finally(() => {})
    }

}

EditorList.propTypes = {
    //editor: PropTypes.editors.array.isRequired
}

export default  EditorList;