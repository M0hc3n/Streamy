import { Constants, useMeeting } from "@videosdk.live/react-sdk";
import { HLS_CONFIG } from "./data";
import { IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
  faPause,
  faPlay,
  faRightFromBracket,
  faVideo,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";

const isHlsPlaying = (state) => {
  return state === Constants.hlsEvents.HLS_STARTED;
};

const Controls = () => {
  const {
    leave,
    toggleMic,
    toggleWebcam,
    startHls,
    stopHls,
    hlsState,
    localMicOn,
    localWebcamOn,
  } = useMeeting();

  return (
    <div className="w-[80%] flex text-white justify-between items-center">
      <div className="flex gap-[15px]">
        <IconButton
          icon={<FontAwesomeIcon icon={faRightFromBracket} />}
          onClick={() => leave()}
          colorScheme="red"
          className="bg-red-500"
        />
        <IconButton
          icon={
            <FontAwesomeIcon
              icon={localMicOn ? faMicrophone : faMicrophoneSlash}
            />
          }
          onClick={() => toggleMic()}
          colorScheme={localMicOn ? "gray" : "red"}
        />
        <IconButton
          onClick={() => toggleWebcam()}
          icon={
            <FontAwesomeIcon icon={localWebcamOn ? faVideo : faVideoSlash} />
          }
          colorScheme={localWebcamOn ? "gray" : "red"}
        />
      </div>
      <IconButton
        icon={
          <FontAwesomeIcon icon={isHlsPlaying(hlsState) ? faPause : faPlay} />
        }
        colorScheme={isHlsPlaying(hlsState) ? "red" : "gray"}
        onClick={() =>
          isHlsPlaying(hlsState) ? startHls(HLS_CONFIG) : stopHls()
        }
      />
    </div>
  );
};

export default Controls;
