import CardComponent from "./CardComponent";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function ImporterExporter() {
  const data = [
    {
      id: 1,
      heading: "Pay to Exporter",
      image: "/images/export_icon.png",
      list: [
        "Supported corridors e.g., UAE, China, Hong Kong, Africa.",
        "Real-time payments.",
        "Multi-currency payments, supported currencies, no forced conversions.",
        "Speed & FX transparency, competitive mid-market FX rates.",
        "Payment steps: Create account → verify → initiate payments.",
      ],
    },
    {
      id: 2,
      heading: "Collect from Importer",
      image: "/images/import_icon.png",
      list: [
        "How incoming payments work, collecting via virtual IBAN.",
        "Currencies supported: USD, AED, HKD, CNY, many more.",
        "Notifications & tracking instant updates and status alerts.",
        "Corporate FX calculator.",
      ],
    },
  ];

  return (
    <section
      style={{ backgroundColor: "white" }}
      className="position-relative py-5"
    >
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
        {data.map((item) => (
          // <CardComponent
          //   key={index}
          //   listTitle={item.heading}
          //   // description={item.description}
          //   imageSrc={item.image}
          //   imageAlt={`Card ${index + 1}`}
          //   totalCards={data.length}
          //   list={item.list}
          // />
          <Col
            key={item.id}
            lg={6}
            style={{ border: "2px solid #D9D9D9" }}
            className="rounded-3 me-lg-3 mb-3 mb-lg-0"
          >
            <div className="p-2 p-lg-4 p-xl-5 h-75">
              <Image
                src={item.image}
                alt={item.heading}
                width={80}
                height={80}
                quality={100}
                className="img-fluid rounded-3 mb-2"
                // style={{ objectFit: "cover" }}
              />
              <h3 className="font-bold mt-2">{item.heading}</h3>
              <div className="px-4 py-2 yellow-gradient gray-border mt-3">
                <svg
                  style={{ left: "0%" }}
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    rx="8"
                    ry="8"
                    className="lines"
                    height="100%"
                    width="100%"
                    stroke-linejoin="round"
                  />
                </svg>
                <ol
                  className="mt-3 p-2"
                  style={{ paddingLeft: 15, marginLeft: 0 }}
                >
                  {item.list.map((item, i) => (
                    <li
                      key={i}
                      style={{ color: "#6D6D6C", fontSize: "19px" }}
                      className="text-start px-1 pe-xl-5 my-2 font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Col>
        ))}
      </Container>
    </section>
  );
}
