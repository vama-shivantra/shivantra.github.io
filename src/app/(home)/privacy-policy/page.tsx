import { privacy } from "@/content/site-data";
import { LegalPage } from "../_components/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage heading={privacy.heading} updated={privacy.updated} sections={privacy.sections} />
  );
}
