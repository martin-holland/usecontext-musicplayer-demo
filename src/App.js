import { useState } from 'react';
import './App.css';
import sinister from "./assets/sinister.mp3";
import stomp from "./assets/stomp.mp3";
import underwater from "./assets/underwater.mp3";
import { PlayerControls } from './components/PlayerControls';
import { TrackList } from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';



function App() {

  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Sinister Music ...",
        file: sinister
      },
      {
        name: "Stomp - Stomping!!!",
        file: stomp
      },
      {
        name: "Underwater .... bubbles",
        file: underwater
      },
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  })

  console.log("State: ", state)

  return (
    <MusicContext.Provider value={[state, setState]}>
    <div className="App">
      <TrackList />
      <PlayerControls />
    </div>
    </MusicContext.Provider>
  );
}

export default App;
