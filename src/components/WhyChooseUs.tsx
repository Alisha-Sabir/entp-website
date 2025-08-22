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
        "Simplify global collections with dedicated virtual accounts tailored to your business.",
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
        "Delivering Software as a Service & Bespoke software development. Specifically for the GCC market in accordance with local regulations.",
    },
    {
      id: 5,
      heading: "Ready-to-Use Solutions",
      description:
        "Access fully developed, customizable platforms to quickly launch industry-specific digital services.",
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
