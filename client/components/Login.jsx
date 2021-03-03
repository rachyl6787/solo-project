import React, { Component } from 'react';
import logo from '../assets/spotify.jpg';

export default function Login() {
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