import React from 'react';
import logo from '../../assets/img/logo.png'
import './Header.css'
import Button from '../Button'

function Header(){
    return(
        <nav className="Menu">
            <a href="/">
            <img src={logo} alt="Lo-fi Playlist"  className="Logo"/>
            </a>
            <Button className="ButtonLink" href="/">
                New Vídeo
            </Button>
        </nav>
    );
}

export default Header;