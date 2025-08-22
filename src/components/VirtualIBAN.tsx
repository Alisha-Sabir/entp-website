import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
import DetailsComponent from "./DetailsComponent";

const VirtualIBAN = () => {
  const data = [
    {
      id: 1,
      heading: "Key Features",
      description:
        "Quick setup, multi-currency support, secure transactions, and easy integration.",
    },
    {
      id: 2,
      heading: "Use Cases",
      description:
        "Ideal for global payments, e-commerce, and cross-border services.",
    },
    {
      id: 3,
      heading: "Benefits for Businesses",
      description:
        "Lower costs, better cash flow, global reach, and enhanced payments.",
    },
    {
      id: 4,
      heading: "Why Choose Enterprise for Your Virtual IBAN?",
      description:
        "Get your Virtual IBAN quickly with simple, seamless integration.",
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
    <DetailsComponent
      centerHeading="Virtual IBAN"
      img="/images/IBAN_img.png"
      imgAlt="Partners"
      data={data}
      rightImg={true}
      leftImg={false}
      background="iban-bg"
      // backgroundColor={{ backgroundColor: "#F5F5F5", color : "white" }}
      descriptionStyle={{ color: "#DDDDDD" }}
    />
  );
};

export default VirtualIBAN;
