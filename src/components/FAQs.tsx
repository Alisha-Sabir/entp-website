import Head from "next/head";
import React, { useState } from "react";
import Header from "../layout/Header";
import { Container, Accordion, Col, Row } from "react-bootstrap";
import Image from "next/image";
import faqsData from "@/data/faqsData";

const FaQs = () => {
  return (
    <>
      <section id="FaQs" className="position-relative">
        <div className="position-absolute" style={{ top: "-200px", right: 0 }}>
          <Image
            width={250}
            height={40}
            alt="Payments"
            src="/images/right_pattern_glow.png"
            className="img-fluid"
          />
        </div>
        <Container className="my-5">
          <Row className="d-flex flex-column align-items-center mb-4">
            <Col className="mb-5 text-center">
              <h1 className="font-bold">FAQ's</h1>
            </Col>
            <Col md={10} xl={9} className="text-start">
              <Accordion>
                {faqsData.map((faq, index) => (
                  <Accordion.Item
                    style={{ border: "2px solid #ECECEC" }}
                    className="my-2 rounded-1"
                    eventKey={String(index)}
                    key={index}
                  >
                    <Accordion.Header>
                      <h5
                        style={{ fontSize: "17px" }}
                        className="m-0 p-0"
                        //  className="font-medium"
                      >
                        {faq.question}
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body
                      // className="font-light"
                      style={{ fontSize: "17px" }}
                    >
                      {faq.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FaQs;
