import { PrevIcon, NextIcon, PlayIcon, pauseBlackIcon } from "../../assets";
import { useState } from "react";

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
  id,
}) => {
  const currentProgress = (trackProgress / duration) * 100;
  const trackProgressStyling = `linear-gradient(to right, #9393ff ${currentProgress}%, #ffffff ${currentProgress}%)`;
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("id", id);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="audio-player-lg">
      <div className="audio-img-lg">
        <img src={cover_image_path} alt="img" />
      </div>

      <div className="audio-info flex">
        <h3>{name}</h3>
        <div className="like-btn flex justify-sb">
          <button
            className={`heart-icon ${liked ? "liked" : " "}`}
            onClick={handleLike}
          >
            <i class="fa fa-heart"></i>
          </button>
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
