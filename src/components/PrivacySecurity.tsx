import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";
import { PiSealCheckFill } from "react-icons/pi";

export default function PrivacySecurity() {
  const listItems = [
    "ISO/IEC 27001: Information Security Management",
    "ISO/IEC 27017: Cloud Security",
    "ISO/IEC 27018: Data Protection",
    "SOC 1, SOC 2, SOC 3 Reports",
    "PCI DSS Compliance",
    "CSA STAR Certification",
    "GDPR Alignment",
  ];

  return (
    <>
      <section>
        <Container
          style={{ color: "#6D6D6C" }}
          className="p-2 p-xl-5 pt-lg-5 font-medium"
        >
          <div className="text-center mt-5 mt-lg-0">
            <h1 className="font-bold text-dark">Data Privacy & Security</h1>
            <p className="para-color">
              We recognize that the integrity and security of our infrastructure
              are critical to customer trust. Our security posture includes
            </p>
          </div>
          <div className="d-block d-lg-flex align-items-center">
            <Col xs={12} lg={6} className="text-center text-lg-start mt-lg-5">
              <Image
                src="/images/privacy_frame.png"
                alt="Privacy Frame"
                width={500}
                height={100}
                quality={100}
                className="img-fluid"
              />
            </Col>
            <Col xs={12} lg={6} className="pt-3 ps-lg-4 ps-xl-0">
              <div className="mb-lg-5 mt-lg-0 p-2 p-md-0">
                <h2 className="font-bold text-dark">
                  Cloud & Network Security (AWS Bahrain & UAE Regions):
                </h2>
                <p style={{ fontSize: "20px" }}>
                  We operate our systems on Amazon Web Services (AWS),
                  leveraging the following key certifications and standards
                  provided by the AWS Middle East (Bahrain and UAE) regions:
                </p>
                <ul style={{ listStyle: "none" }} className="p-0">
                  {listItems.map((item, index) => (
                    <>
                      <div key={index} className="d-flex align-items-start">
                        <Col xs={1} className="d-block d-md-none">
                          <PiSealCheckFill
                            color={"#f8d613"}
                            className="me-2 "
                          />
                        </Col>
                        <Col xs={11}>
                          <li
                            className="d-flex align-items-lg-start align-items-xl-center"
                            style={{ fontSize: "18px" }}
                            key={index}
                          >
                            <PiSealCheckFill
                              color={"#f8d613"}
                              className="me-2 mt-md-1 mt-xl-0 d-none d-md-inline-block"
                            />
                            {item}
                          </li>
                        </Col>
                      </div>
                    </>
                  ))}
                </ul>
                <p style={{ fontSize: "20px" }} className="p-0 m-0">
                  These cloud certifications ensure robust security across
                  infrastructure, access control, data encryption, and
                  operational resilience.
                </p>
              </div>
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
}
