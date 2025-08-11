import React from "react";
import { Container, Col } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TeamMember {
  memberName: string;
  memberQualities: string;
  image: string;
  imgAlt: string;
}

interface TeamComponentProps {
  backgroundColor: string;
  heading?: string;
  subHeading?: any;
  members: TeamMember[];
}

export default function TeamComponent({
  backgroundColor,
  heading,
  subHeading,
  members,
}: TeamComponentProps) {
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 800,
    // autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          //   autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          //   autoplay: true,
          autoplaySpeed: 3000,
          //   dots: false,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //   autoplay: true,
          autoplaySpeed: 3000,
          //   dots: false,
        },
      },
    ],
  };

  return (
    <section style={{ backgroundColor }}>
      <Container className="mt-5 text-center text-lg-start mb-5 pb-5">
        <div className="justify-content-center d-flex">
          <Col xs={12} xl={8} className="text-center">
            <h1 className="font-bold">{heading}</h1>

            <style>
              {`
              .custom-color span {
                color: #6D6D6C;
              }
            `}
            </style>
            <div
              style={{ color: "#6D6D6C" }}
              //   className="font-bold"
              //   dangerouslySetInnerHTML={{
              //     __html: accountManagerData.subHeading,
              //   }}
            >
              {subHeading}
            </div>
          </Col>
        </div>
        <div className="slider-container manager-section overflow-hidden">
          <Slider {...sliderSettings} className="mt-4">
            {members.map((member: any, index: number) => (
              <div key={index} className="px-2 mb-4">
                <div className="manager-card">
                  <Image
                    src={member.image}
                    alt={member.imgAlt}
                    width={300}
                    height={300}
                    className="manager-image"
                  />
                  <div className="manager-overlay"></div>
                  <p className="position-absolute text-white bottom-0 ms-3 fs-5 fw-semibold manager-name">
                    {member.memberName}
                  </p>
                  <div className="manager-details rounded-3 text-start">
                    <b className="fs-5">{member.memberName}</b>
                    <p style={{ fontSize: "18px" }}>{member.memberQualities}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}
