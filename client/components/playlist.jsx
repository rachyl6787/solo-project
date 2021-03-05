import React, { useState, useEffect } from 'react';

export default function Playlist() {
    const [formData, setFormData] = useState({
        playlistName: '',
        bpm: '',
        genre: '',
    });

    const [token, setToken] = useState('');
    const [success, setSuccess] = useState('');
    const clientId = process.env.CLIENT_ID;
    const secret = process.env.SECRET;
    const redirect_uri = 'http://localhost:3000/callback';

    useEffect(() => {

        if (token) return;
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const payload = {
            grant_type: "authorization_code",
            code,
            redirect_uri,
        }

        let formBody = [];
        for (let property in payload) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(payload[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const clientCreds = window.btoa(`${clientId}:${secret}`);
        const response = fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Authorization': `Basic ${clientCreds}`,
            },
            body: formBody,
        })
            .then(data => data.json())
            .then(json => {
                setToken(json['access_token']);
            })
    }, []);

    const handleSubmit = () => {

        const newPlaylist = {
            "name": formData.playlistName,
            "description": "New playlist: LIVE DEMO",
            "public": true,
        }

       fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(data => data.json())
        .then(json => {
            const userId = json['id'];
            fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(newPlaylist)
            })
        })
        .then(setSuccess('Your playlist has been created!'))
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        };

        setFormData(newFormData);
    }

    return (
        <div className="Playlist">
            <h2>How hard do you want to workout?</h2>
            <p className="Playlist_text">Indicate how fast you want to work out, and we'll create a playlist to fit your pace!</p>
            <form className="Playlist_form" onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                <input className="btn" onChange={handleChange} name="playlistName" type="text" placeholder="name of your playlist" value={formData.playlistName} />
                <input className="btn" onChange={handleChange} name="bpm" type="text" placeholder="beats per minute" value={formData.bpm} />
                <input className="btn" onChange={handleChange} name="genre" type="text" placeholder="genre" value={formData.genre} />
                <input className="button" type='submit' value="Create Playlist" />
            </form>
            <p className="Success">{success}</p>
        </div>
    );
}

