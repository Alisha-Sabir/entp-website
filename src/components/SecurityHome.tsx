import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";

export default function sSecurityHome() {
  return (
    <>
      <section style={{ backgroundColor: "#22221D", color: "white" }}>
        <Container className="py-lg-5 pt-lg-5 text-center text-md-start">
          <Row className="d-flex align-items-center justify-content-center py-xl-5">
            <Col md={12} lg={6} className="mt-5 pe-lg-5">
              <h1 className="font-bold display-5 mb-3">
                Your <span style={{ color: "#FFDE1F" }}>Payments,</span>{" "}
                Properly Protected
              </h1>
              <p style={{ fontSize: "20px" }} className="pe-lg-5 me-lg-5">
                Bank Standard Security, Fintech Level Agility and Service Bank
              </p>
            </Col>
            {/* <Col lg={2} /> */}
            <Col md={12} lg={6} className="text-center text-lg-start">
              <Image
                src="/images/Shield.png"
                alt="Saftey_logo"
                width={500}
                height={60}
                className="img-fluid pt-5 pt-lg-3"
              />
            </Col>
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
