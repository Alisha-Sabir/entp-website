import React, { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

const NewsLetter = ({ style }: any) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  type FormFields = {
    Name: string;
    SurName: string;
    email: string;
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  // Clear message after 3 seconds
  const clearMessages = () => {
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };

  //   const handleSubmitData: SubmitHandler<FormFields> = async (data) => {
  //     debugger;
  //     try {
  //       const response = await fetch("/api/sendLetter", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });

  //       const result = await response.json();
  //       console.log("result ,", result);
  //       debugger;
  //       if (response.ok) {
  //         console.log(result.message);
  //         setSuccessMessage("Email sent successfully!");
  //         setErrorMessage(""); // Clear any previous error message
  //         clearMessages();
  //       } else {
  //         console.error(result.message);
  //         setSuccessMessage(""); // Clear any previous success message
  //         setErrorMessage("Failed to send the email.");
  //         clearMessages();
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       setSuccessMessage(""); // Clear any previous success message
  //       setErrorMessage("An error occurred while sending the email.");
  //       clearMessages();
  //     }

  //     reset();
  //   };

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <section style={style}>
      <Container
        className="pb-md-5 px-5 letter-bg rounded-3 shadow-lg"
        style={{
          backgroundColor: "#f8d613",
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
          <Row className="d-flex flex-row align-items-center justify-content-center px-5">
            <Col xs={12} md={8} lg={10} className="text-center pt-5">
              <Image
                src="/images/letter_box.png"
                alt="newsletter_icon"
                width={150}
                height={150}
                quality={100}
                className="img-fluid"
              />
              <h1 className="fw-bold">Subscribe To Our Newsletter</h1>
              <p className="fs-5" style={{ fontWeight: 500 }}>
                Stay updated on new features, FX insights, market trends, and
                smarter ways to move money globally.
              </p>
            </Col>
          </Row>
          <Row className="my-3 px-5">
            <Col xs={12} md={4} lg={4} className="mb-4 mb-md-0">
              <Form.Control
                type="text"
                placeholder="Name"
                {...register("Name", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Invalid first name",
                  },
                })}
                size="lg"
                className="  py-2"
                maxLength={50}
              />
              {errors.Name && (
                <div className="text-start pt-2 ps-2 text-danger">
                  {errors.Name.message}
                </div>
              )}
            </Col>
            <Col xs={12} md={4} lg={4} className="mb-4 mb-md-0">
              <Form.Control
                type="text"
                placeholder="Surname"
                {...register("SurName", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Invalid surname",
                  },
                })}
                size="lg"
                className="  py-2"
                maxLength={50}
              />
              {errors.SurName && (
                <div className="text-start pt-2 ps-2 text-danger">
                  {errors.SurName.message}
                </div>
              )}
            </Col>
            <Col xs={12} md={4} lg={4} className="mb-4 mb-md-0">
              <Form.Control
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                size="lg"
                className="  py-2"
                maxLength={100}
              />
              {errors.email && (
                <div className="text-start pt-2 ps-2 text-danger">
                  {errors.email.message}
                </div>
              )}
            </Col>
          </Row>
          {/* Display success or error message */}
          {successMessage && (
            <div className="alert border border-2 text-center" role="alert">
              <Col>
                <IoCheckmarkOutline size={40} />
              </Col>
              <Col>{successMessage}</Col>
            </div>
          )}
          {errorMessage && (
            <div className="alert border border-2 text-center" role="alert">
              <Col>
                <IoCloseOutline size={40} />
              </Col>
              <Col>{errorMessage}</Col>
            </div>
          )}
          <Row>
            <Col
              xs={12}
              md={12}
              lg={12}
              className="mb-4 mt-3 mb-md-0 d-flex justify-content-center"
            >
              <Button
                type="submit"
                variant="warning"
                className="rounded-2 px-5 py-2 border-0 btn-black inter-font"
              >
                Subscribe
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};
export default NewsLetter;
