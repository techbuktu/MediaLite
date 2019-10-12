import React, { Component } from 'react';
//import action creators
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ManagerHome extends Component {
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
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


export default connect(mapStateToProps, { })(ManagerHome);