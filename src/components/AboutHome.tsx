import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";

export default function AboutHome() {
  return (
    <>
      <section style={{ backgroundColor: "#22221D", color: "white" }}>
        <Container className="py-5 pt-lg-5 text-center">
          <Row className="d-flex align-items-center justify-content-center py-5">
            <Col md={12} className="mt-5 pe-lg-5">
              <h1 className="font-bold display-5 mb-3">
                <span style={{ color: "#FFDE1F" }}>
                  Building Products, Enabling Trade,
                </span>{" "}
                <br />
                Connecting Businesses across the Globe
              </h1>
            </Col>
            {/* <Col lg={2} /> */}
            <Col md={12} className="text-center">
              <Image
                src="/images/wide_map.png"
                alt="Saftey_logo"
                width={1500}
                height={60}
                className="img-fluid pt-5 pt-lg-3"
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
