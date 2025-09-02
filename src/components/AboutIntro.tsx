import IntroComponent from "./IntroComponent";

export default function AboutIntro() {
  return (
    <div className="my-3">
      <IntroComponent
        heading="Who we are"
        subHeading="Entterprice is a B2B crossborder payments Fintech using innovative technology for international trade"
        description="We are registered as a Money Services Business (“MSB”) in Canada and have applied for the Money Services Operator (“MSO”) license in Hong Kong and the category 1 Retail Payment Services and Card Schemes (“RPSCS”) License in United Arab Emirates (“UAE”).
 "
      />
    </div>
  );
}
