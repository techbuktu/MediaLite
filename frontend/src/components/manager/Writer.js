import React, { Component } from 'react';
//import action creators
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Writer extends Component {
    render() {
        return (
            <div>
                Details about a Writer.
                Data needed: writer
            </div>
        )
    }
}


Writer.propTypes ={
    //add props and action creators here.
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


//after mapStateToProps: export default connect(mapStateToProps, {[action_creators,]})(componentName)

export default Writer;