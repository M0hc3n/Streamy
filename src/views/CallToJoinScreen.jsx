import { Button } from "@chakra-ui/react";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Hand from "../assets/Hand";

const CallToJoinScreen = ({ onClick, meetingId }) => {
  return (
    <section
      onClick={onClick}
      className="w-full h-screen bg-black flex items-center justify-center gap-[20px]  flex-col"
    >
      <Hand />

      <h3 className="text-xl font-bold text-white">Ready to Join the meet ?</h3>

      <Button leftIcon={<FontAwesomeIcon icon={faCopy} />}>
        Click to Share the meeting id: {meetingId}
      </Button>
    </section>
  );
};

export default CallToJoinScreen;
