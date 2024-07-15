import { Button } from "@chakra-ui/react";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Hand from "../assets/Hand";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const CallToJoinScreen = ({ onClick, meetingId }) => {
  return (
    <section className="w-full h-screen bg-black flex items-center justify-center gap-[20px]  flex-col">
      <Hand />

      <h3 className="text-xl font-bold text-white">Ready to Join the meet ?</h3>

      <Button
        onClick={() => {
          navigator.clipboard.writeText(meetingId);
        }}
        leftIcon={<FontAwesomeIcon icon={faCopy} />}
      >
        Click to Copy the meeting id
      </Button>

      <Button
        onClick={onClick}
        leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}
      >
        Head to The Meeting Room !
      </Button>
    </section>
  );
};

export default CallToJoinScreen;
