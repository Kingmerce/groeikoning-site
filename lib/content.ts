// Alle teksten en gegevens van de site staan hier. Pas dit bestand aan om content te wijzigen.

export const site = {
  name: "GroeiKoning",
  owner: "Thom",
  email: "info@groeikoning.nl",
  // Vul je telefoonnummer in om het in de header, bij contact en in de footer te tonen, bijv. "06 12345678"
  phone: "",
  calendlyUrl: "https://calendly.com/groeikoning-info/plan-een-meeting-60min",
  address: "Frankenburg 46, 2235 AR Valkenburg",
  kvk: "96614676",
  // Link naar je Google-bedrijfsprofiel (reviews). Vervang door je eigen link.
  googleReviewsUrl: "https://www.google.com/search?q=GroeiKoning+reviews",
  // Zet hier je foto neer zodra je die hebt, bijv. "/thom.jpg" (bestand in /public)
  photo: "",
};

export const usps = [
  {
    kicker: "Snel",
    title: "Snel live",
    text: "Geen trajecten van maanden. Ik werk kort op de bal, zodat je website live staat en klanten oplevert terwijl een ander bureau nog aan het plannen is.",
  },
  {
    kicker: "Bereikbaar",
    title: "Altijd bereikbaar",
    text: "Je hebt één aanspreekpunt: mij. Geen ticketsysteem en geen accountmanager die het moet navragen. Je belt of appt, en je krijgt antwoord.",
  },
  {
    kicker: "Aanvragen",
    title: "Gericht op aanvragen",
    text: "Mooi is de basis, niet het doel. Elke pagina, knop en tekst is erop gericht dat een bezoeker contact met je opneemt.",
  },
];

export const services = [
  {
    title: "Websites",
    text: "Een website op maat die laat zien wat je doet, vertrouwen wekt en bezoekers omzet in aanvragen. Inclusief teksten.",
    tags: ["Ontwerp", "Teksten", "Bouw", "Snel & mobiel"],
    main: true,
  },
  {
    title: "SEO",
    text: "Gevonden worden in Google als iemand in jouw regio zoekt naar wat jij aanbiedt.",
    tags: ["Lokale SEO", "Techniek", "Content"],
  },
  {
    title: "Google & Meta Ads",
    text: "Advertenties die direct verkeer en aanvragen opleveren, met een website die daar op is ingericht.",
    tags: ["Google Ads", "Facebook", "Instagram"],
  },
  {
    title: "Onderhoud & hosting",
    text: "Snelle hosting, updates, back-ups en aanpassingen. Ik regel het, jij hoeft er niet naar om te kijken.",
    tags: ["Hosting", "Updates", "Support"],
  },
];

export const steps = [
  { title: "Kennismaken", text: "We bellen of drinken koffie. Ik wil weten wat je doet, wie je ideale klant is en wat er nu niet loopt." },
  { title: "Voorstel op maat", text: "Je krijgt een helder voorstel: wat ik ga doen, wat het kost en wanneer het live staat." },
  { title: "Ontwerp & bouw", text: "Ik ontwerp, schrijf de teksten en bouw. Jij kijkt mee en geeft feedback, ik verwerk het direct." },
  { title: "Live & meer aanvragen", text: "De site gaat live. Daarna meet ik wat werkt en stuur ik bij, zodat de aanvragen blijven komen." },
];

// Portfolio. Zet screenshots in /public/portfolio/ en vul `image` in, bijv. "/portfolio/van-duijn.jpg" (liggend, ±1600×1000).
// Vul `url` in met de live website van de klant.
export const projects: {
  name: string;
  sector: string;
  location: string;
  text: string;
  tags: string[];
  url?: string;
  image?: string;
  tone: string; // achtergrondkleur van de kaart zolang er geen screenshot is
}[] = [
  {
    name: "Van Duijn Installaties",
    sector: "Loodgieter & dakdekker",
    location: "Katwijk",
    text: "Nieuwe website met duidelijke diensten per vakgebied en een snelle route naar een offerte-aanvraag.",
    tags: ["Website", "SEO"],
    tone: "#2F6AA6",
  },
  {
    name: "Bouwgroep Alrefai",
    sector: "Timmerwerk & bouw",
    location: "Zaandam",
    text: "Complete vernieuwing van de website, met de focus op timmerwerk zodat de juiste klussen binnenkomen.",
    tags: ["Website", "Redesign"],
    tone: "#1D3A57",
  },
  {
    name: "Rens van Klaveren",
    sector: "Installatiebedrijf",
    location: "",
    text: "Een professionele website die het vakmanschap laat zien en bezoekers makkelijk contact laat opnemen.",
    tags: ["Website"],
    tone: "#5590C8",
  },
];

