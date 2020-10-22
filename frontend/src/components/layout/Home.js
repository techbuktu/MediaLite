import React, { Component } from 'react';
//import react-router-dom components
import { Redirect, Link } from 'react-router-dom'; 

import PropTypes from 'prop-types';

const Home = () => {
        return (
            <div>
                <p>
                    To see a list of the articles we currently have on our platform, please go to the <Link to={`/articles`}>Articles section</Link>.
                </p>
                <p>
                    For our awesome roster of editors and writers, please, see the <Link to={'/manager'}>Newsroom</Link> section.
                </p>
                <p>
                    And, if you are new here, please, take a moment to <Link to={`/register`}>register for a new account</Link>.
                </p>
            </div>
        )
};

Home.propTypes ={
    //add props and action creators here.
};


export default Home;
