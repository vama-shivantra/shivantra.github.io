import { terms } from "@/content/site-data";
import { LegalPage } from "../_components/legal-page";

export default function TermsConditionsPage() {
  return <LegalPage heading={terms.heading} updated={terms.updated} sections={terms.sections} />;
}
