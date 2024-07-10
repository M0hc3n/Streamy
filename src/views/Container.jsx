import { Constants, useMeeting } from "@videosdk.live/react-sdk";
import { useEffect, useRef, useState } from "react";
import Speaker from "./Speaker";
import Viewer from "./Viewer";

const Container = ({ onMeetingLeft, meetingId }) => {
  const [joined, setJoined] = useState(null);

  const { join } = useMeeting();
  const mMeeting = useMeeting({
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    onMeetingLeft: () => {
      onMeetingLeft();
    },
    onError: (e) => {
      alert(e.message);
    },
  });

  const mMeetingRef = useRef(mMeeting);

  if (mMeetingRef.current.localParticipant?.mode == "CONFERENCE") {
    mMeetingRef.current.localParticipant?.pin();
  }

  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  const joinMeet = () => {
    setJoined("JOINED");
    join();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold flex flex-col gap-[20px] ">
        {/* Meeting ID: {meetingId} */}
        {joined && joined == "JOINED" ? (
          mMeeting.localParticipant.mode === Constants.modes.CONFERENCE ? (
            <Speaker />
          ) : (
            <Viewer />
          )
        ) : joined && joined == "JOINING" ? (
          <p>Joining the meeting...</p>
        ) : (
          <button onClick={joinMeet}>Join</button>
        )}
      </h1>
    </div>
  );
};

export default Container;
