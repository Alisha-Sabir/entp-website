import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";

export default function IntroSection() {
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
        <Container className="p-5 pt-lg-5">
          <div className="text-center">
            <h1 className="font-bold">Introduction</h1>
            <p className="para-color">
              At Entterprice, we are committed to transparency, regulatory
              compliance, and the highest standards of security in financial
              operations. Our governance framework ensures that every
              transaction is handled with integrity, backed by international
              best practices and a proactive risk-based approach. We take pride
              in enabling secure, compliant, and responsible cross-border
              payment services for businesses globally.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
