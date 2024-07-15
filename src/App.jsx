import { useContext, useState } from "react";
import useCreateMeeting from "./hooks/useCreateMeeting";
import { MeetingConsumer, MeetingProvider } from "@videosdk.live/react-sdk";
import { apiToken } from "./api";
import JoinScreen from "./views/JoinScreen";
import Container from "./views/Container";
import { UserContext } from "./context/UserInfo";

const App = () => {
  const { meetingId, setMeetingId, post } = useCreateMeeting();
  const [mode, setMode] = useState("CONFERENCE");

  const onMeetingLeft = () => setMeetingId(null);

  const { user } = useContext(UserContext);

  const join = async (givenMeetingId) => {
    if (!givenMeetingId) {
      // user is hosting his own stream
      await post();
    } else {
      // user is joining (either as host or viewer)
      setMeetingId(givenMeetingId);
    }
  };

  const hostAStream = () => {
    setMode("CONFERENCE");

    join();
  };

  const joinAsAHost = (givenMeetingId) => {
    setMode("CONFERENCE");

    join(givenMeetingId);
  };

  const joinAsAViewer = (givenMeetingId) => {
    setMode("VIEWER");

    join(givenMeetingId);
  };

  return meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: user.displayName,
        mode,
      }}
      token={apiToken}
    >
      <MeetingConsumer>
        {() => (
          <Container onMeetingLeft={onMeetingLeft} meetingId={meetingId} />
        )}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen
      hostAStream={hostAStream}
      joinAsAHost={joinAsAHost}
      joinAsAViewer={joinAsAViewer}
      meetingId={meetingId}
      setMeetingId={setMeetingId}
    />
  );
};

export default App;
