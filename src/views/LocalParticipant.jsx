import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";

import classes from "../styles/local.module.css";

const LocalParticipant = ({ participant }) => {
  const { displayName, webcamStream, micStream, webcamOn, micOn, isLocal } =
    useParticipant(participant.id);
  const MicRef = useRef();

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const stream = new MediaStream();
      stream.addTrack(webcamStream.track);

      return stream;
    }
  }, [webcamOn, webcamStream]);

  useEffect(() => {
    if (MicRef.current) {
      if (micOn && micStream) {
        const stream = new MediaStream();
        stream.addTrack(micStream.track);

        MicRef.current.srcObject = stream;
        MicRef.current.play().catch((e) => console.log(e));
      } else {
        MicRef.current.srcObject = null;
      }
    }
  }, [micOn, micStream]);

  console.log(classes);
  return (
    <div className="w-full">
      {/* <p>
        Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
        {micOn ? "ON" : "OFF"}
      </p> */}
      <audio ref={MicRef} autoPlay muted={isLocal} />
      {webcamOn && (
        <div className=" w-[80%] mx-auto bg-[#11131A] rounded-xl overflow-hidden border-[4px] border-blue-700 ">
          <ReactPlayer
            playsinline // extremely crucial prop
            pip={false}
            light={false}
            controls={false}
            muted={true}
            playing={true}
            url={videoStream}
            height={"100%"}
            width={"100%"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LocalParticipant;
