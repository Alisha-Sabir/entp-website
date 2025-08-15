import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";

interface DataItem {
  heading: string;
  subHeading?: string;
  description: string;
}

interface DataProps {
  img: string;
  imgAlt: string;
  text?: string;
  data: DataItem[];
}

const DetailsComponent = ({ img, imgAlt, text, data }: DataProps) => {
  return (
    <section className="yellow-gradient">
      <Container className="mt-5 text-center text-md-start overflow-none py-5">
        <div className="d-block d-md-flex align-items-center gap-4">
          <Col xs={12} md={6} lg={6} className="pt-3">
            <Image
              src={img}
              alt={imgAlt}
              width={600}
              height={100}
              quality={100}
              className="img-fluid mb-3 mb-md-0 mt-3 mt-lg-0"
            />
            <p className="para-color mt-3 ms-4">{text}</p>
          </Col>
          <Col xs={12} md={6} lg={6}>
            {data.map((item: any) => (
              <div key={item.id}>
                <h5 className="font-bold">{item.heading}</h5>
                <p style={{ color: "#6d6d6c" }} className="font-medium">
                  <b>{item.subHeading}</b>
                  {item.description}
                </p>
              </div>
            ))}
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default DetailsComponent;
