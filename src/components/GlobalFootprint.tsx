import { Container, Button, Col, Row, Card } from "react-bootstrap";
import Image from "next/image";

const GlobalFootprint = () => {
  const card = [
    {
      id: 1,
      cardText: "Dubai, UAE",
      cardImg: "/images/dubai_uae.png",
      imgAlt: "UAE",
    },
    {
      id: 1,
      cardText: "Toronto, Canada",
      cardImg: "/images/toronto.png",
      imgAlt: "Canada",
    },
    {
      id: 1,
      cardText: "Hong Kong, SAR, China",
      cardImg: "/images/hong_kong.png",
      imgAlt: "Hong Kong",
    },
    {
      id: 1,
      cardText: "Lahore, Pakistan",
      cardImg: "/images/lahore_pak.png",
      imgAlt: "Pakistan",
    },
  ];
  return (
    <>
      <section className="position-relative">
        <div
          className="position-absolute"
          style={{ bottom: "-80px", right: 0 }}
        >
          <Image
            width={280}
            height={40}
            alt="Payments"
            src="/images/right_pattern_glow.png"
            className="img-fluid"
          />
        </div>
        <Container className="mt-5 text-center pt-xl-3 overflow-none">
          <Col className="pt-3">
            <h1 className="font-bold">Our Global Footprint</h1>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <p style={{ maxWidth: "800px" }} className="para-color">
              {/* Explore Entterprice’s presence across strategic markets and
              financial corridors. */}
              Entterprice has a global presence across four jurisdictions and
              expanding.
            </p>
          </Col>
          <Row>
            {card.map((item: any) => (
              <Col md={6} lg={3} key={item.id}>
                <Card className="border-0">
                  <Image
                    src={item.cardImg}
                    alt={item.imgAlt}
                    width={550}
                    height={40}
                    className="img-fluid rounded-3"
                  />
                  <p className="font-bold mt-3" style={{ fontSize: "19px" }}>
                    {item.cardText}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GlobalFootprint;
