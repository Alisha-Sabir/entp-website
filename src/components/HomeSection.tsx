import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Button, Col, Row } from "react-bootstrap";
import { BsPlayFill } from "react-icons/bs";
import Header from "@/layout/Header";
import { url } from "inspector";

const HomeSection = () => {
  const [showModal, setShowModal] = useState(false);
  // const [showSubSection, setShowSubSection] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const squareRef = useRef(null);
  const subSectionRef = useRef(null);

  const cards = [
    {
      id: 1,
      icon: "/images/home_icon_1.png",
      wave: "/images/wave_1.png",
      heading: "Multi Currency Business Accounts",
      text: "Transact in USD, AED, HKD, CNY and more without delays or forced conversions",
    },
    {
      id: 2,
      icon: "/images/home_icon_2.png",
      wave: "/images/wave_2.png",
      heading: "Pay And Collect Within Minutes, 24/7",
      text: "Move money across borders securely with transparent FX rates and no hidden fees",
    },
    {
      id: 3,
      icon: "/images/home_icon_3.png",
      wave: "/images/wave_3.png",
      heading: "Account Management",
      text: "Easily assign Viewer, Maker, or Approver roles to manage workflows with control and clarity.",
    },
  ];

  return (
    <section
      id="home"
      className="home-pattern"
      style={{ backgroundColor: "#22221d" }}
    >
      <Container className="pb-xl-5 pt-5">
        <Row className="align-items-end align-items-lg-start pb-0 pb-xl-5">
          <Col
            xs={12}
            md={12}
            lg={6}
            xl={5}
            className="my-0 my-xl-5 pb-3 overflow-hidden"
          >
            <div className="overflow-hidden mt-5">
              <h1 className="text-white font-bold display-5">
                Revolutionizing
                <br />
                <span className="entp-text">International Trade Payments</span>
              </h1>
              <p className="text-white">
                Our One Stop Shop Solution For Corporate FX, Payouts And
                Collections From UAE To China And Beyond.
              </p>
              <Button
                href="#"
                variant="warning"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #555543",
                  color: "#f8d613",
                  fontSize: "20px",
                }}
                className="px-xl-4 pt-xl-2 align-items-center font-semibold rounded-2"
                onClick={handleOpenModal}
              >
                <BsPlayFill className="mb-1" size={24} />
                <small className="ms-1">Explore EnTTerprice</small>
              </Button>
            </div>
          </Col>
          <Col
            xs={12}
            md={12}
            lg={6}
            xl={7}
            className="d-flex justify-content-center align-items-end mb-lg-4 mb-xl-0"
          >
            <div
              className="d-block position-relative mt-3 mt-md-5 mt-lg-0"
              style={{ zIndex: 0 }}
              ref={squareRef}
            >
              <div className="globe-container ms-xl-5 overflow-none">
                <div className="globe ms-xl-5 overflow-none">
                  <div className="globe-scroll overflow-none">
                    <img src="/images/world_map.png" alt="map" />
                    <img src="/images/world_map.png" alt="map" />
                  </div>
                  <img
                    src="/images/currency_1.png"
                    className="currency-icon usd"
                    alt="USD"
                  />
                  <img
                    src="/images/currency_2.png"
                    className="currency-icon cny"
                    alt="CNY"
                  />
                  <img
                    src="/images/currency_3.png"
                    className="currency-icon gbp"
                    alt="GBP"
                  />
                  <img
                    src="/images/currency_4.png"
                    className="currency-icon euro"
                    alt="Euro"
                  />
                </div>
              </div>
              <div>
                <Image
                  src="/images/fx_rate.png"
                  className="fx-rate img-fluid"
                  alt="fx_rate"
                  width={200}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/images/quick_transfer.png"
                  className="transfer img-fluid"
                  alt="quick_transfer"
                  width={200}
                  height={100}
                />
              </div>
            </div>

            {/* xs */}
            {/* <div className="d-block d-md-none pt-3 pb-5 position-relative">
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
            </div> */}
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
        <Row className="text-center pe-xl-3">
          <div
            // style={{ backgroundColor: "#ffffff" }}
            className="d-block d-md-flex pt-5 pb-3 pb-xl-0 gap-md-2 gap-xl-2 position-relative"
          >
            {cards.map((item: any, index: any) => (
              <Col
                key={item.id}
                xs={12}
                md={4}
                lg={4}
                className="rounded-4 pt-5 pb-3 px-0 px-md-2 px-xl-5 mb-2 mb-md-0"
                style={{
                  borderTop: "2px solid #45453e",
                  borderBottom: "2px solid #31312b",
                  // borderLeft: "2px solid #68675F",
                  borderLeft: "2px solid #45453e",
                  borderRight: "2px solid #31312b",
                  backgroundImage: `url(${item.wave})`,
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <Col md={12}>
                  <Image
                    src={item.icon}
                    alt={`Icon ${index + 1}`}
                    width={80}
                    height={40}
                    quality={100}
                    className="img-fluid"
                  />
                </Col>
                <Col md={12} className="mt-4 pb-3">
                  <h4 className="font-bold entp-text">{item.heading}</h4>
                  <p className="font-medium text-white">{item.text}</p>
                </Col>
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;
