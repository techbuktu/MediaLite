import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewEditor } from '../../dataStore/actions/editorActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class newEditor extends Component {

    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //placeholder this.props.user object until auth is implemented
        this.user = {
            firstName: 'Abraham',
            lastName: 'Lincoln',
            email: 'coding.abe@example.com',
            joinDate: "2019-10-16T20:07:12.805Z"
        }

    }
        

    componentDidMount(){
        
    };

    onChange(e){
        this.about = e.target.value;
        console.log(this.about);
    };

    onSubmit(e){
        e.preventDefault();
        let newEditorObj = {
            user: this.user,
            about: this.about
        }
        const newEditorJson = JSON.stringify(newEditorObj);
        this.props.createNewEditor(newEditorJson);
    }
    render() {
        return (
            <div>
                 <form onSubmit={this.onSubmit}>
                    <div className="formContainer">
                       <p>
                            <label> About </label>
                       </p>
                        <p>
                            <textarea 
                                name="about" 
                                defaultValue="" 
                                placeholder="Enter some bio info about this new Editor." 
                                cols="30" rows="7"
                                onChange={this.onChange} 
                            />
                        </p>
                    </div>
                    <button type="submit"> Add New Editor</button>
                 </form>
            </div>
        )
    }
}


newEditor.propTypes ={
    //add props and action creators here.
    createNewEditor: PropTypes.func,
    errorMessage: PropTypes.string
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
    errorMessage: state.editors.errorMessage
});


export default connect(mapStateToProps, { createNewEditor })(newEditor);
