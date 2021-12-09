import "./App.css";
import { useEffect, useState } from "react";
import { baseUrl } from "./config";
import AudioList from "./components/AudioList";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [audioList, setAudioList] = useState([]);
  const [trackIndex, setTrackIndex] = useState(-1);

  const onTrackSelect = (index) => {
    setTrackIndex(index);
  };

  useEffect(() => {
    fetch(`${baseUrl}/song/trending`)
      .then((res) => res.json())
      .then((jsonResp) => {
        console.log({ jsonResp });
        setAudioList(jsonResp);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return (
    <div className="App m-20">
      <Header />

      <AudioList audioList={audioList} onTrackSelect={onTrackSelect} />
      <Drawer trackIndex={trackIndex} audioList={audioList} />
    </div>
  );
}

export default App;
