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
      heading: "Multicurrency Virtual IBANs",
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
      heading: "Bespoke Software Solutions",
      description:
        // "Delivering Software as a Service & Bespoke software development. Specifically for the GCC market in accordance with local regulations.",
        "Providing software as a service and customized software development specifically for the GCC market in accordance with local regulations.",
    },
    {
      id: 5,
      heading: "Blockchain Technology",
      description:
        "Leveraging stablecoin rails to facilitate the fastest and cheapest possible payment experience.",
    },
  ];
  return (
    <DetailsComponent
      img="/images/choose_us.png"
      imgAlt="Partners"
      text="Regulated, Reliable, and Ready to deliver."
      data={data}
    />
  );
};

export default WhyChooseUs;
