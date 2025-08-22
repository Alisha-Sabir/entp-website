import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Image from "next/image";
import regulatoryData from "@/data/regulatoryData";

export default function RegulatoryCompliance() {
  return (
    <>
      <section>
        <Container className="pt-lg-2">
          <div className="text-center">
            <h1 className="font-bold">Regulatory Compliance</h1>
            <p className="para-color px-lg-5">
              We operate within a multi-jurisdictional regulatory environment
              and comply with the requirements of respected financial regulators
              across regions.
            </p>
          </div>

          <Row className="g-3 mt-4 text-center text-lg-start">
            {regulatoryData.map((item) => (
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
                  <Col md={12} className="ps-lg-4">
                    <Image
                      src={item.img}
                      alt={item.imgAlt}
                      width={item.width}
                      height={item.height}
                      quality={100}
                      className="img-fluid mt-3"
                    />
                  </Col>
                  <div className="p-4">
                    <h5 className="fw-bold">{item.heading}</h5>
                    <p
                      style={{ color: "#6d6d6c", fontSize: "20px" }}
                      className="font-medium"
                    >
                      {item.text}
                    </p>
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
