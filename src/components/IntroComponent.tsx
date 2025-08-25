import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";

interface IntroComponentProps {
  heading: string;
  description: string;
  subHeading?: string;
  showImage?: boolean;
  padding?: boolean;
}

export default function IntroComponent({
  heading,
  description,
  subHeading,
  showImage = true,
  padding = false,
}: IntroComponentProps) {
  return (
    <>
      <section className="position-relative">
        {showImage && (
          <div
            className="position-absolute"
            style={{ top: "-200px", right: 0 }}
          >
            <Image
              width={250}
              height={40}
              alt="Payments"
              src="/images/right_pattern_glow.png"
              className="img-fluid"
            />
          </div>
        )}
        <Container className="pt-xl-5 p-lg-5">
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
            {padding ? (
              <div className="px-lg-5">
                {/* <p className="para-color px-lg-5">{description}</p> */}
                {description &&
                  description
                    .replace(
                      /china/gi,
                      (match: any) =>
                        `<span style="color: #f8d613;">${match}</span>`
                    )
                    .split("\n")
                    .map((line: any, idx: any) => (
                      <span
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
              </div>
            ) : (
              description &&
              description
                .replace(
                  /china/gi,
                  (match: any) =>
                    `<span style="color: #f8d613;">${match}</span>`
                )
                .split("\n")
                .map((line: any, idx: any) => (
                  <p
                    key={idx}
                    className="para-color"
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
