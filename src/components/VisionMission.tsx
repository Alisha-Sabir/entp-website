import CardComponent from "./CardComponent";
import { Container } from "react-bootstrap";

export default function VisionMission() {
  const data = [
    {
      id: 1,
      heading: "Our Vision",
      image: "/images/vision.png",
      description:
        "To become a leading global platform empowering businesses engaged in international trade, by providing seamless, end-to-end digital trade finance and cross-border payment solutions. We strive to accelerate economic growth, foster financial inclusion, and create meaningful connections across markets and geographies.",
    },
    {
      id: 2,
      heading: "Our Mission",
      image: "/images/mission.png",

      description:
        "To deliver fast, transparent, and cost-effective cross-border payment and fintech solutions through a technology-first, client-focused approach. We aim to simplify international transactions, enabling businesses to grow confidently in a connected global economy.",
    },
  ];
  interface CardData {
    id: number;
    heading: string;
    description: string;
    image?: string;
  }

  return (
    <section style={{ backgroundColor: "#22221d", color: "white" }}>
      <Container className="d-block d-lg-flex py-5">
        {data.map((item: CardData, index: number) => (
          <CardComponent
            key={index}
            title={item.heading}
            description={item.description}
            imageSrc={item.image}
            imageAlt={`Card ${index + 1}`}
            totalCards={data.length}
          />
        ))}
      </Container>
    </section>
  );
}
