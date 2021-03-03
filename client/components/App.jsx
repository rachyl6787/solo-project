import { element } from 'prop-types';
import React, { Component } from 'react';
import Playlist from './playlist.jsx';
import logo from '../assets/spotify.jpg';








export default function App() {
    return (
        <div>
            <h1>Login with Spotify:</h1>
            <form id='spotify' method="GET" action='/login'>
                <input
                  type='image'
                  id='logo'
                  src={logo} />
            </form>
        </div>
    );
}
