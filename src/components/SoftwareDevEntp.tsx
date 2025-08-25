import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";

export default function SoftwareDevEntp() {
  const data = [
    {
      id: 1,
      img: "/images/iso_icon_1.png",
      text: "Risk-based security controls",
    },
    {
      id: 2,
      img: "/images/iso_icon_2.png",
      text: "Regular audits and vulnerability assessments",
    },
    {
      id: 3,
      img: "/images/iso_icon_3.png",
      text: "Business continuity and incident response planning",
    },
  ];
  return (
    <section>
      <Container className="my-5">
        <div
          style={{ backgroundColor: "#FFFBE4" }}
          className="rounded-3 px-2 px-lg-4 py-4 text-center mb-5 gray-border mt-3 mt-md-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <rect
              rx="8"
              ry="8"
              className="lines"
              x="0"
              y="0"
              width="100%"
              height="100%"
            />
          </svg>
          <p
            style={{ maxWidth: "1100px", fontSize: "18px" }}
            className="px-2 font-medium mx-auto"
          >
            EnTTerprice offers expert software development tailored for startups
            and SMEs across Fintech, mobile, web, and backend solutions.
            <br />
            Leveraging cutting-edge technology, we drive transformational change
            across industries and geographies. Partner with us to accelerate
            innovation and elevate your digital presence.
          </p>
        </div>
      </Container>
    </section>
  );
}
