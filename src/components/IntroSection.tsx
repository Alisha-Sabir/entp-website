import IntroComponent from "./IntroComponent";

export default function IntroSection() {
  return (
    <div className="mt-5 mt-xl-3">
      <IntroComponent
        heading="Introduction"
        description="At EnTTerprice, we are committed to transparency, regulatory
              compliance, and the highest standards of security in financial
              operations. Our governance framework ensures that every
              transaction is handled with integrity, backed by international
              best practices and a proactive risk-based approach. We take pride
              in enabling secure, compliant, and responsible cross-border
              payment services for businesses globally."
      />
    </div>
  );
}
