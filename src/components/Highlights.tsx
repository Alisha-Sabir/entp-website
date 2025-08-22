import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// New CounterCard component to handle individual cards
const CounterCard = ({
  //   icon,
  index,
  title,
  count,
  subtitle,
}: {
  //   icon: string;
  index: any;
  title: string;
  count: number;
  subtitle: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Col xs={12} md={6} lg={6} xl={4} className="card-wrapper">
      <Card className="text-center bg-transparent h-100 border-0" ref={ref}>
        <Row className="my-3">
          <Col xs={12} md={12} lg={12} xl={12}>
            <div className="py-lg-4 ms-0 ms-lg-3 ms-xl-0">
              {/* lg , xl */}
              <h1
                style={{ color: "#EECD0F", fontSize: "100px" }}
                className="font-bold d-none d-lg-block"
              >
                {inView && <CountUp start={0} end={count} duration={2} />}
                {index === 0 && "K+"}
                {index > 0 && "+"}
              </h1>
              {/* xs , md */}
              <h1
                style={{ color: "#EECD0F", fontSize: "60px" }}
                className="font-bold d-block d-lg-none"
              >
                {inView && <CountUp start={0} end={count} duration={2} />}
                {index === 0 && "K+"}
                {index > 0 && "+"}
              </h1>

              <h1 className="fs-5 font-medium px-lg-5">{title}</h1>
            </div>
          </Col>
        </Row>
      </Card>
      {index === 0 && (
        <div className="gray-glow-line d-none d-lg-block d-xl-none"></div>
      )}
      {index < 2 && <div className="gray-glow-line d-none d-xl-block"></div>}
    </Col>
  );
};

// Main Counter component
const Highlights = () => {
  interface Text {
    // icon: string;
    title: string;
    count: number;
    subtitle: string;
  }

  const text: Text[] = [
    {
      //   icon: "https://entterprice-dev.s3.me-central-1.amazonaws.com/Entterprice_images/transact_icon.png",
      title: "Man-days od experience",
      count: 25,
      subtitle: "Countries",
    },
    {
      //   icon: "https://entterprice-dev.s3.me-central-1.amazonaws.com/Entterprice_images/capabilities_icon.png",
      title: "Technologies and core area expertise",
      count: 50,
      subtitle: "Currencies",
    },
    {
      //   icon: "https://entterprice-dev.s3.me-central-1.amazonaws.com/Entterprice_images/presence_icon.png",
      title: "Countries with our presence and clientele",
      count: 4,
      subtitle: "Countries",
    },
  ];

  return (
    <Container className="mt-5 pt-5">
      <div className="highlight-border p-5">
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
        <h1 className="font-bold text-center">Key Highlights</h1>

        <Row className="d-flex flex-row justify-content-center">
          {text.map((item, index) => (
            <CounterCard
              key={index}
              index={index}
              // icon={item.icon}
              title={item.title}
              count={item.count}
              subtitle={item.subtitle}
            />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Highlights;
