import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";

export default function SaasHome() {
  return (
    <>
      <section style={{ backgroundColor: "#22221D", color: "white" }}>
        <Container className="pb-5 pt-5 position-relative text-center text-lg-start">
          <Row className="d-flex align-items-center justify-content-center py-xl-5">
            <Col md={12} lg={5}>
              <h1 className="font-bold mb-3 display-5">
                <span style={{ color: "#FFDE1F" }}>
                  Software As A Service &
                </span>
                <br />
                Bespoke Software Development
              </h1>
              <p style={{ fontSize: "20px" }}>
                {" "}
                We partner with Banks, Remittance Agents and Fintech’s on a
                subscription basis or provide customized development for the GCC
                market in accordance with local regulations
              </p>
              <Button
                style={{ border: "1px solid #72725F", color: "#ffd700" }}
                className="bg-transparent py-2 px-4 font-medium"
              >
                Get Demo
              </Button>
            </Col>
            {/* <Col lg={2} /> */}
            {/* <Col
              md={12}
              lg={7}
              className="position-relative"
              style={{ zIndex: 1 }}
            >
              <div>
                <Image
                  src="/images/saas_hero.png"
                  alt="Get Paid"
                  width={1100}
                  height={100}
                  className="img-fluid pt-5 pt-lg-3 text-end"
                />
                <div
                  className="position-absolute"
                  style={{ top: "50px", right: "-150px", zIndex: 0 }}
                >
                  <Image
                    src="/images/saas_bg.png"
                    alt="Mask"
                    width={1000}
                    height={100}
                    className="img-fluid text-end"
                  />
                </div>
              </div>
            </Col> */}
            <Col
              md={12}
              lg={7}
              className="position-relative"
              style={{ zIndex: 1 }}
            >
              <div
                className="position-absolute"
                style={{ top: "50px", right: "-150px", zIndex: -1 }}
              >
                <Image
                  src="/images/saas_bg.png"
                  alt="Mask"
                  width={1000}
                  height={100}
                  className="img-fluid text-end"
                />
              </div>

              <Image
                src="/images/saas_hero.png"
                alt="Get Paid"
                width={1100}
                height={100}
                className="img-fluid pt-5 pt-lg-3 text-end position-relative"
                style={{ zIndex: 2 }}
              />
            </Col>
          </Row>
        </Container>
        <div>
          <br />
          <br />
        </div>
      </section>
    </>
  );
}
