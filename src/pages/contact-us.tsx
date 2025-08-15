import AMLSection from "@/components/AMLSection";
import ContactHome from "@/components/ContactHome";
import FAQs from "@/components/FAQs";
import FindUs from "@/components/FindUs";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NewsLetter from "@/layout/NewsLetter";

export default function ContactUs() {
  return (
    <>
      <Header />
      <ContactHome />
      <FAQs />
      <FindUs />
      <div className="d-none d-md-block" style={{ position: "relative" }}>
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
      </div>

      <div className="d-md-none">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}
