import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { getAllEditors } from '../../dataStore/actions/editorActions';
import { getAllWriters } from '../../dataStore/actions/writerActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ManagerHome extends Component {

    componentDidMount(){
        this.props.getAllEditors();
        this.props.getAllWriters();
    };

    render() {
        return (
            <div>
                List of and links to Editors and Writers individual pages.
                Needs data: editor_list, writer_list
            </div>
        )
    }
}


ManagerHome.propTypes ={
    //add props and action creators here.
    editor_list: PropTypes.array.isRequired,
    writer_list: PropTypes.array.isRequired,
    getAllEditors: PropTypes.func.isRequired,
    getAllWriters: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    editor_list: state.editors.editor_list,
    writer_list: state.writers.writer_list
});


export default connect(mapStateToProps, { getAllEditors, getAllWriters })(ManagerHome);