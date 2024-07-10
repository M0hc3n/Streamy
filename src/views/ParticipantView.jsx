import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";

const ParticipantView = ({ participantId }) => {
  const { displayName, webcamStream, micStream, webcamOn, micOn, isLocal } =
    useParticipant(participantId);
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
    <div>
      <p>
        Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
        {micOn ? "ON" : "OFF"}
      </p>
      <audio ref={MicRef} autoPlay muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          //
          playsinline // extremely crucial prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"300px"}
          width={"300px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
};

export default ParticipantView;
