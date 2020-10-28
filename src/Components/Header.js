import React from 'react'
import logo from '../logo.svg';
import './Header.scss'

const Header = () => {
    return (
        <header className="wrapper" >
            <img src={logo} alt="Angel Berlanga's blog logo"/>
        </header>
    )
}

export default Header