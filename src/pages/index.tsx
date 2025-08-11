import BusinessPayment from "@/components/BusinessPayment";
import FXSection from "@/components/FxSection";
import GlobalFootprint from "@/components/GlobalFootprint";
import HomeSection from "@/components/HomeSection";
import InternationalTransaction from "@/components/InternationalTransaction";
import RelationshipManager from "@/components/RelationshipManager";
import TeamComponent from "@/components/TeamComponent";
import TrackSection from "@/components/TrackSection";
import TransferAnywhere from "@/components/TransferAnywhere";
import WorkWith from "@/components/WorkWith";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NewsLetter from "@/layout/NewsLetter";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <BusinessPayment />
      <InternationalTransaction />
      {/* <div style={{ position: "relative" }}>
        <NewsLetter
          style={{
            position: "absolute",
            top: "-500px",
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        />
        <Footer
          style={{
            backgroundColor: "#22221D",
            position: "relative",
            zIndex: 1,
            paddingTop: "120px",
          }}
        />
      </div> */}
      <WorkWith />
      <FXSection />
      <TransferAnywhere />
      {/* <RelationshipManager /> */}
      <TrackSection />
      {/* <GlobalFootprint /> */}
      <div className="newsletter-container">
        <NewsLetter />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
      {/* <NewsLetter />
      <Footer /> */}
    </>
  );
}
