import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

export default function TechStack() {
  return (
    <section className="ps-xxl-custom">
      {/* <Container fluid className="ps-xxl-custom">
        <div className="d-flex p-0 m-0">
          <Col md={3} className="m-0 p-0">
            <Image
              src="/images/Left Lines.png"
              alt="Left Tech"
              width={500}
              height={500}
              quality={100}
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="text-center">
            <h1 className="font-bold">
              Technology Stack <br /> And Architecture Overview
            </h1>
            <p className="font-medium fs-5" style={{ color: "#6D6D6C" }}>
              Entterprice uses modern microservices, React/Angular frontends,
              and native mobile SDKs, deployed on AWS with Kubernetes and CI/CD
              for scalable, secure solutions.
            </p>
          </Col>
          <Col md={3}>
            <Image
              src="/images/Right Lines.png"
              alt="Right Tech"
              width={500}
              height={500}
              quality={100}
              className="img-fluid ms-5"
            />
          </Col>
        </div>
      </Container> */}
      {/* <Container fluid > */}
      <Row className="align-items-center justify-content-center my-5">
        <Col md={3} className="text-center text-md-start">
          <Image
            src="/images/Left Lines.png"
            alt="Left Tech"
            width={500}
            height={500}
            quality={100}
            className="img-fluid"
          />
        </Col>

        <Col md={6} className="text-center my-5 my-md-0">
          <h1 className="font-bold">
            Technology Stack <br /> And Architecture Overview
          </h1>
          <p className="font-medium fs-5" style={{ color: "#6D6D6C" }}>
            Entterprise uses modern microservices, React/Angular frontends, and
            native mobile SDKs, deployed on AWS with Kubernetes and CI/CD for
            scalable, secure solutions.
          </p>
          <Button
            style={{ backgroundColor: "#f8d613" }}
            className="py-2 px-4 font-semibold border-0 text-dark mt-2"
          >
            Learn More
          </Button>
        </Col>

        <Col md={3} className="text-end ps-5">
          <div>
            <Image
              src="/images/Right Lines.png"
              alt="Right Tech"
              width={500}
              height={500}
              quality={100}
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
}
