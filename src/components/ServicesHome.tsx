import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";

export default function ServicesHome() {
  return (
    <>
      <section style={{ backgroundColor: "#22221D", color: "white" }}>
        <Container>
          <Row className="d-flex align-items-center justify-content-center py-xl-5">
            <Col md={12} lg={5} className="mt-5 text-center text-md-start">
              <h1 className="font-bold display-5 mb-3">
                <span style={{ color: "#FFDE1F" }}>
                  Seamless Global Payment Platform
                </span>{" "}
                <br />
                For Today’s Business
              </h1>
            </Col>
            {/* <Col lg={2} /> */}
            <Col md={12} lg={7}>
              <Image
                src="/images/services_hero_img.png"
                alt="Services globe"
                width={1500}
                height={60}
                className="img-fluid pt-md-5 pt-lg-3 text-end"
              />
            </Col>
            <div>
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
