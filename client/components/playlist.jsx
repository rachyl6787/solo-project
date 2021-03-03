import React, { Component } from 'react';

export default function Playlist() {
    return (
        <div>
            <h2>How hard do you want to workout?</h2>
            <p>
                Indicate how fast you want to work out, and we'll create a playlist to fit your pace!
                <form id='playlist' method="POST" action='/create'>
                    <input name="Beats Per Minute" type="text" placeholder="bpm"></input>
                    <input name="Genre" type="text" placeholder="genre"></input>
                    <input type='submit' value="Create Playlist" />
                </form>
            </p>
        </div>
    );
}