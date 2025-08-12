import { Container, Col, Row, Card } from "react-bootstrap";
import Image from "next/image";

const InternationalTransaction = () => {
  const breakpoints = {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1440px",
  };

  const cards = [
    {
      id: 1,
      text: "Compliance Made Simple.",
      img: "/images/b_icon_1.png",
    },
    {
      id: 2,
      text: "Transparent, Competitive FX Rates",
      img: "/images/b_icon_2.png",
    },
    {
      id: 3,
      text: "Faster Settlement Times",
      img: "/images/b_icon_3.png",
    },
    {
      id: 4,
      text: "Full Visibility & Payment Tracking",
      img: "/images/b_icon_4.png",
    },
    {
      id: 5,
      text: "Reliable Corridor Access (UAE–China and Beyond)",
      img: "/images/b_icon_5.png",
    },
    {
      id: 6,
      text: "Built for Business Users",
      img: "/images/b_icon_6.png",
    },
  ];
  return (
    <section className="linear-bg">
      <Container fluid className="ps-xxl-custom">
        <Row className=" d-flex justify-content-center align-items-center">
          <Col md={12} lg={5} xl={4}>
            <div className="globe-container-b">
              {/* <img
                src="/images/dot_map.png"
                alt="Dotted Globe"
                className="globe-bg"
              />
            </div> */}

              <div className="globe-b position-relative">
                <div className="globe-scroll-b">
                  <img src="/images/dot_map.png" alt="map" />
                  <img src="/images/dot_map.png" alt="map" />
                </div>
                {/* <Image
                  src="/images/globe-half.png"
                  width={500}
                  height={100}
                  alt="map"
                  className="img-fluid position-absolute top-0 pe-1"
                  style={{ transform: "rotate(365deg)", zIndex: 1000 }}
                /> */}
              </div>
            </div>
          </Col>
          <Col md={12} lg={7} xl={8} className="py-5 px-4 ps-md-5 px-xl-0">
            <div className="ms-lg-5">
              <h1 className="font-bold">
                Purpose-built to facilitate
                <br />
                International Trade
              </h1>
              <h5 className="fw-medium pe-md-5">
                Pay and collect from vendors instantly, anywhere anytime,
                <br />
                using Entteprice
              </h5>
              <Row>
                <div className="d-block d-md-flex pt-5 pb-3 pb-xl-0">
                  {cards.slice(0, 3).map((item: any, index: any) => (
                    <Col
                      key={item.id}
                      xs={12}
                      md={4}
                      lg={4}
                      className="pe-lg-1 pe-xl-3"
                    >
                      <Col md={12}>
                        <Image
                          src={item.img}
                          alt={`Feature ${index + 1}`}
                          width={30}
                          height={40}
                          quality={100}
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={7} className="fw-medium mt-3">
                        <p>{item.text}</p>
                      </Col>
                    </Col>
                  ))}
                </div>
              </Row>
              <Row>
                <div className="d-block d-md-flex pt-md-5 pb-3 pb-xl-0">
                  {cards.slice(3, 6).map((item: any, index: any) => (
                    <Col
                      key={item.id}
                      xs={12}
                      md={4}
                      lg={4}
                      className="pe-lg-1 pe-xl-3"
                    >
                      <Col md={12}>
                        <Image
                          src={item.img}
                          alt={`Feature ${index + 4}`}
                          width={30}
                          height={40}
                          quality={100}
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={8} className="fw-medium mt-3">
                        <p>{item.text}</p>
                      </Col>
                    </Col>
                  ))}
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InternationalTransaction;
