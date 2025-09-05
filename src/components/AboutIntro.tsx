import IntroComponent from "./IntroComponent";

export default function AboutIntro() {
  return (
    <div className="my-3">
      <IntroComponent
        heading="Who We Are"
        subHeading="Entterprice is a B2B crossborder payments Fintech using innovative technology for international trade."
        description="We are registered as a Money Services Business (“MSB”) in Canada and have applied for the category 1 Retail Payment Services and Card Schemes (“RPSCS”) license in United Arab Emirates (“UAE”) and the Money Services Operator (“MSO”) license in Hong Kong.
 "
      />
    </div>
  );
}
