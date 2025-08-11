import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function Footer({ style }: any) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <footer
        className="text-light overflow-hidden vh-100 d-flex flex-column justify-content-end"
        // style={style}
        style={{ backgroundColor: "#22221D" }}
      >
        <Container className="text-center text-md-start pb-5">
          <Row className="pt-5">
            <Col md={4} lg={7} className="pt-5 overflow-hidden">
              <Image
                src="/images/entp_white_logo.png"
                alt="entterprice_logo"
                // width={330}
                // height={140}
                width={240}
                height={80}
                quality={100}
                className="img-fluid"
              />
            </Col>
          </Row>
          <div>
            <Row className="mt-3 gy-4">
              <Col md={6} lg={4} xl={4} className="mx-auto mb-4 custom-link">
                <h6 className="mb-4">Jurisdiction</h6>
                <p
                //onClick={handleOpenModal}
                >
                  UAE-ADGM Abu Dhabi (Coming Soon)
                </p>
                {/* <p>Toronto, Canada</p> */}
                <p
                //onClick={handleOpenModal}
                >
                  Canada – FINTRAC
                </p>
                <p
                //onClick={handleOpenModal}
                >
                  Pakistan – Lahore
                </p>
                {/* <p 
//onClick={handleOpenModal}
>Lahore, Pakistan</p> */}
                <p
                  onClick={() =>
                    (window.location.href = "mailto:info@entterprice.com")
                  }
                >
                  info@entterprice.com
                </p>
              </Col>
              <Col md={6} lg={2} xl={2} className="mx-auto mb-4 custom-link">
                <h6 className="mb-4">About Us</h6>
                <p>
                  <Link href="/" className="text-reset">
                    Careers
                  </Link>
                </p>
                <p
                //onClick={handleOpenModal}
                >
                  Blog
                </p>
                <p
                //onClick={handleOpenModal}
                >
                  Team
                </p>
                <p className="text-reset">
                  <Link href="/" className="text-reset">
                    Contact Us
                  </Link>
                </p>
              </Col>

              <Col md={6} lg={2} xl={3} className="mx-auto mb-4 custom-link">
                <h6 className="mb-4">Our Services</h6>
                <p
                //onClick={handleOpenModal}
                >
                  Multi-currency Accounts
                </p>
                <p
                //onClick={handleOpenModal}
                >
                  Virtual IBANs
                </p>
                <p
                //onClick={handleOpenModal}
                >
                  Corporate FX
                </p>
                <p>Payments to China</p>
                <p>
                  <Link href="/" className="text-reset">
                    Software Development
                  </Link>
                </p>
              </Col>
              <Col
                xs={12}
                md={6}
                lg={3}
                xl={3}
                className="mx-auto mb-4 mb-md-0 custom-link"
              >
                <h6 className="mb-4 text-center text-md-start">
                  Download Our App
                </h6>
                <p
                  className="text-center text-md-start"
                  style={{ cursor: "default" }}
                >
                  Onboard with us for an unparalleled international
                  trade payment journey
                </p>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start">
                  <div className="mb-3 mb-md-0 me-md-3">
                    <Button
                      className="bg-transparent border-0 p-0"

                      //onClick={handleOpenModal}
                    >
                      <Image
                        width={125}
                        height={40}
                        alt="Google Play"
                        src="/images/google_play.png"
                        className="img-fluid"
                      />
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="bg-transparent border-0 p-0"

                      //onClick={handleOpenModal}
                    >
                      <Image
                        width={125}
                        height={40}
                        alt="App Store"
                        src="/images/app_store.png"
                        className="img-fluid"
                      />
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center gap-3 gap-lg-0">
              <Col xs={12} md={12} lg={6}>
                <small style={{ color: "#91918e" }}>
                  EnTTerprice UAE Ltd &copy; 2025
                </small>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={6}
                className="order-1 order-lg-2 d-flex flex-column flex-md-row justify-content-lg-end align-items-center"
              >
                <h4 className="me-md-3 mb-3 mb-md-0">Follow Us</h4>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="warning"
                    className="me-2 me-md-3 py-2 px-2 social-link"

                    //onClick={handleOpenModal}
                  >
                    <FaFacebook size={28} />
                  </Button>
                  <Button
                    variant="warning"
                    className="me-2 me-md-3 py-2 px-2 social-link"

                    //onClick={handleOpenModal}
                  >
                    <IoLogoInstagram size={28} />
                  </Button>
                  <Button
                    variant="warning"
                    className="me-2 me-md-3 py-2 px-2 social-link"
                    //
                    //onClick={handleOpenModal}

                    href="https://www.linkedin.com/company/entterprice/mycompany/"
                    target="_blank"
                  >
                    <FaLinkedin size={28} />
                  </Button>
                  <Button
                    variant="warning"
                    className="me-2 me-md-4 py-2 px-2 social-link"

                    //onClick={handleOpenModal}
                  >
                    <RiYoutubeFill size={28} />
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
}
