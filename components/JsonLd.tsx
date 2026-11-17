import { site } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.fullName,
    url: "https://hairplay.hu",
    image: "https://hairplay.hu/images/logo.png",
    logo: "https://hairplay.hu/images/logo.png",
    description:
      "Szegedi fodrászat. Vágás, festés, balayage. Petra, Máríná és Dorina. Jósika utca 1.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      postalCode: site.zip,
      addressCountry: "HU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.2550317,
      longitude: 20.1426858,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Thursday"],
        opens: "13:00",
        closes: "19:00",
      },
    ],
    sameAs: [site.facebook, site.instagram],
    priceRange: "$$",
    currenciesAccepted: "HUF",
    paymentAccepted: "Cash",
    areaServed: "Szeged",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
