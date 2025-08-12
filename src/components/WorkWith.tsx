import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";

const WorkWith = () => {
  const cards = [
    {
      id: 1,
      heading: "Startups",
      text: "Quick onboarding, no setup fees, and major currency support — all from day one. Entterprice helps you start simple and scale confidently.",
      icons: "/images/card_icon_1.png",
    },
    {
      id: 2,
      heading: "SME’s",
      text: "As your business expands, move money faster with real-time FX and multi-currency tools. All accessible through one secure, intuitive dashboard.",
      icons: "/images/card_icon_2.png",
    },
    {
      id: 3,
      heading: "Traders",
      text: "Streamline regular imports and vendor payments with dedicated corridor support. Entterprice ensures speed, visibility, and full compliance.",
      icons: "/images/card_icon_3.png",
    },
  ];
  return (
    <section className="partner-bg">
      <Container className="mt-5 text-center text-md-start overflow-none">
        <div className="d-block d-md-flex align-items-center gap-4">
          <Col xs={12} md={6} lg={6} className="pt-3">
            <div className="mb-lg-5 mt-lg-0 pe-lg-5">
              <h1 className="font-bold">Who We</h1>
              <h1 className="font-bold entp-text display-2">Work With</h1>
              <Row>
                <>
                  <h4
                    style={{ color: "#383838", lineHeight: "33px" }}
                    className="font-medium pe-xl-5"
                  >
                    We provide EnTTerPrice Accounts for Payout, Collection and
                    Corporate FX to Startups, SME’s and Traders within the
                    UAE-China corridor and beyond.
                  </h4>
                </>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="text-center overflow-hidden">
            <Image
              src="/images/partners.png"
              alt="Partners"
              width={500}
              height={50}
              quality={100}
              className="img-fluid mb-3 mb-md-0 mt-3 mt-lg-0"
            />
          </Col>
        </div>
        <div className="text-center">
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="d-block d-lg-flex pt-5 pb-3 pb-xl-0"
          >
            {cards.map((item: any, index: any) => (
              <Col
                key={item.id}
                xs={12}
                md={12}
                lg={4}
                className="rounded-3 pt-5 pb-3 px-2 px-xl-5 mb-2 mb-lg-0 me-lg-3"
                style={{ border: "2px solid #ededed" }}
              >
                <Col md={12}>
                  <Image
                    src={item.icons}
                    alt={`Icon ${index + 1}`}
                    width={70}
                    height={40}
                    quality={100}
                    className="img-fluid"
                  />
                </Col>
                <Col md={12} className="mt-4">
                  <h5 className="font-bold">{item.heading}</h5>
                  <p className="font-medium" style={{ color: "#6D6D6C" }}>
                    {item.text}
                  </p>
                </Col>
              </Col>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkWith;
