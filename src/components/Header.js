import React from 'react';
import './styles/Header.css'
import profileIMG from './styles/media/profile-image.png'

function Header() {
    return (
        <header>
            <img src={profileIMG} alt="Profile icon" />
            <h1>Mensajes Guardados</h1>
        </header>
    );
}

export { Header };