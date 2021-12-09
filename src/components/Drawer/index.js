import "./style.css";
import { playGreyIcon, pauseBlackIcon } from "../../assets";
import { useState, useEffect, useRef } from "react";
import AudioPlayer from "./AudioPlayer";

const Drawer = ({ trackIndex, audioList }) => {
  const [slideUp, setSlideUp] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(trackIndex);
  const [trackProgress, setTrackProgress] = useState("");

  const {
    name = "",
    cover_image_path = "",
    music_file_path = "",
  } = currentTrackIndex !== -1 ? audioList[currentTrackIndex] : {};

  const audioSrc = `${music_file_path}`;
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);
  };

  const onChangeTrackProgress = (e) => {
    setTrackProgress(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  const nextTrack = () => {
    if (currentTrackIndex < audioList.length - 1) {
      setCurrentTrackIndex((prevIndex) => prevIndex + 1);
      setTrackProgress(0);
    } else {
      setCurrentTrackIndex(0);
    }
  };

  const prevTrack = () => {
    if (currentTrackIndex) {
      setCurrentTrackIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentTrackIndex(audioList.length - 1);
    }
  };
  useEffect(() => {
    console.log(audioSrc, "audiosrc");
    clearInterval(intervalRef.current);
    setCurrentTrackIndex(trackIndex);
  }, [trackIndex]);

  useEffect(() => {
    if (currentTrackIndex !== -1) {
      // if a music is already playing then we will stop it and assign currently selected one
      audioRef.current.pause();
      // new audio initialize
      audioRef.current = new Audio(audioSrc);
      //playing initialize audio
      audioRef.current.play();
      // set isPlaying true when music started playing
      setIsPlaying(true);
      // start progress of the audio
      startTimer();
    }
  }, [currentTrackIndex]);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
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
    <div
      className={`drawer ${currentTrackIndex !== -1 ? "_h-md" : "_h-sm"} ${
        slideUp ? "active" : " "
      }`}
    >
      <div
        className="slide-up-btn"
        onClick={() => {
          if (currentTrackIndex !== -1) {
            setSlideUp(!slideUp);
          }
        }}
      ></div>
      <div className="d-visilibity"></div>
      {slideUp && (
        <AudioPlayer
          name={name}
          cover_image_path={cover_image_path}
          isPlaying={isPlaying}
          duration={audioRef.current.duration}
          trackProgress={trackProgress}
          onChangeTrackProgress={onChangeTrackProgress}
          onPlayPause={() => setIsPlaying(!isPlaying)}
          nextTrack={nextTrack}
          prevTrack={prevTrack}
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
