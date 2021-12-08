import { PrevIcon, NextIcon, PlayIcon, pauseBlackIcon } from "../../assets";

const AudioPlayer = ({ name, cover_image_path, isPlaying }) => {
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
        <input type="range" min={"0"} max={"100"} />
      </div>
      <div className="audio-controls flex justify-sb">
        <button className="prev-btn">
          <img src={PrevIcon} alt="prev" />
        </button>
        <button
          // onClick={() => setIsPlaying(!isPlaying)}
          className="play-pause-btn"
        >
          {isPlaying ? (
            <img src={pauseBlackIcon} alt="pause" />
          ) : (
            <img src={PlayIcon} alt="play" />
          )}
        </button>
        <button className="next-btn">
          <img src={NextIcon} alt="next" />
        </button>
      </div>
    </div>
  );
};
export default AudioPlayer;
