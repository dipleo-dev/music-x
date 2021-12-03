import "./style.css";

const AudioList = (props) => {
  return (
    <div className="audio-ls m-20">
      <ul>
        <li className="audio-ls-container">
          <div className="audio-ls-item flex">
            <div className="audio-img">
              <img src="#" alt="" />
            </div>
            <div className="audio-info">
              <p>Song Title 1</p>
            </div>
            <div className="like-btn flex justify-sb">
              <button>Like</button>
            </div>
          </div>
        </li>
        <li className="audio-ls-container">
          <div className="audio-ls-item flex">
            <div className="audio-img ">
              <img src="#" alt="" />
            </div>
            <div className="audio-info">
              <p>Song Title 2</p>
            </div>
            <div className="like-btn flex justify-sb">
              <button>Like</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default AudioList;
