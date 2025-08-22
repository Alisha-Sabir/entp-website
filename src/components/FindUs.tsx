import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Image from "next/image";
import findUsData from "@/data/findUsData";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function FindUs() {
  return (
    <>
      <section>
        <Container className="pt-lg-2">
          <div className="text-center">
            <h1 className="font-bold">Find Us Here</h1>
          </div>

          <Row className="g-3 mt-4">
            {findUsData.map((item) => (
              <Col key={item.id} xs={12} md={6}>
                <Card className="h-100 border-1 rounded-4">
                  <div className="px-4 py-2">
                    <Col md={12}>
                      <Image
                        src={item.img}
                        alt={item.imgAlt}
                        width={100}
                        height={100}
                        quality={100}
                        className="img-fluid my-3"
                      />
                    </Col>
                    <div className="d-block d-lg-flex align-items-end">
                      <Col xs={12} lg={9} xl={10}>
                        <h5 className="fw-bold mb-4">{item.locationName}</h5>
                        <div className="d-block d-lg-flex align-items-start">
                          <div>
                            <MdEmail className="me-2" size={20} />
                          </div>
                          <div>
                            <p
                              style={{ color: "#6d6d6c", cursor: "pointer" }}
                              className="text-decoration-underline"
                              onClick={() =>
                                (window.location.href =
                                  "mailto:info@entterprice.com")
                              }
                            >
                              {item.email}
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} lg={3} xl={2}>
                        <h5 className="fw-bold p-0 m-0">Location</h5>
                        <Image
                          src="/images/location_icon.png"
                          alt="Location"
                          width={100}
                          height={100}
                          quality={100}
                          className="img-fluid my-3"
                          onClick={() =>
                            window.open(
                              `https://www.google.com/maps?q=${item.address}`,
                              "_blank"
                            )
                          }
                          style={{ cursor: "pointer" }}
                        />
                      </Col>
                    </div>
                    <Col>
                      <div className="d-block d-lg-flex align-items-start">
                        <div>
                          <FaLocationDot className="me-2" size={20} />
                        </div>
                        <div>
                          <p
                            style={{ color: "#6d6d6c" }}
                            className="font-medium"
                          >
                            {item.address}
                          </p>
                        </div>
                      </div>
                    </Col>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <div
            className="text-center mb-3 mb-lg-0 mt-3 rounded-5 border border-1 py-5 px-2 px-lg-0"
            style={{ backgroundColor: "#fbfbfb" }}
          >
            <h1 className="font-bold">Other locations:</h1>
            <p className="para-color">
              We are actively expanding our corridors into Africa and European
              Union 
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
