import { Container } from "react-bootstrap";
import Image from "next/image";

export default function OurServices() {
  const data = {
    heading: "Our Services",
    description:
      "Entterprice enables businesses to make cheap, secure, transparent real-time payments to China, Hong Kong and beyond using Stablecoin Rails. We enable settlement 24/7, eliminate delays and hidden charges, reduce FX spreads, and enable utmost transparency in international trade payments. We specialize in the UAE-China trade corridor, considering that China is the UAE’s largest trading partner with annual trade volume of $135 billion in 2023, and aspire to use our partnerships with various stakeholders in the Fintech ecosystem in these jurisdictions to connect the global manufacturing hub, China, with the transit trade hub of the EMEA region, the UAE, leveraging Blockchain, DeFi, and Web 3 technology. We are licensed and operate in innovation-friendly jurisdictions such as Dubai, Hong Kong and Canada to enable this.",
  };
  return (
    <section className="mt-5 mb-3 pt-5 position-relative">
      <div className="position-absolute" style={{ top: "-200px", right: 0 }}>
        <Image
          width={250}
          height={40}
          alt="Payments"
          src="/images/right_pattern_glow.png"
          className="img-fluid"
        />
      </div>

      <Container className="pt-xl-5 light-yellow-gradient gray-border">
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
        <div className="text-center">
          <h1 className="font-bold pt-5 pt-lg-0">{data.heading}</h1>
          <div className="px-lg-5 pb-5">
            <p className="para-color px-lg-5">{data.description}</p>
            {/* {data.description &&
              data.description
                .replace(
                  /china/gi,
                  (match: any) =>
                    `<span style="color: #f8d613;">${match}</span>`
                )
                .split("\n")
                .map((line: any, idx: any) => (
                  <span
                    className="para-color"
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))} */}
          </div>
        </div>
      </Container>
    </section>
  );
}
