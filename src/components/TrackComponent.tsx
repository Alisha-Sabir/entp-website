import Image from "next/image";
import { describe } from "node:test";
import { Container, Button, Col, Row, Form } from "react-bootstrap";

interface DataProps {
  pattern?: boolean;
  heading: string;
  description?: string;
  list?: any[];
}

const TrackComponent = ({
  pattern = true,
  heading,
  description,
  list,
}: DataProps) => {
  return (
    <>
      <section className="position-relative">
        {pattern && (
          <div className="position-absolute" style={{ top: "-200px" }}>
            <Image
              width={200}
              height={40}
              alt="Glow Pattern"
              src="/images/left_pattern_glow.png"
              className="img-fluid"
            />
          </div>
        )}
        <Container className="mt-xl-5 text-center text-md-start pt-xl-3 overflow-none">
          <div className="d-block d-md-flex align-items-center">
            <Col xs={12} md={6} lg={6}>
              <h1 className="font-bold">{heading}</h1>
              <p className="para-color">{description}</p>
              {list && (
                <ul>
                  {list.map((item, index) => (
                    <li key={item.index} className="para-color text-start">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="d-flex flex-column flex-md-row align-items-stretch gap-3 track-input">
                <Col xs={12} md={8} lg={6} xl={6}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Transaction ID"
                    size="lg"
                    // className="rounded-1 flex-grow-1"
                    className="rounded-1"
                    maxLength={50}
                    style={{
                      height: "48px",
                    }}
                  />
                </Col>
                <Col xs={12} md={4} lg={6} xl={2}>
                  <Button
                    className="btn-yellow px-5 mb-4 mb-md-0"
                    style={{
                      width: "100px",
                      height: "48px",
                      fontSize: "16px",
                    }}
                  >
                    Track
                  </Button>
                </Col>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6} className="text-end overflow-hidden">
              <Image
                width={550}
                height={40}
                alt="Globe"
                src="/images/payment_globe.png"
                className="img-fluid mb-5 mb-md-0"
              />
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TrackComponent;
