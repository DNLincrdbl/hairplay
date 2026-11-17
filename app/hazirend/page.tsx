import type { Metadata } from "next";
import RulesView from "@/components/RulesView";

export const metadata: Metadata = {
  title: "Házirend",
  description: "Hairplay foglalási szabályzat: lemondás, késés, új vendégek, festés konzultáció.",
  alternates: { canonical: "/hazirend" },
};

export default function RulesPage() {
  return <RulesView />;
}
