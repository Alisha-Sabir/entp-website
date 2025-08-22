import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

export default function CareersHome() {
  return (
    <>
      <section
        className="text-white home-pattern pt-xl-4"
        style={{ backgroundColor: "#22221d" }}
      >
        <Container className="pb-5 pt-lg-3 pt-xl-5">
          <Row className="d-flex align-items-center justify-content-center pt-5 pt-xl-0 py-lg-5">
            <Col md={12} lg={12} className="text-center mt-3 pe-xl-5">
              <h1 className="mb-3 font-medium" style={{ color: "#FFDE1F" }}>
                {/* <span > */}
                Put Your Skills To Work As We Transform
                {/* </span> */}
              </h1>
              {/* <br /> */}
              <h1 className="font-semibold display-5 d-block d-lg-none">
                International Trade Payments for Global Businesses
              </h1>
              <h1
                className="font-semibold display-5 d-none d-lg-block"
                style={{ fontSize: "60px" }}
              >
                International Trade Payments for Global Businesses
              </h1>
            </Col>
          </Row>
        </Container>
        <Col md={12} lg={12} className="text-center text-lg-start">
          <Image
            src="/images/career-bg-img.png"
            alt="Careers"
            width={2000}
            height={60}
            className="img-fluid pb-5 pb-lg-0"
          />
        </Col>
        <div>
          <br />
          <br />
          <br />
        </div>
      </section>
    </>
  );
}
