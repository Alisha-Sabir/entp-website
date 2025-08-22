import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";

export default function GetPaidHome() {
  return (
    <>
      <section style={{ backgroundColor: "#22221D", color: "white" }}>
        <Container className="pb-5 pt-xl-5">
          <Row className="d-flex align-items-center justify-content-center py-xl-5">
            <Col md={12} lg={5}>
              <h1
                style={{ color: "#FFDE1F" }}
                className="font-bold display-1 mb-3 d-block d-lg-none mt-3 pt-3 text-center"
              >
                Pay Collect Track
              </h1>
              <h1
                style={{ color: "#FFDE1F", fontSize: "90px" }}
                className="font-bold display-1 mb-3 d-none d-lg-block pe-xl-5"
              >
                Pay Collect Track
              </h1>
              <p
                style={{ fontSize: "20px" }}
                className="pe-lg-5 me-lg-5 text-center text-lg-start"
              >
                {" "}
                Instant, Transparent, Secure And Cheaper Trade Payments Between
                The UAE And China
              </p>
            </Col>
            {/* <Col lg={2} /> */}
            <Col md={12} lg={7}>
              <div
                className=" position-relative"
                style={{ top: "0", right: "0", zIndex: 2 }}
              >
                <Image
                  src="/images/Getpaid_hero_img.png"
                  alt="Get Paid"
                  width={1500}
                  height={100}
                  className="img-fluid pt-lg-3 text-end"
                />
                <div
                  className=" position-absolute"
                  style={{ top: "50px", right: "0", zIndex: -1 }}
                >
                  <Image
                    src="/images/mask.png"
                    alt="Mask"
                    width={1000}
                    height={100}
                    className="img-fluid pt-5 pt-lg-5 text-end"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <div>
            <br />
            <br />
            <br />
          </div>
        </Container>
      </section>
    </>
  );
}
