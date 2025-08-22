import React, { useState } from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";

const SliderTestimonials = () => {
  const data = [
    {
      id: 1,
      img: "/images/remarks_user_1.png",
      userName: "Ahmed Saleemi",
      stars: 5,
      designation: "CEO of Digitt Plus AFT",
      remarks:
        "Working with Entterprice was a game-changer for us. They developed a mobile fintech app tailored to the needs of Pakistan’s farmers — simple, intuitive, and perfectly aligned with our vision. Their ability to design technology that truly matches the user’s knowledge level has helped us onboard farmers who struggled with conventional money transfer apps.",
    },
    {
      id: 2,
      img: "/images/remarks_user_2.png",
      userName: "Shaun",
      stars: 4,
      designation: "Founder & CEO ExAim",
      remarks:
        "Entterprice delivered exactly what we needed — a reliable, scalable educational technology platform for the UAE market. Their team was professional, fast, and focused on quality from day one. I highly recommend Entterprice to any business looking for innovative and dependable software solutions.",
    },
    {
      id: 3,
      img: "/images/remarks_user_3.png",
      userName: "Muhammad Shayaan",
      stars: 5,
      designation: "Product Manager ExAim",
      remarks:
        "From a technical perspective, Entterprice exceeded our expectations. The educational web app they built for us is robust, scalable, and optimized for performance in the UAE market. Their development team was highly collaborative, ensuring smooth integration and clean code architecture throughout the project. I would strongly recommend Entterprice for any organization seeking a technically sound and future-ready software solution.",
    },
    {
      id: 4,
      img: "/images/remarks_user_4.png",
      userName: "Brandon M. Weaver",
      stars: 5,
      designation: "Navigate CEO",
      remarks:
        "Entterprice helped us bring our vision to life with a professional, user-friendly real estate website. The design is sleek, fast, and tailored to showcase our properties in the best light, which has been crucial in promoting our business online. I highly recommend Entterprice to any company looking to strengthen their digital presence.",
    },
    {
      id: 5,
      img: "/images/remarks_user_5.png",
      userName: "Lavine Hemlani",
      stars: 5,
      designation: "CEO Zenith",
      remarks:
        "Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    },
  ];

  const [allFeedbackData] = useState(data);
  const settings = {
    infinite: true,
    slidesToShow: 4, // Default for xl and above (≥1200px)
    slidesToScroll: 2,
    centerPadding: "10px",
    dots: true,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,

    cssEase: "linear",
    pauseOnHover: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 576, // xs (≤576px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, // md (≤768px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 992, // lg (≤992px)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1440, // xl (≤1440px)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
        },
      },
    ],
  };

  const generateStars = (rating: number) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          size={20}
          className="me-2"
          key={i}
          color={i <= rating ? "#F8D613" : "#ccc"}
        />
      );
    }

    return stars;
  };

  return (
    <section className="my-5">
      <Container fluid className="pb-5 overflow-hidden">
        {/* <Image
              src="/images/layer_design.png"
              alt="layer-design"
              width={1500}
              height={300}
              quality={100}
              className="img-fluid"
              style={{ marginBottom : "-200px" }}
              /> */}
        <div className="text-center">
          <h1 className="font-bold">What Our Happy Clients Say</h1>
          <p style={{ maxWidth: "1000px" }} className="para-color mx-auto">
            Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing
            felis at. Integer at dictum ullamcorper magna nam eget.{" "}
          </p>
        </div>
        <div className="slider-wrapper mt-3 mt-lg-5">
          <Slider {...settings}>
            {allFeedbackData.map((items, index) => (
              <div key={index} className="h-100 pb-5 pb-md-3 pb-lg-0">
                <Card
                  key={items.id}
                  className="feedback-card rounded-2 mx-2 h-100 "
                >
                  {/* <div className="inner"> */}
                  <Card.Body>
                    <Card.Title className="mt-4">
                      {generateStars(items.stars)}
                    </Card.Title>
                    <Card.Text className="my-3">{items.remarks}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush py-2 border-top-0">
                    <Row className="px-1 py-2 text-break">
                      <Col xs={3} md={3} lg={12} xl={3} className="text-break">
                        {/* <Image
                            src={items.profile}
                            alt={`User ${items.id}`}
                            width={50}
                            height={50}
                            quality={100}
                            className="img-fluid ms-3"
                            style={{ borderRadius: "50%", objectFit: "cover" }}
                          /> */}
                        <Image
                          src={items.img}
                          alt={`User ${items.id}`}
                          width={50}
                          height={50}
                          quality={100}
                          className="ms-2 ms-md-3"
                          style={{ borderRadius: "50%", objectFit: "cover" }}
                        />
                      </Col>
                      <Col
                        xs={9}
                        md={9}
                        lg={10}
                        xl={9}
                        className="ms-0 ms-lg-3 ms-xl-0 text-break"
                      >
                        <span className="fw-bold">{items.userName}</span>
                        <br />
                        <span style={{ color: "#55585D" }}>
                          {items.designation}
                        </span>
                      </Col>
                    </Row>
                  </ListGroup>
                  {/* </div> */}
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default SliderTestimonials;
