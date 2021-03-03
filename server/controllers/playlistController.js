const express = require('express');
const cookieParser = require('cookie-parser');


const playlistController = {};

playlistController.setCookie = (req, res, next) => {
    res.cookie('verified', 'true', {expire: (30 * 1000) + Date.now()});
    return next();
};

// createPlaylist = (req, res) => {
  
// };


module.exports = playlistController;