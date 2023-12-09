import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike, AiFillDislike, AiOutlineDislike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideo";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px) bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
            />
          </div>

          <div className="text-white">
            <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
              {video?.title}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={video?.author?.avatar[0]?.url}
                  alt={video?.author?.title}
                  className="rounded-full h-[45px] w-[45px]"
                />
                <div className="ml-2 text-gray-200">
                  <div className="flex items-center">
                    <div className="font-bold mr-2">{video?.author?.title}</div>
                    <div>
                      {video?.author?.badges[0]?.text === "Verified" && (
                        <BsFillCheckCircleFill />
                      )}
                    </div>
                  </div>
                  <div>{video?.author?.stats?.subscribersText}</div>
                </div>
              </div>
              <div className="flex gap-3 bg-slate-800 py-2 px-3 rounded-full">
                <button className="flex items-center gap-2 pr-3 border-r border-gray-600">
                  <AiOutlineLike className="h-[22px] w-[22px]" />
                  <span>{abbreviateNumber(video?.stats?.likes)}</span>
                </button>
                <button>
                  <AiOutlineDislike className="h-[22px] w-[22px]" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-white bg-slate-900">
            <div className="font-semibold">
              {`${abbreviateNumber(video?.stats?.views)} Views`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
