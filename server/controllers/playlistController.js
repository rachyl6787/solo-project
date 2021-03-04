const playlistController = {};

playlistController.setCookie = (req, res, next) => {
    res.cookie('verified', 'true', { maxAge: 60 * 5 * 1000 });
    return next();
};


module.exports = playlistController;