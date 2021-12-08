import "./style.css";
import { playGreyIcon, pauseBlackIcon } from "../../assets";
import { useState, useEffect, useRef } from "react";
import AudioPlayer from "./AudioPlayer";

const Drawer = ({ trackIndex, audioList }) => {
  const [slideUp, setSlideUp] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(trackIndex);

  const {
    name = "",
    cover_image_path = "",
    music_file_path = "",
  } = trackIndex !== -1 ? audioList[trackIndex] : {};

  const audioSrc = `${music_file_path}`;
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  console.log(audioSrc, "audiosrc");

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);

    audioRef.current.play();

    setIsPlaying(true);

    setCurrentTrackIndex(trackIndex);
  }, [trackIndex, audioSrc]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  console.log(
    currentTrackIndex,
    music_file_path,
    cover_image_path,
    name,
    "cr track Index"
  );
  console.log(audioList, "d-ad-l");

  return (
    <div className={`drawer ${slideUp ? "active" : " "}`}>
      <div className="slide-up-btn" onClick={() => setSlideUp(!slideUp)}></div>
      <div className="d-visilibity"></div>
      {slideUp && (
        <AudioPlayer
          name={name}
          cover_image_path={cover_image_path}
          isPlaying={isPlaying}
        />
      )}
      {!slideUp && (
        <>
          {trackIndex !== -1 && (
            <div className="mini-player flex justify-sb align-center mtb-10">
              <div className="flex align-center">
                <div className="audio-img">
                  <img src={cover_image_path} alt="img" />
                </div>
                <div className="mini-player-info mlr-10">
                  <p>{name}</p>
                </div>
              </div>
              <div className="mini-player-control flex">
                <button onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? (
                    <img src={pauseBlackIcon} alt="pause" />
                  ) : (
                    <img src={playGreyIcon} alt="play" />
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Drawer;
