import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { apiToken, BASE_API } from "../api";

const useCreateMeeting = () => {
  const [meetingId, setMeetingId] = useState(null);

  const post = useCallback(async () => {

    if(meetingId !== null){
      return;
    }

    try {
      const response = await axios.request({
        method: "POST",
        url: BASE_API.CREATE_ROOM,
        headers: {
          authorization: apiToken,
          "Content-Type": "application/json",
        },
      });

      setMeetingId(response.data.roomId);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { meetingId, setMeetingId, post };
};

export default useCreateMeeting;
