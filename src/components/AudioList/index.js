import "./style.css";
import { useEffect, useState } from "react";
import { baseUrl } from "../../config";

const AudioList = (props) => {
  const [audioList, setAudioList] = useState([]);
  console.log(audioList, "audio-ls");
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
    <div className="audio-ls m-20">
      <ul>
        {audioList.length ? (
          audioList.map((item, index) => (
            <li key={index} className="audio-ls-container">
              <div className="audio-ls-item flex">
                <div className="audio-img">
                  <img src={`${item.cover_image_path}`} alt="" />
                </div>
                <div className="audio-info">
                  {/* <p>{item.id}</p> */}
                  <p>{item.name}</p>
                </div>
                <div className="like-btn flex justify-sb">
                  <button>Like</button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "16px" }}>Loading......</p>
        )}

        <li className="audio-ls-container">
          <div className="audio-ls-item flex">
            <div className="audio-img ">
              <img src="https://picsum.photos/id/237/200/300" alt="" />
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
