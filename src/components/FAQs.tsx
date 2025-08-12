import Head from "next/head";
import React, { useState } from "react";
import Header from "../layout/Header";
import { Container, Accordion, Col, Row } from "react-bootstrap";
import Image from "next/image";
import faqsData from "@/data/faqsData";

const FaQs = () => {
  return (
    <>
      <section id="FaQs" style={{ backgroundColor: "#FFD700" }}></section>
      <Container className="my-5">
        <Row className="d-flex flex-column align-items-center mb-4">
          <Col className="mb-5 text-center">
            <h1>FAQs</h1>
          </Col>
          <Col md={10} xl={8} className="text-start">
            <Accordion>
              {faqsData.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                  <Accordion.Header>
                    <h5>{faq.question}</h5>
                  </Accordion.Header>
                  <Accordion.Body style={{ fontSize: "19px" }}>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FaQs;