// Google-reviews (letterlijk overgenomen van Google).
export const reviews: { name: string; company?: string; text: string; stars: number; placeholder?: boolean }[] = [
  {
    name: "Nila tika Indah",
    company: "Google-review",
    text: "Thom heeft mij zeer goed geholpen met de marketing van mijn bedrijf. Super tevreden over mijn nieuwe website i.c.m. online advertenties. Ik kan dit bedrijf absoluut aanraden! Communicatie was vlot en hij neemt ook echt de tijd voor je.",
    stars: 5,
  },
  {
    name: "Dionne van der Weg",
    company: "Google-review",
    text: "Thom heeft mij enorm goed geholpen bij de opstart van mijn bedrijf. Hij gaf praktische en waardevolle tips die direct toepasbaar waren voor mij als zzp'er.",
    stars: 5,
  },
  {
    name: "Adomu",
    company: "Google-review",
    text: "Thom, heeft ons goed geholpen , snelle en duidelijke communicatie en goede ideeën",
    stars: 5,
  },
  {
    name: "Terry",
    company: "Google-review",
    text: "Prime service snel en behulpzaam en kwaliteit top!",
    stars: 5,
  },
];

export const faqs = [
  {
    q: "Wat kost een website?",
    a: "Dat hangt af van wat je nodig hebt. Elk bedrijf is anders, dus ik werk altijd op maat. Na de kennismaking krijg je een voorstel met een vaste prijs, zonder verrassingen achteraf.",
  },
  {
    q: "Hoe snel staat mijn website live?",
    a: "Snel. Hoe snel precies hangt af van de omvang, maar in het voorstel staat een concrete planning. Daar houd ik me aan.",
  },
  {
    q: "Moet ik zelf teksten en foto's aanleveren?",
    a: "Nee. Ik schrijf de teksten op basis van ons gesprek. Foto's van je eigen bedrijf en werk zijn altijd het sterkst, dus die gebruik ik graag als je ze hebt.",
  },
  {
    q: "Ik heb al een website. Kun je die verbeteren?",
    a: "Ja. Ik kijk eerst wat er nu goed en minder goed werkt, en vertel je eerlijk of verbeteren of opnieuw bouwen slimmer is.",
  },
  {
    q: "Wat als ik later iets wil aanpassen?",
    a: "Dan stuur je me een berichtje en regel ik het. Met onderhoud en hosting hoef je je er nooit meer druk om te maken.",
  },
  {
    q: "Voor wat voor bedrijven werk je?",
    a: "Voor MKB en lokale bedrijven: van installateurs en bouwbedrijven tot salons, praktijken en dienstverleners. Iedereen die via zijn website meer klanten wil.",
  },
];

// Kwalificatievragen voor het formulier
export const formOptions = {
  needs: ["Nieuwe website", "Website verbeteren", "Beter vindbaar in Google", "Adverteren (Google/Meta)"],
  hasWebsite: ["Ja", "Nee"],
  goals: ["Meer aanvragen", "Professioneler ogen", "Beter vindbaar", "Anders"],
  timing: ["Zo snel mogelijk", "Binnen 1 maand", "Binnen 3 maanden", "Ik oriënteer me nog"],
};

// Voorbeeldmeldingen in de telefoon in de hero (illustratief)
export const demoNotifications = [
  { app: "Website", title: "Nieuwe offerteaanvraag", text: "Badkamer renoveren · Leiden" },
  { app: "Website", title: "Contactformulier", text: "Kan ik volgende week langskomen?" },
  { app: "Website", title: "Nieuwe afspraak", text: "Intakegesprek · donderdag 10:00" },
  { app: "Website", title: "Nieuwe offerteaanvraag", text: "Dakgoot vervangen · Katwijk" },
  { app: "Website", title: "Belverzoek", text: "Graag terugbellen over prijzen" },
];
