import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";

interface IntroComponentProps {
  heading: string;
  description: string;
  subHeading?: string;
}

export default function IntroComponent({
  heading,
  description,
  subHeading,
}: IntroComponentProps) {
  return (
    <>
      <section className="position-relative">
        <div className="position-absolute" style={{ top: "-200px", right: 0 }}>
          <Image
            width={250}
            height={40}
            alt="Payments"
            src="/images/right_pattern_glow.png"
            className="img-fluid"
          />
        </div>
        <Container className="pt-5 pt-lg-0 p-lg-5 pt-lg-5">
          <div className="text-center">
            <h1 className="font-bold">{heading}</h1>
            <Col md={9} className="mx-auto">
              <div className="justify-content-center">
                <h5
                  style={{ color: "#6D6D6C" }}
                  className="font-bold mt-4 mb-2"
                >
                  {subHeading}
                </h5>
              </div>
            </Col>
            <p className="para-color">{description}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
