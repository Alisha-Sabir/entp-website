import TrackComponent from "./TrackComponent";

const TrackSection = () => {
  const list = [
    "Real-Time Tracking Dashboard Users can see live status of every transaction",
    "Phases Covered Initiated → In Transit → Delivered",
    "Peace of Mind Transparency and reduced payment uncertainty",
  ];
  return (
    <>
      <TrackComponent
        heading="Track Payment Status"
        list={list}
        pattern={false}
      />
    </>
  );
};

export default TrackSection;
