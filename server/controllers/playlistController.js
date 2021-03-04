const playlistController = {};

const url = 'https://api.spotify.com/v1/users/rachyl6787/playlists'

playlistController.setCookie = (req, res, next) => {
    res.cookie('verified', 'true', { maxAge: 60 * 5 * 1000 });
    return next();
};

// playlistController.createPlaylist = (req, res, next) => {
//    // console.log('body: ', req.body.name);
//     const newPlaylist = {
//         "name": "Test Playlist",
//         "description": "New playlist: IT WORKED",
//         "public": true,
//     }
//     fetch(url, {
//         method: 'POST',
//         headers: { 'Content-type': 'application/json' },
//         body: JSON.stringify(newPlaylist)
//     })
//     .then();

//     return next();

// };


module.exports = playlistController;