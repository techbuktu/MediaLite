import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const headerStyle = {
        
    }

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


//export Header;