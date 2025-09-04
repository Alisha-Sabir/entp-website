import TrackComponent from "./TrackComponent";

const TrackSection = () => {
  const list = [
    "Real-Time tracking: Dashboard users can see live status of every transaction.",
    "Phases covered: Initiated → In transit → Delivered.",
    "Peace of mind: Transparency and reduced payment uncertainty.",
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
