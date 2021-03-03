const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const playlist = require('./controllers/playlistController.js');
const id = '1bf11469ed864c2e9138a3cfa4c05a72';
const redirect_uri = 'http://localhost:3000/callback'

app.use(cookieParser());
app.use('/build', express.static(path.join(__dirname, '../build')));


app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.get('/login', (req, res) => {
    var scopes = 'user-read-private user-read-email playlist-modify-public';
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });

app.get('/callback', playlist.setCookie, (req, res) => {
    res.locals.loggedIn = true;
    return res.status(200).sendFile(path.join(__dirname, '../loggedin.html'));
})    


app.listen(3000);