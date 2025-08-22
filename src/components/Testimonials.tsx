import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      img: "/images/user_1.png",
      miniImg: "/images/user_1_mini.png",
      userName: "Carolyn Willms",
      stars: 5,
      designation: "Global Accountability Officer",
      remarks:
        "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    },
    {
      id: 2,
      img: "/images/user_2.png",
      miniImg: "/images/user_2_mini.png",
      userName: "John Doe",
      stars: 4,
      designation: "Chief Technology Officer",
      remarks:
        "Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    },
    {
      id: 3,
      img: "/images/user_3.png",
      miniImg: "/images/user_3_mini.png",
      userName: "Jane Smith",
      stars: 5,
      designation: "Product Manager",
      remarks:
        "Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const handleSelect = (index: any) => {
    setActiveIndex(index);
  };

  const activeTestimonial = data[activeIndex];

  return (
    <section className="pb-5 ps-xxl-custom">
      <Container>
        <div className="text-center">
          <h1 className="font-bold">What Our Happy Clients Say</h1>
          <p style={{ maxWidth: "1000px" }} className="para-color mx-auto">
            Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing
            felis at. Integer at dictum ullamcorper magna nam eget.{" "}
          </p>
        </div>
        <Row className="align-items-start">
          <Col md={5} className="text-center order-2 order-lg-1">
            <Image
              src={activeTestimonial.img}
              alt={activeTestimonial.userName}
              width={500}
              height={500}
              className="img-fluid rounded-4"
              style={{
                borderLeft: "8px solid #ffd700",
                borderTopLeftRadius: "30%",
                borderBottomLeftRadius: "30%",
              }}
            />
            <h1 className="mt-3 font-bold display-5 text-start ms-3">
              {activeTestimonial.userName}
            </h1>
            <p className="text-start ms-3 fs-5">
              {activeTestimonial.designation}
            </p>
          </Col>

          <Col md={6} className="order-1 order-lg-2">
            <div>
              <div className="text-end">
                <ImQuotesLeft
                  size={150}
                  color="#f8d613"
                  className="mb-3 text-end"
                  style={{ opacity: "0.2" }}
                />
              </div>
              <div className="d-none d-lg-block">
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <p className="para-color">{activeTestimonial.remarks}</p>

              <div className="mb-3">
                {[...Array(activeTestimonial.stars)].map((_, index) => (
                  <RiStarSFill key={index} color="#f8d613" size={30} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="text-end ps-1 ps-lg-4">
        <div
          className="d-flex flex-column align-items-end gap-2 pe-5"
          style={{
            backgroundImage: `url("/images/Testimonials.png")`,
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            // position: "absolute",
            zIndex: 3,
            // left: "-10px",
          }}
        >
          <div className="d-flex align-items-end mb-2 pe-5">
            {data
              .filter((_, index) => index !== activeIndex)
              .map((item, index) => (
                <Image
                  key={item.id}
                  src={item.miniImg}
                  width={150}
                  height={150}
                  alt={item.userName}
                  onClick={() => handleSelect(index)}
                  className="rounded-5 img-fluid me-2"
                  style={{ objectFit: "contain" }}
                />
              ))}
          </div>
          <div className="pe-5">
            <Button
              style={{
                backgroundColor: "#FFDE1F",
                color: "white",
              }}
              variant="warning"
              onClick={handleNext}
              className="px-5 border-0 py-2 me-2"
            >
              Next &gt;
            </Button>
          </div>
        </div>
      </Row>
    </section>
  );
};

export default Testimonial;
