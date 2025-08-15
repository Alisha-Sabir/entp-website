import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
import DetailsComponent from "./DetailsComponent";

const WhyChooseUs = () => {
  const data = [
    {
      id: 1,
      heading: "Cross Border Payments",
      description:
        "Seamlessly send and receive international payments with speed and transparency.",
    },
    {
      id: 2,
      heading: "Virtual IBANs",
      description:
        "Seamlessly send and receive international payments with speed and transparency.",
    },
    {
      id: 3,
      heading: "Best FX Rates",
      description:
        "Seamlessly send and receive international payments with speed and transparency.",
    },
    {
      id: 4,
      heading: "SaaS Services",
      description:
        "Seamlessly send and receive international payments with speed and transparency.",
    },
    {
      id: 5,
      heading: "Ready-to-Use Solutions",
      description:
        "Seamlessly send and receive international payments with speed and transparency.",
    },
  ];
  return (
    <DetailsComponent
      img="/images/choose_us.png"
      imgAlt="Partners"
      text="Regulated, reliable, and ready to deliver."
      data={data}
    />
  );
};

export default WhyChooseUs;
