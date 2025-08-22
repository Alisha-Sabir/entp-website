import React, { useState } from "react";
import { Row, Col, Container, InputGroup, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Header from "@/layout/Header";
import { MdOutlineMail } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ContactHome() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  type FormFields = {
    FirstName: string;
    LastName: string;
    email: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
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

  const handleSubmitData: SubmitHandler<FormFields> = async (data) => {
    debugger;
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("result ,", result);
      debugger;
      if (response.ok) {
        console.log(result.message);
        setSuccessMessage("Email sent successfully!");
        setErrorMessage(""); // Clear any previous error message
        clearMessages();
      } else {
        console.error(result.message);
        setSuccessMessage(""); // Clear any previous success message
        setErrorMessage("Failed to send the email.");
        clearMessages();
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage(""); // Clear any previous success message
      setErrorMessage("An error occurred while sending the email.");
      clearMessages();
    }

    reset();
  };

  const onSubmit = (data: any) => {
    reset();
    console.log("onSubmit", data);
  };

  return (
    // <>
    <section
      className="home-pattern text-white"
      style={{ backgroundColor: "#22221d" }}
    >
      <Container className="pb-5 pt-lg-3">
        <Row className="d-flex align-items-center justify-content-center py-5">
          <Col
            md={12}
            lg={6}
            className="text-center text-lg-start mt-5 pe-lg-5"
          >
            <h1 className="font-bold display-4 mb-3">
              <span style={{ color: "#FFDE1F" }}>We’d Love To</span>
              <br /> Hear From You{" "}
            </h1>
          </Col>
          {/* <Col lg={2} /> */}
          <Col md={12} lg={5} className="text-center text-lg-start">
            <div className="glass-bg">
              {/* <div className="d-none d-lg-block"> */}
              <svg
                // className="position-absolute"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                  pointerEvents: "none",
                }}
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  rx="8"
                  ry="8"
                  className="lines"
                  height="100%"
                  width="100%"
                  stroke-linejoin="round"
                />
              </svg>
              {/* </div> */}
              <Row className="d-flex flex-column align-items-center mb-4 text-center px-2 px-md-4 px-lg-0">
                <Col xs={12} md={10} lg={10}>
                  <h1 className="my-4 text-center text-md-start text-lg-start">
                    Contact Us
                  </h1>

                  {/* Display success or error message */}
                  {/* {successMessage && (
              <div className="alert border border-2" role="alert">
                <Col>
                  <IoCheckmarkOutline size={40} />
                </Col>
                <Col>{successMessage}</Col>
              </div>
            )}
            {errorMessage && (
              <div className="alert border border-2" role="alert">
                <Col>
                  <IoCloseOutline size={40} />
                </Col>
                <Col>{errorMessage}</Col>
              </div>
            )} */}
                  <Form
                    // onSubmit={handleSubmit(handleSubmitData)}
                    onSubmit={handleSubmit(handleSubmitData)}
                    className="contact-form"
                  >
                    {/************ First Name **************/}
                    <Col>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="first-name" className=" gap-2">
                          First Name
                        </InputGroup.Text>
                        <Form.Control
                          {...register("FirstName", {
                            required: "This field is required",
                            pattern: {
                              value: /^[a-zA-Z]+$/,
                              message: "Invalid first name",
                            },
                          })}
                          size="lg"
                          className="border-start-0"
                          maxLength={50}
                          autoComplete="off"
                        />
                      </InputGroup>
                      {errors.FirstName && (
                        <div className="text-danger text-start pb-2">
                          {errors.FirstName.message}
                        </div>
                      )}
                    </Col>
                    {/************ Last Name **************/}
                    <Col>
                      <InputGroup className="mb-3 ">
                        <InputGroup.Text id="last-name" className=" gap-2">
                          Last Name{" "}
                        </InputGroup.Text>
                        <Form.Control
                          {...register("LastName", {
                            required: "This field is required",
                            pattern: {
                              value: /^[a-zA-Z]+$/,
                              message: "Invalid last name",
                            },
                          })}
                          size="lg"
                          className="border-start-0"
                          maxLength={50}
                          autoComplete="off"
                        />
                      </InputGroup>
                      {errors.LastName && (
                        <div className="text-danger text-start pb-2">
                          {errors.LastName.message}
                        </div>
                      )}
                    </Col>
                    {/************ Email **************/}
                    <InputGroup className="mb-3 ">
                      <InputGroup.Text id="email" className=" gap-1">
                        Email Address{" "}
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        {...register("email", {
                          required: "This field is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email",
                          },
                        })}
                        size="lg"
                        className="border-start-0"
                        maxLength={100}
                        autoComplete="off"
                      />
                    </InputGroup>
                    {errors.email && (
                      <div className="text-danger text-start pb-2">
                        {errors.email.message}
                      </div>
                    )}
                    {/************ Message **************/}
                    <InputGroup className="mb-3 ">
                      <InputGroup.Text id="message" className=" gap-2">
                        Message{" "}
                      </InputGroup.Text>
                      <Form.Control
                        {...register("message", {
                          required: "This field is required",
                        })}
                        as="textarea"
                        rows={6}
                        size="lg"
                        className="border-start-0"
                        maxLength={256}
                        autoComplete="off"
                      />
                    </InputGroup>
                    {errors.message && (
                      <div className="text-danger text-start pb-2">
                        {errors.message.message}
                      </div>
                    )}

                    <Row className="px-2">
                      {/* <Col
                          md={12}
                          className="mt-5 mb-3 d-flex justify-content-center justify-content-md-end"
                        > */}
                      <Button
                        type="submit"
                        size="lg"
                        className="rounded-3 border-0 font-medium text-dark"
                        style={{
                          backgroundColor: "#f8d613",
                          cursor: "pointer",
                          zIndex: 1,
                        }}
                      >
                        Submit
                      </Button>
                      {/* </Col> */}
                    </Row>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
          <div>
            <br />
            <br />
            <br />
          </div>
        </Row>
      </Container>
    </section>
    // </>
  );
}
