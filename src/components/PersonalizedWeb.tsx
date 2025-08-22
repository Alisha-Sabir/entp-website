import React, { useState } from "react";
import { Col, Container, Button, Row, Card } from "react-bootstrap";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

export default function PersonalizedWeb() {
  const data: any = {
    website: [
      { id: 1, text: "Navigate", img: "/images/Navigate.png" },
      { id: 2, text: "GiftHabibi", img: "/images/GiftHabibi.png" },
      {
        id: 3,
        text: "Transfer2Benidorm",
        img: "/images/Transfer2Benidorm.png",
      },
      { id: 4, text: "iShine-Trade", img: "/images/iShine-Trade.png" },
      { id: 5, text: "CarlosAcchi", img: "/images/CarlosAcchiCarlosAcchi.png" },
      { id: 6, text: "Droply", img: "/images/Droply.png" },
    ],
    mobileApp: [
      { id: 1, text: "Digitt+ Mobile App", img: "/images/digitt_app.png" },
      { id: 2, text: "Hubpay", img: "/images/Hubpay_app.png" },
      {
        id: 3,
        text: "PerfectPay",
        img: "/images/perfectpay_app.png",
      },
    ],
    webApp: [
      { id: 1, text: "ExAIm", img: "/images/exaim.png" },
      { id: 2, text: "EnTTerprice", img: "/images/entp.png" },
      {
        id: 3,
        text: "CRM",
        img: "/images/CRM_new.png",
      },
      {
        id: 4,
        text: "Digitt+",
        img: "/images/digitt.png",
      },
      {
        id: 5,
        text: "Digitt+ Business Portal",
        img: "/images/digitt_business.png",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("website");

  return (
    <>
      <section
        className="mt-xl-5 ps-xxl-custom"
        style={{
          backgroundColor: "#23231d",
        }}
      >
        {/* <Container
          fluid
          className="m-0 p-0 mt-5"
          //   style={{
          //     backgroundImage: `url("/images/personalized_web.png")`,
          //     backgroundRepeat: "no-repeat",
          //     backgroundSize: "contain",
          //     backgroundPosition: "left",
          //     backgroundColor: "#23231d",
          //   }}
        > */}
        <Row className="align-items-center">
          <Col xs={12} lg={6} xl={7}>
            <Image
              src="/images/personalized_web.png"
              alt="Web"
              width={1000}
              height={500}
              quality={100}
              className="img-fluid"
            />
          </Col>

          <Col
            xs={12}
            lg={6}
            xl={4}
            className="d-flex flex-column justify-content-center text-center text-lg-end mt-5 mt-lg-0 pe-lg-5 pe-xl-0"
          >
            <h2 className="font-bold display-5 text-white">Brand-Driven</h2>
            <h1 style={{ color: "#FFDE1F" }} className="font-bold display-3">
              Personalized
            </h1>
            <h3 className="font-bold display-3 text-white">Websites</h3>
            <h3 style={{ color: "#DEDEDE" }}>
              Tailor-Made Web Solutions That Drive Success
            </h3>
          </Col>
        </Row>

        <Container className="my-5">
          <Row className="d-flex justify-content-center text-center my-4">
            <Col xs={6} sm={4} lg={2}>
              <Button
                className={`w-100 mb-3 mb-md-0 ${
                  activeTab === "mobileApp" ? "btn-yellow" : "btn-simple"
                }`}
                onClick={() => setActiveTab("mobileApp")}
              >
                Mobile App
              </Button>
            </Col>
            <Col xs={6} sm={4} lg={2}>
              <Button
                className={`w-100 mb-3 mb-md-0 ${
                  activeTab === "webApp" ? "btn-yellow" : "btn-simple"
                }`}
                onClick={() => setActiveTab("webApp")}
              >
                Web App
              </Button>
            </Col>
            <Col xs={6} sm={4} lg={2}>
              <Button
                className={`w-100 ${
                  activeTab === "website" ? "btn-yellow" : "btn-simple"
                }`}
                onClick={() => setActiveTab("website")}
              >
                Websites
              </Button>
            </Col>
          </Row>

          <Row className="justify-content-center pb-5">
            {data[activeTab]?.map((item: any) => (
              <Col
                key={item.id}
                xs={12}
                // sm={6}
                md={6}
                lg={4}
                className="my-2"
              >
                <Card
                  style={{ border: "2px solid #6b6a61" }}
                  className="rounded-4 h-100 bg-transparent"
                >
                  <div className="p-3 bg-transparent">
                    <Image
                      src={item.img}
                      alt={item.text}
                      width={500}
                      height={300}
                      quality={100}
                      className="img-fluid"
                    />
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mt-3 text-start text-white">
                        {item.text}
                      </h5>
                      <div
                        style={{
                          border: "2px solid #6b6a61",
                        }}
                        className="rounded-5 mt-2"
                      >
                        <LuArrowRight size={30} color={"white"} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        {/* </Container> */}
      </section>
    </>
  );
}
