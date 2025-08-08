import React, { useState, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";

export default function BusinessPayment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const paymentSlideData = [
    {
      id: 1,
      icon: "/images/copy_icon.png",
      title: "Create a free account",
      description:
        "Onboard with entterprice within minutes - no fees, no hassle, no minimum balance",
      slide: "/images/payment_slide_1.png",
      //   width: 800,
      //   height: 400,
    },
    {
      id: 2,
      icon: "/images/access_icon.png",
      title: "Complete KYB & Upload Documents",
      description:
        "Submit your business details, ownership structure, and documents to meet regulatory requirements.",
      slide: "/images/payment_slide_1.png",
      //   width: 800,
      //   height: 400,
    },
    {
      id: 3,
      icon: "/images/control_icon.png",
      title: "Get Verified by Compliance Team",
      description:
        "Our team reviews your information to verify and activate your account swiftly and securely.",
      slide: "/images/payment_slide_1.png",
      //   width: 500,
      //   height: 400,
    },
    {
      id: 4,
      icon: "/images/control_icon.png",
      title: "Start Making Global Payments",
      description:
        "Once verified, initiate vendor payments globally, set beneficiaries, and track transfers in real-time.",
      slide: "/images/payment_slide_1.png",
      //   width: 500,
      //   height: 400,
    },
  ];

  //   const [paymentSlideDetailData] = useState(paymentSlideData);

  const sliderSettings: Settings = {
    // autoplay: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, newIndex) => setActiveIndex(newIndex),
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <section className="position-relative">
      <div className="position-absolute bottom-0">
        <Image
          width={100}
          height={40}
          alt="Payments"
          src="/images/payment_pattern.png"
          className="img-fluid"
        />
      </div>
      <div className="position-absolute top-0 end-0">
        <Image
          width={320}
          height={90}
          alt="Payments"
          src="/images/payment_pattern_right.png"
          className="img-fluid"
        />
      </div>
      <Container className="py-5">
        <div className="w-100 text-center my-5">
          <h1 className="fw-bold">Streamlining Global Trade Payments</h1>
          <Col className="d-flex justify-content-center align-items-center">
            <p style={{ maxWidth: "800px" }} className="para-color">
              Pay international vendors seamlessly with Your Entterprice
              Business Account
            </p>
          </Col>
        </div>
        <Row className="d-flex align-items-center">
          <Col md={12} lg={5} className="pe-5">
            {paymentSlideData.map((item, index) => (
              <div
                key={item.id}
                className="d-flex align-items-start gap-3 payment-card pe-1"
              >
                <Col
                  xs="auto"
                  className="d-flex flex-column align-items-center pe-0"
                >
                  <div
                    className={`step-icon mt-1 ${
                      index === activeIndex ? "active" : "inactive"
                    } d-flex justify-content-center align-items-center`}
                  >
                    <span className="step-number">{index + 1}</span>
                  </div>
                  {index < 3 && (
                    <div
                      className={`step-line ${
                        index === activeIndex ? "active" : "inactive"
                      }`}
                    ></div>
                  )}
                </Col>
                <Card
                  key={index}
                  className="py-1 border-0 w-100 mb-1"
                  onClick={() => goToSlide(index)}
                  role="button"
                  style={{
                    cursor: "pointer",
                    // boxShadow:
                    //   index === activeIndex ? "2px 2px lightgray" : "none",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <div>
                    <Row>
                      {/* <Col xs={12} xl={1} className="d-flex align-items-top">
                      <Image
                        src={item.icon}
                        alt={`Icon for ${item.title}`}
                        width={50}
                        height={50}
                        quality={100}
                      />
                    </Col> */}
                      {/* <Col xs="auto" className="d-flex align-items-start pe-0">
                      <div className="step-icon d-flex justify-content-center align-items-center">
                        <span className="step-number">{index + 1}</span>
                      </div>
                    </Col> */}
                      {/* <Col
                        xs="auto"
                        className="d-flex flex-column align-items-center pe-0"
                      >
                        <div
                          className={`step-icon ${
                            index === activeIndex ? "active" : "inactive"
                          } d-flex justify-content-center align-items-center`}
                        >
                          <span className="step-number">{index + 1}</span>
                        </div>
                        {index < 3 && (
                          <div
                            className={`step-line ${
                              index === activeIndex ? "active" : "inactive"
                            }`}
                          ></div>
                        )}
                      </Col> */}
                      <Col md={12}>
                        <span style={{ fontSize: "19px" }} className="fw-bold">
                          {item.title}
                        </span>
                        <br />
                        <p
                          className="font-medium m-0 p-0"
                          style={{ color: "#6D6D6C" }}
                        >
                          {item.description}
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </div>
            ))}
            <Button
              style={{
                backgroundColor: "#F8D613",
                color: "black",
                fontSize: "18px",
              }}
              className="mt-3 font-semibold border-0 px-5 py-3 rounded-3"
              // size={"lg"}
            >
              Get Started
            </Button>
          </Col>

          <Col md={12} lg={7} className="border-0 overflow-hidden">
            <Slider ref={sliderRef} {...sliderSettings} className="border-0">
              {paymentSlideData.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden border-0"
                  tabIndex={0}
                >
                  <Image
                    src={item.slide}
                    alt={item.title}
                    quality={100}
                    layout="responsive"
                    width={800}
                    height={100}
                    className="border-0"
                    // className="my-4"
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
