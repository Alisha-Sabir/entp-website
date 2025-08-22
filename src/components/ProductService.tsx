import React from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Image from "next/image";

export default function ProductServices() {
  return (
    <>
      <section className="position-relative">
        <div className="position-absolute" style={{ top: "-200px" }}>
          <Image
            width={300}
            height={80}
            alt="Pattern"
            src="/images/product_pattern.png"
            className="img-fluid"
            style={{ zIndex: 0 }}
          />
        </div>
        <Container className="pt-lg-5">
          <h1 className="font-bold text-center my-5">Our Products</h1>
          <Row className="g-3">
            <Col xs={12} lg={6}>
              <div
                style={{ backgroundColor: "#2a2a16" }}
                className="rounded-4 position-relative h-100 p-4"
              >
                <h3 className="text-white font-bold mb-lg-3 d-block d-md-none d-lg-block">
                  Cross-Border Payments <br /> B2B Platform
                </h3>

                <Row className="align-items-center">
                  <Col xs={12} md={6} lg={5} xl={5}>
                    <h3 className="text-white font-bold mb-lg-3 d-none d-md-block d-lg-none">
                      Cross-Border Payments <br /> B2B Platform
                    </h3>
                    <p style={{ color: "#E0E0E0" }} className="font-medium">
                      Simplifying international payments with speed and
                      transparency.
                    </p>
                    <Button
                      style={{ border: "1px solid #72725F", color: "#ffd700" }}
                      className="bg-transparent py-2 px-4 font-medium mb-3 my-xl-3"
                    >
                      Read More
                    </Button>
                  </Col>

                  <Col xs={12} md={6} xl={7} className="d-none d-lg-block">
                    {/* lg, xl img */}
                    <div className="position-absolute end-0 bottom-0 pt-3 px-1 pb-1">
                      <Image
                        src="/images/cb_product.png"
                        alt="Cross Border Product"
                        width={280}
                        height={180}
                        quality={100}
                        className="img-fluid"
                      />
                    </div>
                  </Col>

                  {/* xs, md img */}
                  <Col
                    xs={12}
                    md={6}
                    xl={7}
                    className="text-center d-block d-lg-none"
                  >
                    <Image
                      src="/images/cb_product.png"
                      alt="Cross Border Product"
                      width={280}
                      height={180}
                      quality={100}
                      className="img-fluid"
                    />
                  </Col>
                </Row>
              </div>
            </Col>

            {/* xs p2p */}
            <Col xs={12} lg={6} className="d-block d-md-none">
              <div className="rounded-2 h-100 d-flex flex-column flex-md-row align-items-center kyc-gradient">
                <svg
                  // className="position-absolute"
                  style={{ left: "0%" }}
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    rx="8"
                    ry="8"
                    className="lines"
                    height="100%"
                    width="100%"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex-grow-1 pb-5">
                  <Col xs={12} className="text-end">
                    <Image
                      src="/images/p2p_image.png"
                      alt="P2P"
                      width={200}
                      height={200}
                      quality={100}
                      className="img-fluid"
                    />
                  </Col>
                  <Col xs={12} className="px-3">
                    <h3 style={{ color: "#4D4D3F" }} className="font-bold">
                      P2P Digital Wallet Platform
                    </h3>
                    <p style={{ color: "#6D6D6C" }} className="font-medium">
                      Enabling fast, secure peer-to-peer digital transactions.
                    </p>
                    <Button
                      style={{ backgroundColor: "#f8d613" }}
                      className="py-2 px-4 font-semibold border-0 text-dark"
                    >
                      Read More
                    </Button>
                  </Col>
                </div>
              </div>
            </Col>
            {/* md above p2p */}
            <Col xs={12} lg={6} className="d-none d-md-block">
              <div
                className="rounded-2 h-100 d-flex flex-column flex-md-row align-items-center kyc-gradient"
                style={{
                  backgroundImage: `url("/images/p2p_image.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "right",
                  backgroundColor: "#fff9d6",
                }}
              >
                <svg
                  // className="position-absolute"
                  style={{ left: "0%" }}
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    rx="8"
                    ry="8"
                    className="lines"
                    height="100%"
                    width="100%"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex-grow-1 py-5 py-lg-0">
                  <Col xs={6} lg={6} className="px-3">
                    <h3
                      style={{ color: "#4D4D3F" }}
                      className="font-bold mb-3 pe-lg-5 pe-xl-0"
                    >
                      P2P Digital Wallet Platform
                    </h3>
                    <p style={{ color: "#6D6D6C" }} className="font-medium">
                      Enabling fast, secure peer-to-peer digital transactions.
                    </p>
                    <Button
                      style={{ backgroundColor: "#f8d613" }}
                      className="py-2 px-4 font-semibold border-0 text-dark mt-2"
                    >
                      Read More
                    </Button>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>

          {/* Sec KYC row */}
          {/* <div className="d-block d-lg-flex"> */}
          {/* <Col xs={12} lg={12} className="d-block d-lg-flex flex-column"> */}
          <div>
            <Col xs={12} lg={12}>
              <div className="d-block d-lg-flex mt-3">
                <Col
                  xs={12}
                  lg={4}
                  className="d-flex flex-column flex-lg-row pe-lg-2"
                >
                  <div className="kyc-gradient rounded-2 text-center">
                    <div className="d-block">
                      <svg
                        // className="position-absolute"
                        style={{ left: "0%" }}
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          rx="8"
                          ry="8"
                          className="lines"
                          height="100%"
                          width="100%"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <Col md={12} className="px-2 px-lg-5 pt-5">
                        <h3 style={{ color: "#4D4D3F" }} className="font-bold">
                          KYC & Digital Onboarding Solution
                        </h3>
                        <p className="font-medium" style={{ color: "#6D6D6C" }}>
                          Automating customer verification with advanced
                          biometric technology.
                        </p>
                      </Col>
                      <Col md={12} className="text-center">
                        {/* <div className="position-absolute start-50 bottom-0 translate-middle-x">
                        <Image
                          src="/images/kyc.png"
                          alt="KYC Product"
                          width={300}
                          height={200}
                          quality={100}
                          className="img-fluid"
                        />
                      </div> */}
                        <Image
                          src="/images/kyc.png"
                          alt="KYC Product"
                          width={330}
                          height={200}
                          quality={100}
                          className="img-fluid pt-3"
                        />
                      </Col>
                    </div>
                  </div>
                </Col>
                {/* Digital Lending */}
                <Col
                  xs={12}
                  lg={4}
                  className="d-flex flex-column flex-lg-row pe-lg-2 mt-3 mt-lg-0"
                >
                  <div className="kyc-gradient rounded-2">
                    <div className="d-block">
                      <svg
                        // className="position-absolute"
                        style={{ left: "0%" }}
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          rx="8"
                          ry="8"
                          className="lines"
                          height="100%"
                          width="100%"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <Col md={12} className="text-start p-4">
                        <Image
                          src="/images/digital_platform.png"
                          alt="Digital Platform"
                          width={80}
                          height={80}
                          quality={100}
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={12} className="px-4 pb-4 pb-lg-0">
                        <h3
                          style={{ color: "#4D4D3F" }}
                          className="font-bold pe-5"
                        >
                          Digital Lending Platform
                        </h3>
                        <p style={{ color: "#6D6D6C" }}>
                          Managing end-to-end loan processes with automation and
                          compliance.
                        </p>
                        <Button
                          style={{ backgroundColor: "#f8d613" }}
                          className="py-2 px-4 font-semibold border-0 text-dark mt-2"
                        >
                          Read More
                        </Button>
                      </Col>
                    </div>
                  </div>
                </Col>
                {/* TMS */}
                <Col
                  xs={12}
                  lg={4}
                  className="d-flex flex-column flex-lg-row mt-3 mt-lg-0"
                >
                  {/* <div className="d-block text-center kyc-gradient rounded-4 position-relative"> */}
                  <div className="kyc-gradient rounded-2 text-center">
                    <div className="d-block">
                      <svg
                        // className="position-absolute"
                        style={{ left: "0%" }}
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          rx="8"
                          ry="8"
                          className="lines"
                          height="100%"
                          width="100%"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <Col md={12} className="px-3 pt-5">
                        <h3 style={{ color: "#4D4D3F" }} className="font-bold">
                          Transaction Monitoring System (TMS)
                        </h3>
                        <p className="font-medium" style={{ color: "#6D6D6C" }}>
                          Real-time fraud detection and compliance tracking for
                          financial security.
                        </p>
                      </Col>
                      <Col md={12} className="text-center">
                        {/* <div className="position-absolute start-50 bottom-0 translate-middle-x">
                        <Image
                          src="/images/kyc.png"
                          alt="KYC Product"
                          width={300}
                          height={200}
                          quality={100}
                          className="img-fluid"
                        />
                      </div> */}
                        <Image
                          src="/images/tms.png"
                          alt="TMS"
                          width={330}
                          height={200}
                          quality={100}
                          className="img-fluid pt-3"
                        />
                      </Col>
                    </div>
                  </div>
                </Col>
              </div>
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
}
