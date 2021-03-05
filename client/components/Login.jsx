import React, { Component } from 'react';
import logo from '../assets/spotify.jpg';

export default function Login(props) {


    return (
        <div>
            <h2>Login with Spotify:</h2>
            <form id='spotify' method="GET" action='/login'>
                <input
                  type='image'
                  id='logo'
                  src={logo} />
            </form>
        </div>
    );
}