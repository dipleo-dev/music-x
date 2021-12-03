import "./style.css";
import {
  closeIcon,
  playGreyIcon,
  pauseBlackIcon,
  PrevIcon,
  NextIcon,
  PlayIcon,
} from "../../assets";
import { useState } from "react";

const Drawer = (props) => {
  const [slideUp, setSlideUp] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`drawer ${slideUp ? "active" : " "}`}>
      <div className="slide-up-btn" onClick={() => setSlideUp(!slideUp)}></div>
      <div className="d-visilibity"></div>
      {slideUp && (
        <div className="audio-player-lg">
          <div className="audio-img-lg">
            <img src="https://picsum.photos/200/300" alt="img" />
          </div>

          <div className="audio-info flex">
            <h3>Song Title 1</h3>
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
              onClick={() => setIsPlaying(!isPlaying)}
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
      )}
      {!slideUp && (
        <>
          <div className="mini-player flex justify-sb align-center mtb-10">
            <div className="flex align-center">
              <div className="audio-img">
                <img src="https://picsum.photos/200/300" alt="img" />
              </div>
              <div className="mini-player-info mlr-10">
                <p>Song title</p>
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
              <button>
                <img src={closeIcon} alt="close" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Drawer;
