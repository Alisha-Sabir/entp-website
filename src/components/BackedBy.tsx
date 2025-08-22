import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import technologiesData from "@/data/technologiesData";

const BackedBy = () => {
  return (
    <Container className="my-5">
      <div className="my-5">
        <h1 className="text-center fw-bold">Backed by the best</h1>
        <Row className="gy-3 mt-4 justify-content-center">
          {technologiesData.map((item: any) => (
            <Col
              xs={6}
              md={4}
              lg={3}
              xl={2}
              key={item.id}
              className="d-flex justify-content-center align-items-center"
            >
              <Card
                className="border-2 rounded-3 py-4 d-flex justify-content-center align-items-center"
                style={{ width: "12rem", height: "8rem" }}
              >
                <Image
                  src={item.image}
                  alt={item.imgAlt}
                  width={item.width}
                  height={item.height}
                  quality={100}
                  className="img-fluid px-2"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default BackedBy;
