import React from "react";
import { Col, Container } from "react-bootstrap";
import Image from "next/image";

export default function OurAllServices() {
  return (
    <>
      <section
        className="position-relative"
        style={{
          background:
            "radial-gradient(circle, rgba(254, 250, 227, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <Container className="pt-lg-5">
          {/* first Row */}
          <div className="d-block d-lg-flex">
            <Col
              xs={12}
              lg={6}
              className="d-flex flex-column flex-lg-row pe-lg-2"
            >
              {/* Services */}
              <div className="d-block d-md-flex services-gradient rounded-4">
                <Col xs={12} md={6} className="p-4 p-xl-5">
                  <h1 className="text-center text-md-start text-white font-bold display-5">
                    Our Services
                  </h1>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <Image
                    src="/images/our_services.png"
                    alt="Services"
                    width={250}
                    height={250}
                    quality={100}
                    className="img-fluid"
                  />
                </Col>
              </div>
            </Col>
            {/* FinTech */}
            <Col
              xs={12}
              lg={6}
              className="d-flex flex-column flex-lg-row ps-lg-2 mt-3 mt-lg-0"
            >
              <div className="d-block d-md-flex fintech-gradient rounded-4">
                <Col xs={12} md={6} className="p-4 p-xl-5">
                  <h3 className="text-white font-bold">FinTech Solutions</h3>
                  <p style={{ color: "#C5C5C5" }}>
                    Empowering financial innovation with secure and scalable
                    technology.
                  </p>
                </Col>
                <Col xs={12} md={6} className="text-center p-3">
                  <Image
                    src="/images/fintech_service.png"
                    alt="Fintech Services"
                    width={230}
                    height={250}
                    quality={100}
                    className="img-fluid"
                  />
                </Col>
              </div>
            </Col>
          </div>
          {/* Sec App row */}
          {/* Mobile App Development */}
          <div className="d-block d-lg-flex mt-3">
            <Col
              xs={12}
              lg={4}
              className="text-center d-flex flex-column flex-lg-row pe-lg-2"
            >
              <div className="d-block d-md-flex d-lg-block mobile-app-gradient rounded-4 position-relative">
                <Col
                  xs={12}
                  md={6}
                  lg={12}
                  className="px-3 py-5 p-lg-5 text-start text-lg-center"
                >
                  <h3 style={{ color: "#4D4D3F" }} className="font-bold">
                    Mobile App Development
                  </h3>
                  <p className="font-medium" style={{ color: "#6D6D6C" }}>
                    Crafting intuitive mobile experiences for every platform.
                  </p>
                </Col>
                {/* lg img */}
                <Col lg={12} className="text-center d-none d-lg-block">
                  <Image
                    src="/images/app.png"
                    alt="App Services"
                    width={350}
                    height={250}
                    quality={100}
                    className="img-fluid position-absolute start-50 translate-middle-x"
                    style={{ bottom: "-10px" }}
                  />
                </Col>
                {/* xs , md img */}
                <Col xs={12} md={6} className="d-block d-lg-none">
                  <Image
                    src="/images/app.png"
                    alt="App Services"
                    width={350}
                    height={250}
                    quality={100}
                    className="img-fluid pt-3"
                  />
                </Col>
              </div>
            </Col>
            {/* Sec Web row */}
            {/* Website */}
            <Col
              xs={12}
              lg={8}
              className="d-flex flex-column ps-lg-2 mt-3 mt-lg-0"
            >
              <div
                className="d-block d-md-flex fintech-gradient rounded-4 position-relative"
                style={{
                  backgroundImage: `url(/images/pattern_web.png)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundColor: "#2a2a16",
                }}
              >
                {/* <div className="position-absolute right-0 end-0 bottom-0">
                  <Image
                    src="/images/web_pattern.png"
                    alt="Web Pattern"
                    width={400}
                    height={400}
                    quality={100}
                    className="img-fluid "
                  />
                </div> */}
                <Col xs={12} md={6} lg={4} className="py-5 ps-3 ps-xl-5">
                  <h2 className="text-white font-bold">Website Development</h2>
                  <p style={{ color: "#C5C5C5" }}>
                    Building responsive, high-performance websites tailored to
                    your needs.
                  </p>
                </Col>
                {/* lg above img */}
                <Col lg={8} className="text-end px-3 d-none d-lg-block">
                  <div className="position-absolute right-0 end-0 bottom-0">
                    <Image
                      src="/images/website_development.png"
                      alt="Web Services"
                      width={400}
                      height={400}
                      quality={100}
                      className="img-fluid rounded-4"
                    />
                  </div>
                </Col>
                {/* xs, md img */}
                <Col xs={12} md={6} className="text-end d-block d-lg-none">
                  <Image
                    src="/images/website_development.png"
                    alt="Web Services"
                    width={400}
                    height={400}
                    quality={100}
                    className="img-fluid rounded-4 pt-5"
                  />
                </Col>
              </div>
              {/* Sub web */}
              {/* Integration Services */}
              <div className="d-block d-lg-flex mt-3">
                <Col
                  xs={12}
                  lg={5}
                  className="d-flex flex-column flex-lg-row pe-lg-2"
                >
                  <div
                    className="d-block rounded-4 py-5 py-lg-0"
                    style={{
                      backgroundImage: `url(/images/integration_bg.png)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundColor: "#2a2a16",
                    }}
                  >
                    <Col md={12} className="text-start">
                      <Image
                        src="/images/integration_icon.png"
                        alt="Integration Services"
                        width={120}
                        height={120}
                        quality={100}
                        className="img-fluid"
                      />
                    </Col>
                    <Col md={12} className="px-4">
                      <h2 className="text-white font-bold">
                        Integration Services
                      </h2>
                      <p style={{ color: "#C5C5C5" }}>
                        Seamlessly connecting your systems for unified
                        operations.
                      </p>
                    </Col>
                  </div>
                </Col>
                <Col
                  xs={12}
                  lg={7}
                  className="d-flex flex-column flex-lg-row mt-3 mt-lg-0"
                >
                  <div className="d-block erp-gradient rounded-4 text-center">
                    <Col md={12} className="px-5 py-3">
                      <h3 className="text-white font-bold">ERP System</h3>
                      <p style={{ color: "#C5C5C5" }}>
                        Streamlining business processes with customizable
                        enterprise solutions.
                      </p>
                    </Col>
                    <Col md={12} className="text-center">
                      <Image
                        src="/images/erp_img.png"
                        alt="ERP System"
                        width={350}
                        height={250}
                        quality={100}
                        className="img-fluid rounded-bottom-5 pb-2 pb-lg-0"
                      />
                    </Col>
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
