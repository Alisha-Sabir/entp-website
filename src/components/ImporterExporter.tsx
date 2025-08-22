import CardComponent from "./CardComponent";
import { Container } from "react-bootstrap";
import Image from "next/image";

export default function ImporterExporter() {
  const data = [
    {
      id: 1,
      heading: "Pay to Exporter",
      image: "/images/export_icon.png",
      list: [
        "Supported Corridors e.g., UAE, China, Hong Kong, Africa",
        "Real-time Payments",
        "Multi-Currency Payments, Supported currencies, no forced conversions",
        "Speed & FX Transparency, competitive mid-market FX rates",
        "Payment Steps Overview Quick summary: create account → verify → initiate payments",
      ],
    },
    {
      id: 2,
      heading: "Collect from Importer",
      image: "/images/import_icon.png",
      list: [
        "How Incoming payments work collecting via Virtual IBAN",
        "Currencies Supported: USD, AED, HKD, CNY, etc.",
        "Notifications & Tracking Instant updates and status alerts",
        "Corporate FX Calculator",
      ],
    },
  ];

  return (
    <section style={{ backgroundColor: "white" }} className="position-relative">
      <div className="position-absolute" style={{ top: "-200px", right: 0 }}>
        <Image
          width={100}
          height={40}
          alt="Payments"
          src="/images/pay_pattern.png"
          className="img-fluid"
        />
      </div>
      <Container className="d-block d-lg-flex mt-3">
        {data.map((item, index) => (
          <CardComponent
            key={index}
            listTitle={item.heading}
            // description={item.description}
            imageSrc={item.image}
            imageAlt={`Card ${index + 1}`}
            totalCards={data.length}
            list={item.list}
          />
        ))}
      </Container>
    </section>
  );
}
