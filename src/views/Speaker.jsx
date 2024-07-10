import { Constants, useMeeting } from "@videosdk.live/react-sdk";
import { useMemo } from "react";
import Controls from "../components/Controls";
import ParticipantView from "./ParticipantView";
import LocalParticipant from "./LocalParticipant";

const Speaker = () => {
  const { participants, hlsState } = useMeeting();

  const [speakers, local] = useMemo(() => {
    const speakerParticipants = [...participants.values()].filter(
      (participant) =>
        participant.mode === Constants.modes.CONFERENCE && !participant.local
    );

    const localSpeaker = [...participants.values()].filter(
      (participant) => participant.local
    )[0];

    return [speakerParticipants, localSpeaker];
  }, [participants]);

  return (
    <section className="w-full lg:h-screen bg-black py-[20px] px-[30px] flex flex-col ">
      <div className="w-full items-center flex flex-col gap-[10px] ">
        <LocalParticipant participant={local} />
        <Controls />
      </div>


      {/* {speakers.map((participant) => (
        <ParticipantView participantId={participant.id} key={participant.id} />
      ))} */}
    </section>
  );
};

export default Speaker;
