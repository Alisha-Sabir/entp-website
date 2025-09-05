import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
import DetailsComponent from "./DetailsComponent";

const VirtualIBAN = () => {
  const data = [
    {
      id: 1,
      heading: "Key Features",
      description:
        "Quick setup, multicurrency support, secure transactions, and easy integration.",
    },
    {
      id: 2,
      heading: "Use Cases",
      description: "Ideal for global payments and E-commerce marketplaces.",
    },
    {
      id: 3,
      heading: "Benefits for Businesses",
      description:
        "Lower costs, better cash flow, global reach, and enhanced payments.",
    },
    {
      id: 4,
      heading: "Why Choose Entterprice for Your Virtual IBAN?",
      description:
        "Pay and collect seamlessly across jurisdictions with Entterprice Multicurrency Virtual IBANs.",
    },
    {
      id: 5,
      heading: "Seamless Integration",
      description:
        "Easily integrate with your payment systems for smooth operations.",
    },
    {
      id: 6,
      heading: "Enhanced Security",
      description: "Secure and compliant transactions every time.",
    },
  ];
  return (
    <section id="IBAN">
      <DetailsComponent
        centerHeading="Multicurrency Virtual IBAN"
        img="/images/IBAN_img.png"
        imgAlt="Partners"
        data={data}
        rightImg={true}
        leftImg={false}
        background="iban-bg"
        // backgroundColor={{ backgroundColor: "#F5F5F5", color : "white" }}
        descriptionStyle={{ color: "#DDDDDD" }}
      />
    </section>
  );
};

export default VirtualIBAN;
