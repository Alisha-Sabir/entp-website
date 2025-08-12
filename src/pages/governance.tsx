import AMLSection from "@/components/AMLSection";
import IntroSection from "@/components/IntroSection";
import ISOCompliance from "@/components/ISOCompliance";
import PrivacySecurity from "@/components/PrivacySecurity";
import RegulatoryCompliance from "@/components/RegulatoryCompliance";
import SecurityHome from "@/components/SecurityHome";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <SecurityHome />
      <IntroSection />
      <RegulatoryCompliance />
      <AMLSection />
      <PrivacySecurity />
      <ISOCompliance />
      {/* <div className="d-none d-md-block" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: -400,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        >
          <NewsLetter />
        </div>
        <div style={{ marginTop: "500px" }}>
          <Footer />
        </div>
      </div> */}

      {/* <div className="d-md-none">
        <NewsLetter /> */}
      <Footer />
      {/* </div> */}
    </>
  );
}
