import Image from "next/image";
import { Container, Col, Row, Button } from "react-bootstrap";

interface DataItem {
  heading?: string;
  subHeading?: string;
  description?: string;
  subText?: string;
}

interface DataProps {
  img: string;
  imgAlt: string;
  text?: string;
  btn?: boolean;
  data: DataItem[];
  background?: string;
  sectionHeading?: string;
  centerHeading?: string;
  leftImg?: boolean;
  rightImg?: boolean;
  descriptionStyle?: React.CSSProperties;
  backgroundColor?: any;
}

const DetailsComponent = ({
  img,
  imgAlt,
  text,
  sectionHeading,
  centerHeading,
  data,
  descriptionStyle = { color: "#6d6d6c" },
  leftImg = true,
  rightImg = false,
  btn = false,
  background = "yellow-gradient",
}: DataProps) => {
  return (
    <section className={background}>
      <Container
        // fluid
        className="text-center text-md-start py-xl-5"
      >
        {centerHeading && (
          <h1 className="text-center font-bold py-5">{centerHeading}</h1>
        )}
        <div className="d-block d-lg-flex align-items-center gap-4">
          {leftImg && (
            <Col xs={12} md={12} lg={6} className="pt-3">
              <Image
                src={img}
                alt={imgAlt}
                width={700}
                height={100}
                quality={100}
                className="img-fluid mb-3 mb-md-0 mt-3 mt-lg-0"
              />
              <p className="para-color mt-3 ms-xl-4">{text}</p>
            </Col>
          )}
          <Col xs={12} md={12} lg={6} className="pe-xl-5">
            {sectionHeading && (
              <h1 className="font-bold mt-lg-5">{sectionHeading}</h1>
            )}
            {data.map((item: any) => (
              <div key={item.id} className="mt-xl-3">
                <h5 className="font-bold">{item.heading}</h5>
                <p style={descriptionStyle} className="font-medium">
                  <b style={{ color: "#4D4D3F" }}>{item.subHeading}</b>{" "}
                  {/* <br className="d-block d-lg-none" /> */}
                  <span>{item.description}</span>
                </p>
                {item.li && (
                  <>
                    <ul
                      style={{ color: "#4D4D3F" }}
                      className="m-0 ps-3 font-medium text-start"
                    >
                      <li className="font-bold">{item.li}</li>
                    </ul>
                    <p
                      style={{ color: "#6d6d6c" }}
                      className="font-medium text-start ps-3"
                    >
                      {item.subText}
                    </p>
                  </>
                )}
              </div>
            ))}
          </Col>
          {rightImg && (
            // <Col xs={12} md={6} lg={7} className="pt-3">
            //   <Image
            //     src={img}
            //     alt={imgAlt}
            //     width={800}
            //     height={100}
            //     quality={100}
            //     className="img-fluid mb-3 mb-md-0 mt-3 mt-lg-0"
            //   />
            // </Col>
            <>
              <Col lg={6} className="pt-xl-3 d-none d-lg-block">
                <div className="position-relative">
                  <Image
                    src="/images/iban_bg.png"
                    alt="Iban BG"
                    layout="responsive"
                    width={1000}
                    height={100}
                    className="img-fluid d-none d-xl-block"
                  />
                  <div
                    className="position-absolute top-0 start-0"
                    style={{ zIndex: 10 }}
                  >
                    <Image
                      src="/images/iban_pic.png"
                      alt="Iban Pic"
                      width={600}
                      height={100}
                      className="img-fluid mt-xl-5"
                    />
                  </div>
                </div>
              </Col>
              {/* xs img */}
              <Col xs={12} className="pt-3 d-block d-lg-none">
                <Image
                  src="/images/iban_pic.png"
                  alt="Iban Pic"
                  width={1000}
                  height={100}
                  className="img-fluid mt-xl-5"
                />
              </Col>
            </>
          )}
        </div>
      </Container>
      {btn && (
        <Col className="mx-auto text-center">
          <Button
            size={"lg"}
            style={{ backgroundColor: "#FFDE1F" }}
            className="px-5 border-0 text-dark font-bold mb-3 mb-xl-0"
          >
            Get Started
          </Button>
        </Col>
      )}
    </section>
  );
};

export default DetailsComponent;
