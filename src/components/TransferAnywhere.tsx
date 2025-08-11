import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import transferAnywhereData from "@/data/transferAnywhereData";
import Slider from "react-slick";

const TransferAnywhere = () => {
  const settings = {
    infinite: true,
    slidesToShow: 9,
    autoplay: true,
    speed: 19000,
    pauseOnHover: false, // Prevent pause on hover
    pauseOnFocus: false, // Prevent pause on focus
    autoplaySpeed: 0,
    // className: "center",
    // centerMode: true,
    cssEase: "linear",
    slidesToScroll: 9,
    // dots: true,
    responsive: [
      {
        breakpoint: 576, // xs 576px
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 2,
          infinite: true,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      },
      {
        breakpoint: 768, // md 768px
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
          infinite: true,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      },
      {
        breakpoint: 1024, // lg and xl
        settings: {
          slidesToShow: 4,
          // slidesToScroll: 5,
          infinite: true,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 9,
          // slidesToScroll: 5,
          infinite: true,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      },
    ],
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#22221D" }}>
      <Container fluid className="overflow-hidden py-3">
        <Row className="justify-content-center text-center align-items-center">
          <div className="mt-5">
            <h1 className="font-bold text-white">Transfer Anywhere!</h1>
            <h4 className="font-semiBold text-white">
              Pay suppliers and partners in 10+ currencies
            </h4>
          </div>
        </Row>
        <div className="overflow-hidden my-5 slider-container">
          <Slider {...settings} className="slider-container mb-5">
            {transferAnywhereData.map((item: any) => {
              return (
                <div key={item.id} className="py-3 pb-5">
                  <Card
                    style={{ maxWidth: "130px" }}
                    className="d-flex align-items-center currency-card border-1 border-secondary"
                  >
                    <Image
                      src={item.cardImg}
                      alt={item.imgAlt}
                      width={90}
                      height={83}
                      quality={100}
                      className="img-fluid pt-3 currency-image"
                    />
                    <span className="py-4">{item.cardText}</span>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default TransferAnywhere;
