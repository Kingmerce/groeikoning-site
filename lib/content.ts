// Alle teksten en gegevens van de site staan hier. Pas dit bestand aan om content te wijzigen.

export const site = {
  name: "GroeiKoning",
  owner: "Thom",
  email: "info@groeikoning.nl",
  // Telefoonnummer: verschijnt in de header, bij contact en in de footer (klikbaar)
  phone: "06 17 16 69 11",
  calendlyUrl: "https://calendly.com/groeikoning-info/plan-een-meeting-60min",
  address: "Frankenburg 46, 2235 AR Valkenburg",
  kvk: "96614676",
  btw: "NL005220497B72",
  // IBAN voor in de footer, bijv. "NL00 BANK 0123 4567 89". Leeg = niet tonen.
  iban: "NL47 KNAB 0776 3308 96",
  // Link naar je Google-bedrijfsprofiel (reviews). Vervang door je eigen link.
  googleReviewsUrl: "https://www.google.com/search?q=GroeiKoning+reviews",
  // Zet hier je foto neer zodra je die hebt, bijv. "/thom.jpg" (bestand in /public)
  photo: "/thom.jpg",
};

export const usps = [
  {
    kicker: "Snel",
    title: "Snel live",
    text: "Geen trajecten van maanden. Of het nu om een website, een campagne of je vindbaarheid gaat: ik werk met korte lijntjes, zodat het snel live staat en klanten oplevert terwijl een ander bureau nog aan het plannen is.",
  },
  {
    kicker: "Bereikbaar",
    title: "Altijd bereikbaar",
    text: "Je hebt één aanspreekpunt: mij. Geen ticketsysteem en geen accountmanager die het moet navragen. Je belt of appt, en je krijgt antwoord.",
  },
  {
    kicker: "Aanvragen",
    title: "Gericht op aanvragen",
    text: "Mooi is de basis, niet het doel. Elke pagina, advertentie en tekst is erop gericht dat een bezoeker contact met je opneemt.",
  },
];

export const services = [
  {
    title: "Websites & webshops",
    text: "Een website of webshop op maat die laat zien wat je doet, vertrouwen wekt en bezoekers omzet in klanten. Inclusief teksten.",
    tags: ["Ontwerp", "Teksten", "Shopify", "Snel & mobiel"],
  },
  {
    title: "Google & Meta Ads",
    text: "Advertenties op Google, Facebook en Instagram die direct verkeer en aanvragen opleveren. Ik zet ze op, beheer ze en stuur bij.",
    tags: ["Google Ads", "Facebook", "Instagram"],
  },
  {
    title: "SEO",
    text: "Gevonden worden in Google als iemand zoekt naar wat jij aanbiedt, zonder te betalen per klik.",
    tags: ["Lokale SEO", "Techniek", "Content"],
  },
  {
    title: "E-mailmarketing",
    text: "Nieuwsbrieven en automatische e-mails die klanten terug laten komen en leads opvolgen terwijl jij aan het werk bent.",
    tags: ["Nieuwsbrieven", "Automatisering"],
  },
  {
    title: "Branding & logo",
    text: "Een logo en huisstijl die professioneel ogen en overal herkenbaar zijn: online, op je bus en op je visitekaartje.",
    tags: ["Logo", "Huisstijl"],
  },
  {
    title: "Onderhoud & hosting",
    text: "Snelle hosting, updates, back-ups en aanpassingen. Ik regel het, jij hoeft er niet naar om te kijken.",
    tags: ["Hosting", "Updates", "Support"],
  },
];

export const steps = [
  { title: "Kennismaken", text: "We bellen of drinken koffie. Ik wil weten wat je doet, wie je ideale klant is en wat er nu niet loopt." },
  { title: "Voorstel op maat", text: "Je krijgt een helder voorstel: wat ik ga doen, wat het kost en wat je kunt verwachten." },
  { title: "Bouwen & lanceren", text: "Ik zet alles op: je website, advertenties, SEO of wat er nodig is. Jij kijkt mee en geeft feedback, daarna gaat het live." },
  { title: "Meten & bijsturen", text: "Ik meet wat werkt en wat niet, en stuur continu bij. Zo blijven de aanvragen komen en haal je meer uit je budget." },
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
    q: "Wat kost het?",
    a: "Dat hangt af van wat je nodig hebt. Elk bedrijf is anders, dus ik werk altijd op maat. Na de kennismaking krijg je een helder voorstel met een vaste prijs, zonder verrassingen achteraf.",
  },
  {
    q: "Hoe ziet de samenwerking eruit?",
    a: "We starten met een kennismaking, daarna krijg je een voorstel. Als je akkoord bent ga ik aan de slag en houd ik je op de hoogte. Je hebt altijd één aanspreekpunt: mij.",
  },
  {
    q: "Hoeveel advertentiebudget heb ik nodig?",
    a: "Dat hangt af van je branche, je regio en wat je wilt bereiken. In het gesprek geef ik je een eerlijk advies over een budget dat past bij je doelen. Het advertentiebudget betaal je rechtstreeks aan Google of Meta.",
  },
  {
    q: "Wanneer zie ik resultaat?",
    a: "Advertenties kunnen binnen een paar dagen na de start aanvragen opleveren. SEO is een langere termijn: daar zie je meestal na een paar maanden het effect. Een nieuwe website werkt vanaf de dag dat hij live staat.",
  },
  {
    q: "Zit ik vast aan een contract?",
    a: "Daar maken we vooraf duidelijke afspraken over, passend bij wat je afneemt. Zo weet je precies waar je aan toe bent.",
  },
  {
    q: "Kan ik ook één losse dienst afnemen?",
    a: "Ja. Je kunt alleen een website, alleen advertenties of alleen SEO afnemen. Wil je alles samen? Dan zorg ik dat alles op elkaar aansluit, wat vaak het beste resultaat geeft.",
  },
  {
    q: "Voor wat voor bedrijven werk je?",
    a: "Voor MKB en lokale bedrijven: van installateurs en bouwbedrijven tot salons, praktijken, webshops en dienstverleners. Iedereen die online meer klanten wil.",
  },
];

// Kwalificatievragen voor het formulier
export const formOptions = {
  needs: ["Website of webshop", "Adverteren (Google/Meta)", "Beter vindbaar in Google", "E-mailmarketing", "Branding / logo", "Onderhoud & hosting"],
  hasWebsite: ["Ja", "Nee"],
  goals: ["Meer aanvragen", "Professioneler ogen", "Beter vindbaar", "Anders"],
  timing: ["Zo snel mogelijk", "Binnen 1 maand", "Binnen 3 maanden", "Ik oriënteer me nog"],
};

// Voorbeeldmeldingen in de telefoon in de hero (illustratief)
export const demoNotifications = [
  { app: "Website", title: "Nieuwe offerteaanvraag", text: "Badkamer renoveren · Leiden" },
  { app: "Google Ads", title: "Aanvraag via Google Ads", text: "Kan ik volgende week langskomen?" },
  { app: "Instagram", title: "Bericht via Instagram", text: "Hoi! Hebben jullie nog plek deze maand?" },
  { app: "Website", title: "Nieuwe afspraak", text: "Intakegesprek · donderdag 10:00" },
  { app: "Facebook", title: "Lead via Facebook", text: "Graag terugbellen over prijzen" },
];
