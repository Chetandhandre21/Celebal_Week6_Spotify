import React from 'react';
import MusicPlayer from './components/MusicPlayer';
import spotifyLogo from './assets/spotify-logo.svg'; // import logo

function App() {
  return (
    <div className="app">
      <img src={spotifyLogo} alt="Spotify Logo" className="logo" />
      <h1>Simple Spotify Clone</h1>
      <MusicPlayer />
    </div>
  );
}

export default App;
