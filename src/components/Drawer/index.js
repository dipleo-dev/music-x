import "./style.css";
import { closeIcon, playGreyIcon, pauseBlackIcon } from "../../assets";
import { useState } from "react";

const Drawer = (props) => {
  const [slideUp, setSlideUp] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className={`drawer ${slideUp ? "active" : " "}`}>
      <div className="slide-up-btn" onClick={() => setSlideUp(!slideUp)}></div>
      <div className="d-visilibity"></div>
      <div className="mini-player flex justify-sb align-center mtb-10">
        <div className="flex align-center">
          <div className="artist-cover-img">
            <img src="#" alt="" />
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
    </div>
  );
};
export default Drawer;
