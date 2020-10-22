import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getAllEditors } from '../../contextState/actions/editorActions';
import { getAllWriters } from '../../contextState/actions/writerActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ManagerHome extends Component {

    componentDidMount(){
        this.props.getAllEditors();
        this.props.getAllWriters();
    };

    render() {
        const editorsUI = this.props.editor_list.map(editor => {
            return (
                    <li key={editor._id}>
                        <Link to={`/editors/${editor._id}`}>
                            {editor.user.firstName} {editor.user.lastName}
                        </Link>
                    </li>
            )
        });

        const writersUI = this.props.writer_list.map(writer => {
            return (
                    <li key={writer._id}>
                        <Link to={`/writers/${writer._id}`}>
                            {writer.user.firstName} {writer.user.lastName}
                        </Link>
                    </li>
            )
        })
        
        return (
            <div>
                <h5>Editors</h5>
                <ul>
                    {editorsUI}
                </ul>
                <h5> Writers</h5>
               <ul>
                    {writersUI}
               </ul>
            </div>
        )
    }
}


ManagerHome.propTypes ={
    //add props and action creators here.
    editor_list: PropTypes.array.isRequired,
    writer_list: PropTypes.array,
    getAllEditors: PropTypes.func.isRequired,
    getAllWriters: PropTypes.func.isRequired,
    editorsErrorMessage: PropTypes.string,
    writersErrorMessage: PropTypes.string
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    editor_list: state.editors.editor_list,
    writer_list: state.writers.writer_list,
    editorsErrorMessage: state.editors.errorMessage,
    writersErrorMessage: state.writers.errorMessage
});


export default connect(mapStateToProps, { getAllEditors, getAllWriters })(ManagerHome);