import Hand from "../assets/Hand";

const StreamEndedOrPausedViewer = ({ state }) => {
  return (
    <section className="w-full h-screen bg-black flex items-center justify-center gap-[20px]  flex-col">
      <Hand />

      <h3 className="text-xl font-bold text-white">
        Stream has been paused !{" "}
      </h3>
    </section>
  );
};

export default StreamEndedOrPausedViewer;
