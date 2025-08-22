import Image from "next/image";
import { Container, Col, Row, Card } from "react-bootstrap";

const Approaches = () => {
  const data = [
    {
      id: 1,
      img: "/images/bespoke.png",
      heading: "Bespoke Software Development",
      list: [
        "Tailored Solutions with Clear Timelines",
        "Detailed proposal covering development costs and timelines",
        "Comprehensive project coverage from start to finish",
        "Focused on delivering results that meet your specific requirements",
      ],
    },
    {
      id: 2,
      img: "/images/subscription.png",
      heading: "Software as a Service Subscription",
      list: [
        "Exclusive team focused solely on your project",
        "Flexible, ongoing support tailored to your evolving needs",
        "Full integration with your in-house operations for smooth collaboration",
      ],
    },
  ];
  return (
    <section>
      <Container>
        <div className="text-center mt-5">
          <h1 className="font-bold">Our Approaches</h1>
        </div>
        {/* <div className="position-absolute">
          <Image
            src="/images/approach pattern.png"
            alt="Pattern"
            width={200}
            height={200}
            quality={100}
            className="img-fluid"
            //   className={
            //     index === 1 || index === 3 ? "ps-0 ps-xl-5" : ""
            //   }
          />
        </div> */}
        {data.map((item: any, index: any) => (
          <Card className="mt-5 border-0 text-start" key={item.id}>
            <Row
              className={`d-flex align-items-center
                ${index === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Image Column */}
              <Col xs={12} lg={7} xl={6} className="text-center">
                <div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={550}
                    height={500}
                    quality={100}
                    className="img-fluid"
                    //   className={
                    //     index === 1 || index === 3 ? "ps-0 ps-xl-5" : ""
                    //   }
                  />
                </div>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={5}
                xl={6}
                className={item.id === 2 ? "pe-5" : ""}
              >
                <h2 className="font-bold mt-4 mt-lg-0">{item.heading}</h2>
                <ul className="ul-list mt-4">
                  {item.list.map((li: string, index: number) => (
                    <li
                      style={{ color: "#6D6D6C" }}
                      className="ul-list-item px-3 fs-5"
                      key={index}
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default Approaches;
