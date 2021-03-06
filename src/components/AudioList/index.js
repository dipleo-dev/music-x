import "./style.css";

const AudioList = ({ audioList, onTrackSelect }) => {
  return (
    <div className="audio-ls m-20">
      <ul>
        {audioList.length ? (
          audioList.map((item, index) => (
            <li
              onClick={() => onTrackSelect(index)}
              key={index}
              className="audio-ls-container"
            >
              <div className="audio-ls-item flex">
                <div className="audio-img">
                  <img src={`${item.cover_image_path}`} alt="" />
                </div>
                <div className="audio-info">
                  {/* <p>{item.id}</p> */}
                  <p>{item.name}</p>
                </div>
                <button className="likeBtn" disabled>
                  <i className="fa fa-heart">
                    <p>{item.likes}</p>
                  </i>
                </button>
              </div>
            </li>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "16px" }}>Loading......</p>
        )}
      </ul>
    </div>
  );
};
export default AudioList;
