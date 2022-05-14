import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./data";

function App() {
  const audioRef = useRef(null);

  const [ songs, setSongs ] = useState(data());
  const [ currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const updateTimeHandler = (e) =>{
    const current = e.target.currentTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent * 100 ) / roundedDuration);
    

    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage});
  }

  const songEndHandler = async () =>{
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  }
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong} />
      <Player 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
          onTimeUpdate={updateTimeHandler} 
          onLoadedMetadata={updateTimeHandler} 
          ref={audioRef} src={currentSong.audio}
          onEnded={songEndHandler}
        ></audio>
    </div>
  );
}

export default App;
