import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'

function Header(props) {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="logo"  className="header__logo" />
            </Link>
        </header>
    );
}

export default Header;