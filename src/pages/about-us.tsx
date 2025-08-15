import Footer from "@/layout/Footer";
import AboutHome from "@/components/AboutHome";
import Header from "@/layout/Header";
import AboutIntro from "@/components/AboutIntro";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisionMission from "@/components/VisionMission";
import BackedBy from "@/components/BackedBy";

export default function AboutUs() {
  return (
    <>
      <Header />
      <AboutHome />
      <AboutIntro />
      <WhyChooseUs />
      <VisionMission />
      <BackedBy />
      <Footer />
    </>
  );
}
