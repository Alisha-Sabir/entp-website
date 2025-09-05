import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

export default function SearchOpportunities() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const handleSubmitData = (data: any) => {
    reset();
    console.log("data", data);
  };
  return (
    <section className="pt-5">
      <Container
        // fluid
        style={{ color: "#6D6D6C" }}
        className="mt-xl-5 text-center text-lg-start font-medium"
      >
        <div
          style={{ backgroundColor: "#FFFBE4" }}
          className="rounded-3 p-4 text-center mb-5 gray-border mt-3 mt-md-0"
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
          <h1 className="text-dark font-bold my-3 p-lg-5">
            Search Opportunities
          </h1>
          <div className="pb-5">
            <Form onSubmit={handleSubmit(handleSubmitData)}>
              <Col md={10} className="mx-auto">
                <InputGroup className="mb-3 position-relative">
                  <InputGroupText className="bg-white border-end-0">
                    <Image
                      src="/images/search.png"
                      alt="search"
                      width={25}
                      height={25}
                      className="img-fluid"
                    />
                  </InputGroupText>

                  <Form.Control
                    size="lg"
                    placeholder="Search Here"
                    {...register("FirstName", {
                      required: "This field is required",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Invalid first name",
                      },
                    })}
                    maxLength={50}
                    className="form-control-search border-start-0"
                    style={{ paddingRight: "140px" }}
                  />

                  <div
                    className="position-absolute end-0 top-50 translate-middle-y d-none d-lg-block"
                    style={{ zIndex: 5 }}
                  >
                    <Button
                      size="lg"
                      style={{
                        backgroundColor: "#FFDE1F",
                        color: "black",
                      }}
                      onClick={() => reset()}
                      className="px-5 border-0 font-medium me-2"
                    >
                      Search
                    </Button>
                  </div>
                  <Button
                    style={{
                      backgroundColor: "#FFDE1F",
                      color: "black",
                    }}
                    onClick={() => reset()}
                    className="border-0 font-medium me-2 d-block d-lg-none"
                  >
                    Search
                  </Button>
                </InputGroup>
              </Col>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}
