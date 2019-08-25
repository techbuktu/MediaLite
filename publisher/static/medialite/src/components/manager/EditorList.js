import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Editor from './Editor';

class EditorList extends Component {

    state = {
        editors: []
    }

    render() {
        return this.props.editors.map((editor)=>(
            <Editor key={editor.link} editor={editor} />
        ))
    }

}

EditorList.propTypes = {
    //editor: PropTypes.editors.array.isRequired
}

export default  EditorList;