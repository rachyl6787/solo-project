import React, { Component } from 'react';
import Login from './Login.jsx';
import Playlist from './Playlist.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (document.cookie.indexOf('verified=true') === -1) {
            return <div>
                <Login />
            </div>
        } else {
            return <div>
                <Playlist />
            </div>
        }
    }
}

export default App;
