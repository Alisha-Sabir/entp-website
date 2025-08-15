import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";

export default function ISOCompliance() {
  const data = [
    {
      id: 1,
      img: "/images/iso_icon_1.png",
      text: "Risk-based security controls",
    },
    {
      id: 2,
      img: "/images/iso_icon_2.png",
      text: "Regular audits and vulnerability assessments",
    },
    {
      id: 3,
      img: "/images/iso_icon_3.png",
      text: "Business continuity and incident response planning",
    },
  ];
  return (
    <section className="position-relative">
      <div className="position-absolute" style={{ top: 0, right: 0 }}>
        <Image
          width={250}
          height={40}
          alt="Payments"
          src="/images/right_pattern_glow.png"
          className="img-fluid"
        />
      </div>
      <Container
        // fluid
        style={{ color: "#6D6D6C" }}
        className="mt-xl-3 text-center text-lg-start font-medium"
      >
        <div className="d-block d-lg-flex align-items-center">
          <Col xs={12} lg={6} className="pt-3">
            <div className="mb-lg-5 mt-lg-0">
              <h1 className="font-bold text-dark">ISO 27001 Compliance</h1>
              <p style={{ color: "#6D6D6C", fontSize: "20px" }}>
                Our internal Information Security Management System (ISMS) is
                aligned with ISO/IEC 27001, the international standard for
                managing sensitive company and customer information. It covers:
              </p>
              <Row>
                {data.map((item, index) => (
                  <Col key={item.id} xs={12} sm={6} md={6}>
                    <Col md={12}>
                      <Image
                        src={item.img}
                        alt={`Card ${index + 1}`}
                        width={50}
                        height={50}
                        quality={100}
                        className="img-fluid my-3"
                      />
                    </Col>
                    <p
                      style={{ color: "#6d6d6c", fontSize: "20px" }}
                      className="font-medium"
                    >
                      {item.text}
                    </p>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col xs={12} lg={6} className="text-center text-lg-end">
            <Image
              src="/images/ISO.png"
              alt="ISO"
              width={500}
              height={100}
              quality={100}
              className="img-fluid p-3 p-xl-0"
            />
          </Col>
        </div>

        <div
          style={{ backgroundColor: "#FFFBE4" }}
          className="rounded-3 px-2 px-lg-4 py-4 text-center mb-5 gray-border mt-3 mt-md-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <rect
              rx="8"
              ry="8"
              className="lines"
              x="0"
              y="0"
              width="100%"
              height="100%"
            />
          </svg>
          <h4 className="text-dark font-bold my-3">
            Data Protection & Privacy Laws:
          </h4>
          <p style={{ color: "#6D6D6C" }} className="px-2 px-lg-5 font-medium">
            We comply with the{" "}
            <span className="text-dark font-bold">
              General Data Protection Regulation (GDPR)
            </span>{" "}
            and relevant{" "}
            <span className="text-dark font-bold">EU privacy directives,</span>{" "}
            ensuring data subjects’ rights are respected, and personal data is
            processed lawfully, fairly, and transparently. Our privacy policies,
            data retention practices, and user consent mechanisms reflect these
            obligations.
          </p>
        </div>
      </Container>
    </section>
  );
}
