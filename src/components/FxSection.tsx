import { Container, Button, Col, Row, Card } from "react-bootstrap";
import Image from "next/image";

const FXSection = () => {
  return (
    <>
      <section className="fx-wave-bg">
        <Container fluid className="mt-xl-5 text-center py-3 py-xl-5">
          <Col className="pt-3">
            <h1 className="font-bold">Slash your FX Rates</h1>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <p style={{ maxWidth: "1000px" }} className="para-color">
              Get real-time mid-market rates with low commissions across UAE,
              Hong Kong, China, and key trade corridors.
            </p>
          </Col>
          <Row className="my-5">
            <Col md={6} className="text-start">
              <Image
                src="/images/img_1.png"
                alt="FX Major Currencies"
                width={700}
                height={100}
                className="img-fluid mb-3 mb-md-0 yellow-left-gradient"
                // style={{ zIndex: 1 }}
              />
            </Col>
            <Col md={6} className="text-end">
              <Image
                src="/images/img_2.png"
                alt="FX Other Currencies"
                width={700}
                height={100}
                className="img-fluid yellow-right-gradient"
                // style={{ zIndex: 1 }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FXSection;
