import React from "react";
import { Col, Container } from "react-bootstrap";
import Image from "next/image";

export default function OurValues() {
  return (
    <>
      <section className="position-relative">
        <div className="position-absolute" style={{ top: "-200px", right: 0 }}>
          <Image
            width={250}
            height={40}
            alt="Payments"
            src="/images/right_pattern_glow.png"
            className="img-fluid"
          />
        </div>
        <Container style={{ color: "#6D6D6C" }} className="pt-lg-5 font-medium">
          <div className="d-block d-lg-flex align-items-end">
            <Col xs={12} lg={5} className="text-center text-lg-start">
              <Image
                src="/images/puzzle.png"
                alt="Values"
                width={450}
                height={100}
                quality={100}
                className="img-fluid pt-5 pt-lg-0"
              />
            </Col>
            <Col
              xs={12}
              lg={7}
              className="ps-lg-3 pt-4 pt-lg-0 text-center text-lg-start"
            >
              <div>
                <h1 className="font-bold text-dark">Our Values</h1>
                <p className="p-0 m-0 pe-xl-5" style={{ fontSize: "20px" }}>
                  At Entterprice, our values guide how we build and operate. We
                  put customers first by solving real problems that create
                  measurable impact, while designing technology and teams with a
                  long-term, scalable mindset. We believe in clarity in code,
                  communication, and decision-making and we take full ownership
                  of our work, holding ourselves accountable for outcomes.
                  Curiosity and continuous learning fuel our innovation, and
                  above all, we act as one global team, built on trust, respect,
                  and seamless collaboration across every role and region.
                </p>
              </div>
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
}
