import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";

const WorkWith = () => {
  const cards = [
    // {
    //   id: 1,
    //   heading: "E-commerce market places",
    //   text: "Quick onboarding, no setup fees, and major currency support — all from day one. Entterprice helps you start simple and scale confidently.",
    //   icons: "/images/card_icon_1.png",
    // },
    // {
    //   id: 2,
    //   heading: "SME’s",
    //   text: "As your business expands, move money faster with real-time FX and multi-currency tools. All accessible through one secure, intuitive dashboard.",
    //   icons: "/images/card_icon_2.png",
    // },
    // {
    //   id: 3,
    //   heading: "Travel agencies and Airlines",
    //   text: "Streamline regular imports and vendor payments with dedicated corridor support. Entterprice ensures speed, visibility, and full compliance.",
    //   icons: "/images/card_icon_3.png",
    // },

    {
      id: 1,
      heading: "SMEs & Traders",
      text: "We help SMEs and global traders move money across borders with instant and secure money rails.",
      // icons: "/images/obj_1.png",
      // icons: "/images/object_1.png",
      icons: "/images/obj_svg.svg",
      // icons: "/images/traders.png",
    },
    {
      id: 2,
      heading: "Airlines & Travel Agencies",
      text: "We enable instant, transparent settlements between airlines, OTAs, and agencies.",
      icons: "/images/object_2.png",
      // icons: "/images/travel_agencies.png",
    },
    {
      id: 3,
      heading: "E-Commerce B2B Marketplaces",
      text: "We empower the trade payments of global B2B marketplaces, enabling faster, borderless, and secure transactions.",
      icons: "/images/object_3.png",
      // icons: "/images/marketplace.png",
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
                    {/* We provide Entterprice Accounts for Payout, Collection and
                    Corporate FX to Startups, SME’s and Traders within the UAE-
                    <span style={{ color: "#f8d613" }}>China</span> corridor and
                    beyond. */}
                    We provide Entterprice business accounts for payout,
                    collection & corporate FX to SMEs & Traders, Airlines &
                    Travel Agencies, E-Commerce B2B marketplaces.
                  </h4>
                </>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="text-center overflow-hidden">
            <Image
              src="/images/entp_partners.png"
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
            className="d-block d-md-flex pt-5 pb-3 pb-xl-0"
          >
            {/* {cards.map((item: any, index: any) => (
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
            ))} */}

            {cards.map((item: any, index: any) => (
              <Col
                key={item.id}
                xs={12}
                md={4}
                lg={4}
                className="rounded-3 pt-3 pt-lg-5 pb-3 b-2 mb-lg-0 me-lg-3 text-center text-xl-start"
                // style={{ border: "2px solid #ededed" }}
              >
                <Col
                  md={12}
                  className="position-relative align-items-center justify-content-center"
                >
                  {/* xl or above */}
                  <div
                  // style={{ width: "200px", height: "150px" }}
                  // className="d-none d-xl-block"
                  >
                    <Image
                      src="/images/mesh.png"
                      alt="mesh_bg"
                      width={250}
                      height={250}
                      quality={100}
                      className="img-fluid text-start position-absolute"
                      style={{ zIndex: 0 }}
                    />
                    <Image
                      src={item.icons}
                      alt={`Icon ${index + 1}`}
                      width={170}
                      height={170}
                      quality={100}
                      className="img-fluid text-start position-relative"
                      style={{ zIndex: 1 }}
                    />
                  </div>
                  {/* xs, md, lg */}
                  {/* <div className="d-block d-xl-none">
                    <Image
                      src="/images/mesh.png"
                      alt="mesh_bg"
                      width={250}
                      height={250}
                      quality={100}
                      className="img-fluid text-start position-absolute"
                      style={{ zIndex: 0 }}
                    />
                    <Image
                      src={item.icons}
                      alt={`Icon ${index + 1}`}
                      width={170}
                      height={170}
                      quality={100}
                      className="img-fluid text-start position-relative"
                      style={{ zIndex: 1 }}
                    />
                  </div> */}
                </Col>
                <Col md={12} className="mt-5 mt-lg-4 pe-xl-5">
                  <h5 className="font-bold">{item.heading}</h5>
                  <p
                    className="font-medium pe-xl-5"
                    style={{ color: "#6D6D6C" }}
                  >
                    {item.text}
                  </p>
                </Col>
              </Col>
            ))}
          </div>

          <div className="rounded-3 px-lg-4 py-3 text-center gray-border light-yellow-gradient h-100 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 h-100">
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
            <p
              style={{ fontSize: "18px" }}
              className="font-medium px-2 px-lg-5 pt-3"
            >
              By combining stablecoin efficiency with fiat accessibility,
              Entterprice empowers these industries to transact globally with
              speed, security, and trust.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkWith;
