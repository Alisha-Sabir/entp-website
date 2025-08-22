import DetailsComponent from "./DetailsComponent";

const CBPayments = () => {
  const data = [
    {
      id: 1,
      subHeading: "Instant Trade Payments:",
      description:
        "Real-time, secure payment settlement without delays, ensuring fast international transactions.",
    },
    {
      id: 2,
      subHeading: "Key Trade Corridors:",
      description:
        "Specializing in UAE-China trade with plans to expand into additional major global trade corridors.",
    },
    {
      id: 3,
      subHeading: "Easy Onboarding:",
      description:
        "Simple, quick account setup to get businesses trading internationally without hassle.",
    },
    {
      id: 4,
      subHeading: "Best FX Rates:",
      description:
        "Competitive foreign exchange rates with no hidden fees or excessive spreads, saving you money.",
    },
    {
      id: 5,
      subHeading: "Supported Currencies:",
      description:
        "Multiple currencies supported, including AED, CNY, HKD, and more for seamless global transactions.",
    },
    {
      id: 6,
      subHeading: "Real-Time Payment Tracking:",
      description:
        "Monitor and track payments instantly with full transparency at every step.",
    },
  ];
  return (
    <DetailsComponent
      sectionHeading="Cross Border Payments"
      data={data}
      background={"bg-white"}
      img="/images/CBPayment.png"
      imgAlt="Cross Border Payments"
    />
  );
};

export default CBPayments;
