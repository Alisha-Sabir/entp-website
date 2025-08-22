import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";

const PayCollect = () => {
  interface Text {
    image: string;
    title: string;
    description: string;
  }

  const text: Text[] = [
    {
      image: "/images/pay_icon_1.png",
      title: "Payment Collection & Disbursements",
      description:
        "Chinese businesses can collect payments locally in the UAE through our virtual account facility",
    },
    {
      image: "/images/pay_icon_2.png",
      title: "Seamless Repatriation for Chinese Subsidiaries",
      description:
        "Chinese subsidiaries in the UAE can repatriate dividends, profits, or debt payments to their parent companies in China and Hong Kong.",
    },
    {
      image: "/images/pay_icon_3.png",
      title: "Digital Payment account & Optimal FX Solutions  ",
      description:
        "Traders and SME’s can hold, convert, and transfer multiple currencies and make and receive Cross Border Payments. ",
    },
  ];

  return (
    <section>
      <Container>
        <Row className="text-center pt-xl-5">
          <div>
            <Col>
              <h1 className="font-bold">
                Pay to and Collect From China & Hong Kong
              </h1>
              <p className="para-color px-xl-5">
                Facilitating seamless cross border payments at competitive FX
                Rates
              </p>
            </Col>
            {/* <Row className="justify-content-center align-items-center mt-5 d-flex">
              {text.map((item, index) => (
                <Col
                  key={index}
                  xs={12}
                  md={12}
                  lg={4}
                  className="d-flex justify-content-center flex-gow-1"
                >
                  <div
                    // style={{ backgroundColor: "#FFFBE4" }}
                    className="rounded-3 px-2 px-lg-4 py-4 text-center mb-xl-5 gray-border mt-3 mt-md-0 light-yellow-gradient"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <rect
                        rx="8"
                        ry="8"
                        className="lines"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    <Card
                      // style={{ width: "24rem", height: "20rem" }}
                      className="text-center border-0 overflow-hidden bg-transparent"
                    >
                      <div className="mt-xl-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={80}
                          height={80}
                        />
                      </div>
                      <Card.Body className="px-xl-3">
                        <Card.Title
                          style={{ color: "#4D4D3F" }}
                          className="mt-3 font-bold"
                        >
                          {item.title}
                        </Card.Title>
                        <Card.Text
                          className="font-medium"
                          style={{ color: "#6D6D6C" }}
                        >
                          {item.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row> */}
            <Row className="justify-content-center align-items-stretch mt-5">
              {text.map((item, index) => (
                <Col
                  key={index}
                  xs={12}
                  md={6}
                  lg={4}
                  className="d-flex justify-content-center mb-4"
                >
                  <div className="rounded-3 px-3 px-lg-4 py-4 text-center gray-border light-yellow-gradient h-100 w-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-100 h-100"
                    >
                      <rect
                        rx="8"
                        ry="8"
                        className="lines"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                      />
                    </svg>

                    <Card className="text-center border-0 bg-transparent h-100">
                      <div className="mt-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={80}
                          height={80}
                        />
                      </div>
                      <Card.Body className="px-3">
                        <Card.Title
                          style={{ color: "#4D4D3F" }}
                          className="mt-3 font-bold"
                        >
                          {item.title}
                        </Card.Title>
                        <Card.Text
                          className="font-medium"
                          style={{ color: "#6D6D6C" }}
                        >
                          {item.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default PayCollect;
