import { PrevIcon, NextIcon, PlayIcon, pauseBlackIcon } from "../../assets";

const AudioPlayer = ({
  name,
  cover_image_path,
  isPlaying,
  duration,
  trackProgress,
  onChangeTrackProgress,
  onPlayPause,
  prevTrack,
  nextTrack,
}) => {
  const currentProgress = (trackProgress / duration) * 100;
  const trackProgressStyling = `linear-gradient(to right, #9393ff ${currentProgress}%, #ffffff ${currentProgress}%)`;

  return (
    <div className="audio-player-lg">
      <div className="audio-img-lg">
        <img src={cover_image_path} alt="img" />
      </div>

      <div className="audio-info flex">
        <h3>{name}</h3>
        <div className="like-btn flex justify-sb">
          <button>Like</button>
        </div>
      </div>

      <div className="audio-player-progress">
        <input
          type="range"
          min={"0"}
          step={"1"}
          max={duration ? duration : 0}
          value={trackProgress}
          onChange={onChangeTrackProgress}
          style={{ background: trackProgressStyling }}
        />
      </div>
      <div className="audio-controls flex justify-sb">
        <button onClick={prevTrack} className="prev-btn">
          <img src={PrevIcon} alt="prev" />
        </button>
        <button onClick={onPlayPause} className="play-pause-btn">
          {isPlaying ? (
            <img src={pauseBlackIcon} alt="pause" />
          ) : (
            <img src={PlayIcon} alt="play" />
          )}
        </button>
        <button onClick={nextTrack} className="next-btn">
          <img src={NextIcon} alt="next" />
        </button>
      </div>
    </div>
  );
};
export default AudioPlayer;
