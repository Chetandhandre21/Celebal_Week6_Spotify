import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const songs = [
  {
    title: 'Sample Song 1',
    artist: 'Artist A',
    src: '/songs/song1.mp3'
  },
  // You can add more songs here
];

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player">
      <h2>{songs[0].title}</h2>
      <p>{songs[0].artist}</p>
      <audio ref={audioRef} src={songs[0].src}></audio>
      <button onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}

export default MusicPlayer;
