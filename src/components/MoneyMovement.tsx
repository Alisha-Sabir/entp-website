import React from "react";
import { Row, Col, Container, InputGroup, Form, Button } from "react-bootstrap";
import Image from "next/image";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function MoneyMovement() {
  const stablecoinCards = [
    {
      id: 1,
      image: "/images/first.png",
      title: "Sending Currency (AED)",
      description: "Original currency collected using local rails",
    },
    {
      id: 2,
      image: "/images/sec.png",
      title: "Stablecoin Bridge (USDC)",
      description: "Converted to stables for instant cross border transfer",
    },
    {
      id: 3,
      image: "/images/third.png",
      title: "Target Currency (HKD)",
      description: "Converted at destination currency for local payout",
    },
  ];

  const traditionalCards = [
    {
      id: 1,
      title: "Your Bank",
      description: "Initial processing",
    },
    {
      id: 2,
      title: "Correspondent Bank",
      description: "Currency conversion",
    },
    {
      id: 3,
      title: "Intermediary Bank",
      description: "Routing & Compliance",
    },
    {
      id: 4,
      title: "Destination Bank",
      description: "Final Settlement",
    },
  ];

  return (
    <>
      <section
        id="money-movement"
        style={{ backgroundColor: "#fffef4" }}
        className="position-relative py-5"
      >
        <div className="position-absolute" style={{ top: 0, left: 0 }}>
          <Image
            width={150}
            height={40}
            alt="Payments"
            src="/images/money_movement_pattern.png"
            className="img-fluid"
          />
        </div>
        <Container className="pt-xl-5 p-lg-1 p-xl-5">
          <div className="text-center">
            <h1 className="font-bold">Simplifying Money Movement</h1>
            <Col md={9} className="mx-auto">
              <div className="justify-content-center">
                <h3
                  style={{ color: "#6D6D6C" }}
                  className="font-medium mt-4 mb-2"
                >
                  Powered by Stablecoins Send. Receive. Settle. All in Minutes.
                </h3>
              </div>
            </Col>
          </div>
          <br />
          <br />
          <Row>
            <Col lg={5}>
              <h3 className="font-bold">Traditional Banking</h3>
              <div
                className="d-flex gap-2 pt-3 mb-xl-3"
                style={{ height: "300px" }}
              >
                <div>
                  <Image
                    src="/images/dots.png"
                    alt="dots"
                    width={11}
                    height={15}
                    className="img-fluid pt-1"
                  />
                </div>
                <br />
                <div className="d-flex flex-column gap-3">
                  {traditionalCards.map((item: any) => (
                    <>
                      <div>
                        <span
                          style={{ color: "#6D6D6C", fontSize: "18px" }}
                          className="font-medium"
                        >
                          {item.title}
                        </span>
                        <div>
                          <b style={{ fontSize: "20px" }}>{item.description}</b>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <Col md={10} lg={12} xl={10} className="mt-4 mt-lg-auto">
                <div
                  style={{ backgroundColor: "white" }}
                  className="justify-content-between align-items-center p-3 border border-2 rounded-4"
                >
                  <Col md={12}>
                    <span className="font-bold" style={{ color: "#6D6D6C" }}>
                      Bank route fees:
                    </span>
                    <br />
                    <b className="fs-5">2.0% – 5.6% of the principal</b>
                  </Col>
                  <hr />
                  <div className="d-block d-md-flex">
                    <Col xs={12} md={9} lg={8} xl={7} xxl={9}>
                      <span className="font-bold" style={{ color: "#6D6D6C" }}>
                        Processing Time:
                      </span>
                    </Col>
                    <Col xs={12} md={3} lg={4} xl={5} xxl={3}>
                      <b className="fs-5">3-5 Days</b>
                    </Col>
                  </div>
                </div>
              </Col>
            </Col>
            <Col lg={2}>
              <Image
                src="/images/vs_img.png"
                alt="vs_img"
                width={100}
                height={100}
                quality={100}
                className="img-fluid d-none d-lg-block"
              />
            </Col>

            <Col lg={5} className="d-flex flex-column mt-5 mt-lg-0">
              <h3 className="font-bold">EnTTerPrice Stablecoin Sandwich</h3>

              <div className="d-block pt-3 flex-grow-1 mb-xl-3">
                {stablecoinCards.map((item: any, index: any) => (
                  <div className="d-flex" key={index}>
                    <Col
                      md={1}
                      lg={1}
                      xl={1}
                      className="position-relative text-start"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={40}
                        height={40}
                        quality={100}
                        className="img-fluid"
                      />
                      {index < 2 && (
                        <div className="d-none d-md-block ps-xl-1 ps-xxl-0">
                          <Image
                            src="/images/Lineline.png"
                            alt="line_pattern"
                            width={10}
                            height={10}
                            quality={100}
                            className="img-fluid my-xl-0 ms-md-3 ms-lg-2 ms-xl-2 ms-xxl-3"
                          />
                        </div>
                      )}
                    </Col>

                    <Col
                      md={12}
                      lg={12}
                      xl={12}
                      className="ps-3"
                      style={{ margin: 0, padding: 0 }}
                    >
                      <b style={{ fontSize: "20px" }}>{item.title}</b>
                      <br />
                      <span
                        className="font-medium"
                        style={{ color: "#6D6D6C", fontSize: "16px" }}
                      >
                        {item.description}
                      </span>
                    </Col>
                  </div>
                ))}
              </div>
              <Col md={10} lg={12} xl={12} xxl={10} className="mt-4 mt-lg-auto">
                <div
                  style={{
                    background:
                      "linear-gradient(164deg, rgba(241, 237, 213, 1) 0%, rgba(255, 240, 179, 1) 0%, rgba(255, 253, 245, 1) 97%)",
                  }}
                  className="justify-content-between align-items-center p-3 rounded-4 highlight-border"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-100 h-100 rounded-4"
                  >
                    <rect
                      rx="15"
                      ry="15"
                      className="lines"
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                    />
                  </svg>
                  <Col md={12}>
                    <span className="font-bold">
                      EnTTerPrice Crypto rails fees:
                    </span>
                    <br />
                    <b className="fs-5" style={{ color: "#E1C106" }}>
                      0.3% – 0.8% of the principal
                    </b>
                  </Col>
                  <hr />
                  <div className="d-block d-md-flex">
                    <Col md={8} lg={6} xl={7} xxl={6}>
                      <span className="font-bold">Processing Time:</span>
                    </Col>
                    <Col md={4} lg={6} xl={5} xxl={6}>
                      <b
                        className="fs-5 ms-lg-4 ms-xl-0"
                        style={{ color: "#E1C106" }}
                      >
                        {/* Instant */}
                        Within Minutes
                      </b>
                    </Col>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
