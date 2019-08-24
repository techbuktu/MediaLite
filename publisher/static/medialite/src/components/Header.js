import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style = { headerStyle }>
            <h3>
                MediaLite
            </h3>
            <Link to="/"> Home </Link>
            <Link to="/publisher"> Publisher </Link>
        </header>
    )

    
}

const headerStyle = {
        
};


export default Header;