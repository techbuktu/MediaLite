import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 
//import action creators
import { createNewWriter } from '../../dataStore/actions/writerActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class newWriter extends Component {
    constructor(){
        super();

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //placeholder 'editor' object until auth, etc. is implemented
        this.editor = {
            user: {
                firstName: 'Abraham',
                lastName: 'Lincoln',
                email: 'coding.abe@example.com',
                joinDate: "2019-10-16T20:07:12.805Z"
            },
            about: "I am Founder of The Millenial Times",
            date: "2019-10-17T04:09:54.606Z"
        };

        //placeholder this.props.user until auth is implemented
        this.user = {
            isActive:true, 
            firstName:"Alpha",
            lastName:"Jalloh",
            email:"techlite@jalloh.com"
        };
    }


    componentDidMount(){
        //
    };

    onChange(e){
        this.about = e.target.value;
        
    };

    onSubmit(e){
        e.preventDefault();

        let newWriterObj = {
            user: this.user,
            about: this.about,
            editor: this.editor,
        };
        const newWriterJson = JSON.stringify(newWriterObj)
        console.log(newWriterJson);
        this.props.createNewWriter(newWriterJson);
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h5> Use the Form Below to Add a New Staff Writer</h5>
                        <p>
                            <label> About </label>
                        </p>
                        <p>
                            <textarea 
                                name="about" 
                                defaultValue="" 
                                placeholder="Enter some details about this new Writer." 
                                cols="30" rows="7"
                                onChange={this.onChange} 
                            />
                        </p>
                    </div>
                    <button type="submit"> Add New Writer</button>
                </form>
            </div>
        )
    }
}


newWriter.propTypes ={
    //add props and action creators here.
    createNewWriter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    //add obj: state.<reducer_key>.obj_name; one for each component prop
});


export default connect(mapStateToProps, { createNewWriter })(newWriter)