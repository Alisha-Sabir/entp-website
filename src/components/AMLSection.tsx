import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

export default function AMLSection() {
  const listAML = [
    "Real-time transaction screening against global sanctions and watchlists.",
    "Rule-based alert generation for unusual or suspicious activity.",
    "Automated risk scoring at onboarding and ongoing due diligence stages.",
    "Integrated case management for compliance investigations and reporting.",
  ];

  const fraudList = [
    "Proactive pattern analysis and anomaly detection.",
    "Internal and external fraud detection controls.",
  ];

  return (
    <section className="position-relative">
      <div className="position-absolute" style={{ top: "-400px" }}>
        <Image
          width={200}
          height={80}
          alt="AMl Pattern"
          src="/images/aml_pattern.png"
          className="img-fluid"
          style={{ zIndex: 0 }}
        />
      </div>
      <Container
        fluid
        style={{ color: "#6D6D6C" }}
        className="mt-5 text-center text-lg-start font-medium"
      >
        <div className="d-block d-lg-flex align-items-center">
          <Col lg={1}></Col>
          <Col xs={12} lg={4} className="pt-3">
            <div className="mb-lg-5 mt-lg-0">
              <h1 className="font-bold text-dark">
                AML & Transaction Monitoring
              </h1>
              <p style={{ color: "#6D6D6C", fontSize: "20px" }}>
                We have established a robust, in-house{" "}
                <b>
                  Anti-Money Laundering (AML) and Transaction Monitoring System
                  (TMS)
                </b>{" "}
                tailored to B2B cross-border transactions. Key features include:
              </p>
              <ul>
                {listAML.map((item, index) => (
                  <li style={{ fontSize: "18px" }} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "20px" }} className="p-0 m-0">
                In addition, our <b>Fraud Risk Management</b> framework
                includes:
              </p>
              <ul>
                {fraudList.map((item, index) => (
                  <li style={{ fontSize: "18px" }} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xs={12} lg={7} className="text-center text-lg-end mt-5">
            <Image
              src="/images/aml_frame.png"
              alt="Person Image"
              width={900}
              height={100}
              quality={100}
              className="img-fluid mt-4 mt-md-0"
            />
          </Col>
        </div>
      </Container>
    </section>
  );
}
