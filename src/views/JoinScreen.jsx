import { useState } from "react";

const JoinScreen = ({ hostAStream, joinAsAHost, joinAsAViewer }) => {
  const [meetingId, setMeetingId] = useState("");

  return (
    <div className="py-[20px] px-[30px] flex flex-col gap-[30px] lg:px-[50px]">
      <h1 className="text-3xl font-bold mb-5 ">
        Welcome to Streami, Hop in to an existing stream or create your own !{" "}
      </h1>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_code"
          id="floating_code"
          className="block py-3 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={meetingId}
          onChange={(e) => setMeetingId(e.target.value)}
        />
        <label
          htmlFor="floating_code"
          className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Enter Code
        </label>
      </div>

      <div className="flex justify-between gap-[20px] items-center ">
        <button
          onClick={(e) => {
            e.preventDefault();
            joinAsAHost(meetingId);
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Join as a Host
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            joinAsAViewer(meetingId);
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Join as a Viewer
        </button>
      </div>

      <span className="text-xl font-bold ">OR</span>

      <button
        onClick={(e) => {
          e.preventDefault();
          hostAStream();
        }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Host a Stream
      </button>
    </div>
  );
};

export default JoinScreen;
