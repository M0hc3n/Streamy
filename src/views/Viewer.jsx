import { useMeeting } from "@videosdk.live/react-sdk";
import Hls from "hls.js";
import { useEffect, useRef } from "react";
import StreamEndedOrPausedViewer from "./StreamEndedOrPausedViewer";

const ViewerView = () => {
  // States to store downstream url and current HLS state
  const playerRef = useRef(null);
  //Getting the hlsUrls
  const { hlsUrls, hlsState } = useMeeting();

  //Playing the HLS stream when the playbackHlsUrl is present and it is playable
  useEffect(() => {
    if (hlsUrls.playbackHlsUrl && hlsState == "HLS_PLAYABLE") {
      if (Hls.isSupported()) {
        const hls = new Hls();

        let player = document.querySelector("#hlsPlayer");

        hls.loadSource(hlsUrls.playbackHlsUrl);
        hls.attachMedia(player);
      } else {
        if (typeof playerRef.current?.play === "function") {
          playerRef.current.src = hlsUrls.playbackHlsUrl;
          playerRef.current.play();
        }
      }
    }
  }, [hlsUrls, hlsState, playerRef.current]);

  return (
    <div>
      {/* Showing message if HLS is not started or is stopped by HOST */}
      {hlsState != "HLS_PLAYABLE" ? (
        <StreamEndedOrPausedViewer />
      ) : (
        hlsState == "HLS_PLAYABLE" && (
          <div className="relative w-[80%] flex justify-center items-center lg:h-screen lg:w-[50%] mx-auto bg-[#11131A] overflow-hidden ">
            <video
              className="max-h-[500px] m-auto border-[4px] border-blue-700 rounded-xl "
              ref={playerRef}
              id="hlsPlayer"
              autoPlay={true}
              controls
              style={{ width: "100%", height: "100%" }}
              playsInline
              muted={true}
              // playing
              onError={(err) => {
                console.log(err, "hls video error");
              }}
            ></video>
          </div>
        )
      )}
    </div>
  );
};

export default ViewerView;
