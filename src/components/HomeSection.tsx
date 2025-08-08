import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Button, Col, Row } from "react-bootstrap";
import { IoIosPlay } from "react-icons/io";
import Header from "@/layout/Header";

const HomeSection = () => {
  const [showModal, setShowModal] = useState(false);
  // const [showSubSection, setShowSubSection] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const squareRef = useRef(null);
  const subSectionRef = useRef(null);

  return (
    <section
      id="home"
      className="home-pattern"
      style={{ backgroundColor: "#22221d", height: "100vh" }}
    >
      <Container className="pb-lg-5">
        <Row className="align-items-end align-items-xl-center pb-5">
          <Col
            xs={12}
            md={6}
            lg={6}
            xl={5}
            className="my-0 my-xl-5 pb-3 overflow-hidden"
          >
            <div className="overflow-hidden">
              <h1 className="text-white font-bold display-5">
                Cross-Border
                <br />
                <span className="entp-text">Payment Specialist</span>
              </h1>
              <p className="text-white pe-5 me-5">
                Simplifying telegraphic payments across UAE–China corridors and
                beyond - secure, fast, and built for business.
              </p>
              <Button
                href="#"
                variant="warning"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #555543",
                  color: "#f8d613",
                }}
                className="px-xl-4 pt-xl-2 align-items-center fs-5 rounded-2"
                onClick={handleOpenModal}
              >
                <IoIosPlay className="mb-1" size={26} />
                <small className="fw-semibold">Explore EnTTerprice</small>
              </Button>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            xl={7}
            className="d-flex justify-content-center align-items-end mb-4 mb-xl-0"
          >
            <div
              className="d-none d-md-block pt-3 pb-5 position-relative"
              style={{ zIndex: 0 }}
              ref={squareRef}
            >
              <div className="globe-container ms-xl-5 overflow-none">
                <div className="globe ms-xl-5 overflow-none">
                  <div className="globe-scroll overflow-none">
                    <img src="/images/world_map.png" alt="map" />
                    <img src="/images/world_map.png" alt="map" />
                  </div>
                  {/* <img
                    src="/images/Dollor.png"
                    className="currency-icon usd"
                    alt="USD"
                  />
                  <img
                    src="/images/CNY.png"
                    className="currency-icon cny"
                    alt="CNY"
                  />
                  <img
                    src="/images/Pound.png"
                    className="currency-icon gbp"
                    alt="GBP"
                  />
                  <img
                    src="/images/Euro.png"
                    className="currency-icon euro"
                    alt="Euro"
                  />
                  <img
                    src="/images/AED.png"
                    className="currency-icon aed"
                    alt="AED"
                  /> */}
                </div>
              </div>
            </div>

            {/* xs */}
            <div className="d-block d-md-none pt-3 pb-5 position-relative">
              <div className="globe-container ms-md-5">
                <div className="globe ms-md-5">
                  <div className="globe-scroll">
                    <img src="/images/world_map.png" alt="map" />
                    <img src="/images/world_map.png" alt="map" />
                  </div>
                  <img
                    src="/images/Dollor.png"
                    className="currency-icon usd"
                    alt="USD"
                  />
                  <img
                    src="/images/CNY.png"
                    className="currency-icon cny"
                    alt="CNY"
                  />
                  <img
                    src="/images/Pound.png"
                    className="currency-icon gbp"
                    alt="GBP"
                  />
                  <img
                    src="/images/Euro.png"
                    className="currency-icon euro"
                    alt="Euro"
                  />
                  <img
                    src="/images/AED.png"
                    className="currency-icon aed"
                    alt="AED"
                  />
                </div>
              </div>
              <div>
                <img
                  src="/images/fx_rate.png"
                  className="fx-rate img-fluid"
                  alt="fx_rate"
                />
              </div>
              <div>
                <img
                  src="/images/quick_transfer.png"
                  className="transfer img-fluid"
                  alt="quick_transfer"
                />
              </div>
            </div>
          </Col>
        </Row>
        {/* <div
          className={${
            showSubSection ? "position-absolute top-0 start-0" : "d-none"
          }}
          ref={subSectionRef}
        >
          <HomeSubSection />
          </div> */}
      </Container>
    </section>
  );
};

export default HomeSection;
