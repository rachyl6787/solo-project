const playlistController = {};

const url = 'https://api.spotify.com/v1/users/rachyl6787/playlists'

playlistController.setCookie = (req, res, next) => {
    res.cookie('verified', 'true', { maxAge: 60 * 5 * 1000 });
    return next();
};


module.exports = playlistController;