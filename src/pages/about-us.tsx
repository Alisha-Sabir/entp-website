import Footer from "@/layout/Footer";
import AboutHome from "@/components/AboutHome";
import Header from "@/layout/Header";
import AboutIntro from "@/components/AboutIntro";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisionMission from "@/components/VisionMission";
import BackedBy from "@/components/BackedBy";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function AboutUs() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader opacity={"50%"} />}

      <Header />
      <AboutHome />
      <AboutIntro />
      <WhyChooseUs />
      <VisionMission />
      <BackedBy />
      <Footer padding={false} />
    </>
  );
}
