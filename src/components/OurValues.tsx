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
                width={500}
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
                <p className="p-0 m-0" style={{ fontSize: "20px" }}>
                  At EnTTerprice, our values guide everything we do. We put
                  customers first by solving real-world problems that drive
                  business impact. We build with a long-term mindset, designing
                  systems and teams that scale with purpose. Clarity matters to
                  us — in code, communication, and decision-making. We take
                  ownership of our work from start to finish, holding ourselves
                  accountable for outcomes. Continuous learning keeps us sharp,
                  and we embrace curiosity as a core part of our culture. Most
                  importantly, we operate as one team — built on trust, respect,
                  and collaboration across every role and time zone.
                </p>
              </div>
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
}
