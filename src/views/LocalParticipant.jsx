import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";

import noCamView from "../assets/no cam view.png";
import CustomPlayer from "../components/CustomPlayer";

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

  return (
    <div className="w-full">
      <audio ref={MicRef} autoPlay muted={isLocal} />
      {webcamOn ? (
        <div className="relative w-[80%] lg:w-[50%] mx-auto bg-[#11131A] rounded-xl overflow-hidden border-[4px] border-blue-700 ">
          <CustomPlayer videoStream={videoStream} displayName={displayName} />
        </div>
      ) : (
        <div className="relative w-[50%] mx-auto bg-[#11131A] rounded-xl overflow-hidden border-[4px] border-blue-700 ">
          <img src={noCamView} alt="" />
        </div>
      )}
    </div>
  );
};

export default LocalParticipant;
