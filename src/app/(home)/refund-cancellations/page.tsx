import { refund } from "@/content/site-data";
import { LegalPage } from "../_components/legal-page";

export default function RefundCancellationsPage() {
  return <LegalPage heading={refund.heading} updated={refund.updated} sections={refund.sections} />;
}
