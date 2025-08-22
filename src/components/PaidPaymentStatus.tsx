import TrackComponent from "./TrackComponent";

const TrackSection = () => {
  const list = [
    "Real-Time tracking dashboard users can see live status of every transaction.",
    "Phases covered initiated → In transit → Delivered.",
    "Peace of mind transparency and reduced payment uncertainty.",
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
