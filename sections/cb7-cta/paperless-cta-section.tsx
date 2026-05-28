import { Cb7CtaSection } from "./cb7-cta-section";

/** Same CTA card as N7 section — no CB7/N7 watermark on the card. */
export function PaperlessCtaSection() {
  return (
    <Cb7CtaSection
      id="request-demo"
      backgroundText={false}
      cardVariant="flat"
      headingId="paperless-cta-banner-heading"
    />
  );
}
