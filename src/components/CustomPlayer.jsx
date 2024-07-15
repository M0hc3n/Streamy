import { Tag } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const CustomPlayer = ({
    displayName, 
    videoStream
}) => {
  return (
    <>
      <div className="absolute top-[10px] left-[10px]">
        <Tag
          size={"md"}
          key={"md"}
          borderRadius="full"
          variant="solid"
          colorScheme="green"
        >
          {" "}
          {displayName}{" "}
        </Tag>
      </div>
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
    </>
  );
};

export default CustomPlayer;
