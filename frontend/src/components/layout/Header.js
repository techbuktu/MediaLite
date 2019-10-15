import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
    return (
        <div className="App-Nav">
            <h3>MediaLite: Media Publishing CMS</h3>
            <Link to={'/'}>Home </Link> |
            <Link to={'/register'}>Register</Link> |
            <Link to={'/login'}>LogIn</Link>
        </div>
    )
}

export default Header;