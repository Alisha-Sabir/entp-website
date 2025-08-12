import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Image from "next/image";

export default function RegulatoryCompliance() {
  const data = [
    {
      id: 1,
      heading: "United Arab Emirates (UAE):",
      text: "Licensed by the Central Bank of UAE under the Retail Payment Services and Card Schemes framework, enabling us to deliver secure, regulated financial services across the UAE.",
      bgImage: "/images/uae_bg_img.png",
      img: "/images/uae_bank.png",
      imgAlt: "UAE",
      width: 300,
      height: 100,
    },
    {
      id: 2,
      heading: "Canada:",
      text: "Registered as a Money Services Business (MSB) with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC), ensuring adherence to strict AML, reporting, and operational standards.",
      bgImage: "/images/cad_bg_img.png",
      img: "/images/canada_bank.png",
      imgAlt: "Canada",
      width: 250,
      height: 100,
    },
    {
      id: 3,
      heading: "Hong Kong:",
      text: "Regulated as a Money Service Operator (MSO) under the Customs and Excise Department (CCE), providing regulatory oversight for our remittance and foreign exchange operations.",
      bgImage: "/images/hk_bg_img.png",
      img: "/images/hk_bank.png",
      imgAlt: "Hong Kong",
      width: 350,
      height: 100,
    },
    {
      id: 4,
      heading: "Pakistan:",
      text: "Our technology development and support center is regulated by the Securities and Exchange Commission of Pakistan (SECP).",
      bgImage: "/images/pak_bg_img.png",
      img: "/images/pak_bank.png",
      imgAlt: "Pakistan",
      width: 350,
      height: 100,
    },
  ];
  return (
    <>
      <section>
        <Container className="pt-lg-2">
          <div className="text-center">
            <h1 className="font-bold">Regulatory Compliance</h1>
            <p className="para-color px-5">
              We operate within a multi-jurisdictional regulatory environment
              and comply with the requirements of respected financial regulators
              across regions:
            </p>
          </div>

          <Row className="g-3 mt-4">
            {data.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={6}>
                <Card
                  className="h-100 shadow-lg border-0"
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "25%",
                    zIndex: 1,
                  }}
                >
                  <div className="p-4">
                    <h5 className="fw-bold">{item.heading}</h5>
                    <p
                      style={{ color: "#6d6d6c", fontSize: "20px" }}
                      className="font-medium"
                    >
                      {item.text}
                    </p>
                    <Col md={12}>
                      <Image
                        src={item.img}
                        alt={item.imgAlt}
                        width={item.width}
                        height={item.height}
                        quality={100}
                        className="img-fluid my-3"
                      />
                    </Col>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
