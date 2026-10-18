// Alle teksten en gegevens van de site staan hier. Pas dit bestand aan om content te wijzigen.

export const site = {
  name: "GroeiKoning",
  tagline: "Webdesign & marketing",
  email: "info@groeikoning.nl",
  calendlyUrl: "https://calendly.com/groeikoning-info/plan-een-meeting-60min",
  address: "Frankenburg 46, 2235 AR Valkenburg",
  kvk: "96614676",
  // Link naar je Google-bedrijfsprofiel (reviews). Vervang door je eigen link.
  googleReviewsUrl: "https://www.google.com/search?q=GroeiKoning+reviews",
};

export const services = [
  {
    title: "Website op maat",
    text: "Geen template van de plank. Een website die past bij jouw vak, jouw regio en het soort klussen dat je wilt binnenhalen.",
  },
  {
    title: "Lokaal gevonden worden",
    text: "Bovenaan in Google als iemand in jouw regio zoekt naar een loodgieter, dakdekker of aannemer. Technisch goed en met de juiste pagina's.",
  },
  {
    title: "Online adverteren",
    text: "Campagnes op Meta en Google die gericht aanvragen opleveren, met formulieren die alleen serieuze klanten doorlaten.",
  },
  {
    title: "Onderhoud & support",
    text: "Updates, hosting, aanpassingen en vragen. Wij regelen het, jij hoeft er niet naar om te kijken.",
  },
];

export const steps = [
  {
    title: "Kennismaking",
    text: "We bespreken je bedrijf, je ideale klussen en wat er nu niet goed loopt. Vrijblijvend.",
  },
  {
    title: "Voorstel op maat",
    text: "Je krijgt een helder voorstel met wat we gaan doen, wat het kost en wanneer het klaar is.",
  },
  {
    title: "Ontwerp & bouw",
    text: "We ontwerpen, schrijven de teksten en bouwen de site. Jij geeft feedback, wij verwerken het.",
  },
  {
    title: "Live & groeien",
    text: "De site gaat live en we blijven meten en verbeteren, zodat de aanvragen blijven komen.",
  },
];

export const audiences = [
  "Loodgieters",
  "Dakdekkers",
  "Installateurs",
  "Aannemers",
  "Timmerbedrijven",
  "Elektriciens",
  "Schilders",
  "Klusbedrijven",
];

// Portfolio. Zet screenshots in /public/portfolio/ en vul `image` in, bijv. "/portfolio/van-duijn.jpg".
// Vul `url` in met de live website van de klant.
export const projects: {
  name: string;
  sector: string;
  location: string;
  text: string;
  tags: string[];
  url?: string;
  image?: string;
}[] = [
  {
    name: "Van Duijn Installaties",
    sector: "Loodgieter & dakdekker",
    location: "Katwijk",
    text: "Nieuwe website voor een loodgieters- en dakdekkersbedrijf, met duidelijke diensten per vakgebied en een snelle route naar een offerte-aanvraag.",
    tags: ["Website", "Lokale SEO"],
  },
  {
    name: "Bouwgroep Alrefai",
    sector: "Timmerwerk & bouw",
    location: "Zaandam",
    text: "Complete vernieuwing van de website met de focus op timmerwerk, zodat de juiste klussen binnenkomen.",
    tags: ["Website", "Redesign"],
  },
  {
    name: "Installatiebedrijf Rens van Klaveren",
    sector: "Installatietechniek",
    location: "",
    text: "Professionele website die het vakmanschap laat zien en bezoekers makkelijk laat contact opnemen.",
    tags: ["Website"],
  },
];

// Google-reviews. VERVANG deze voorbeelden door je echte reviews (naam, tekst, aantal sterren).
// Zet `placeholder: false` per review zodra hij echt is; placeholders worden niet getoond in productie.
export const reviews: { name: string; company?: string; text: string; stars: number; placeholder?: boolean }[] = [
  {
    name: "Naam klant",
    company: "Bedrijfsnaam",
    text: "Plak hier de tekst van een echte Google-review.",
    stars: 5,
    placeholder: true,
  },
  {
    name: "Naam klant",
    company: "Bedrijfsnaam",
    text: "Plak hier de tekst van een echte Google-review.",
    stars: 5,
    placeholder: true,
  },
  {
    name: "Naam klant",
    company: "Bedrijfsnaam",
    text: "Plak hier de tekst van een echte Google-review.",
    stars: 5,
    placeholder: true,
  },
];

export const faqs = [
  {
    q: "Wat kost een website?",
    a: "Dat hangt af van wat je nodig hebt. Elk bedrijf is anders, daarom werken we altijd op maat. Na de kennismaking krijg je een helder voorstel met een vaste prijs, zonder verrassingen achteraf.",
  },
  {
    q: "Hoe lang duurt het voordat mijn website live staat?",
    a: "Meestal staat een website binnen een paar weken live. In het voorstel staat een concrete planning, zodat je precies weet waar je aan toe bent.",
  },
  {
    q: "Moet ik zelf teksten en foto's aanleveren?",
    a: "Nee. Wij schrijven de teksten op basis van een gesprek met jou. Foto's van je eigen werk zijn altijd het sterkst, dus die gebruiken we graag als je ze hebt.",
  },
  {
    q: "Ik heb al een website. Kunnen jullie die verbeteren?",
    a: "Ja. We kijken eerst wat er nu goed en minder goed werkt, en adviseren of verbeteren of opnieuw bouwen slimmer is.",
  },
  {
    q: "Kan ik later zelf dingen aanpassen?",
    a: "Ja, en als je dat liever niet doet regelen wij het voor je via onderhoud en support.",
  },
  {
    q: "Werken jullie alleen voor de bouw en installatie?",
    a: "Daar ligt onze focus. Daardoor kennen we de klanten, de zoektermen en de vragen in jouw branche, en dat zie je terug in de resultaten.",
  },
];

// Kwalificatievragen voor het formulier
export const formOptions = {
  businessTypes: [
    "Loodgieter",
    "Dakdekker",
    "Installateur",
    "Aannemer",
    "Timmerbedrijf",
    "Elektricien",
    "Schilder",
    "Anders",
  ],
  goals: ["Meer aanvragen", "Professioneler ogen", "Beter vindbaar in Google", "Anders"],
  timing: ["Zo snel mogelijk", "Binnen 1 maand", "Binnen 3 maanden", "Ik oriënteer me nog"],
};
