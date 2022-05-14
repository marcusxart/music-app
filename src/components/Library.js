import React from 'react';
import LibrarySongs from './LibrarySongs';

const library = ({ songs, setCurrentSong, audioRef , isPlaying, setSongs, libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
        <h2>Library</h2>
        <div className="library-songs">
            {songs.map((song)=>(
                <LibrarySongs 
                  song={song} 
                  songs={songs}
                  setSongs={setSongs}
                  setCurrentSong={setCurrentSong}
                  key={song.id}
                  audioRef={audioRef}
                  isPlaying={isPlaying}
                />
            ))}
        </div>
    </div>
  )
}

export default library