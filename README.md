# GroeiKoning website

Next.js-site voor GroeiKoning met animaties (GSAP + Lenis): diensten, werk, werkwijze, over mij, reviews, FAQ, een formulier met kwalificatievragen (verstuurd via Resend) en een Calendly-embed.

## Content aanpassen

Alle teksten staan in **`lib/content.ts`**:

- **Reviews**: staan in `reviews`. Voeg nieuwe Google-reviews toe in hetzelfde formaat.
- **`googleReviewsUrl`**: zet hier de link naar je Google-bedrijfsprofiel.
- **Portfolio**: zet screenshots in `public/portfolio/` (bijv. `van-duijn.jpg`, liggend, ±1600×1000) en vul per project `image` en `url` in.
- **Telefoonnummer**: vul `phone` in, dan verschijnt het in de header, bij contact en in de footer.
- **Foto**: `public/thom.jpg` (staand, 4:5). Vervang het bestand om een andere foto te tonen.
- Logo: `public/logo.png` (origineel) en `public/logo-light.png` (voor donkere achtergronden). Favicon: `app/icon.png`.
- Animaties staan in `components/Motion.tsx`, opmaak in `app/globals.css`.

## Lokaal draaien

```bash
npm install
cp .env.example .env.local   # vul je Resend-gegevens in
npm run dev                  # http://localhost:3000
```

## Live zetten (GitHub + Vercel)

1. Maak een nieuwe repository op GitHub en upload deze map (zonder `node_modules` en `.next`).
2. Ga naar vercel.com → **Add New → Project** → kies de repository. Vercel herkent Next.js automatisch.
3. Voeg bij **Environment Variables** toe: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (zie `.env.example`).
4. Klik **Deploy**. Daarna bij **Settings → Domains** je domein `groeikoning.nl` koppelen.

## Resend instellen

1. Account op resend.com → **Domains → Add domain** → `groeikoning.nl`.
2. Zet de DNS-records die Resend geeft bij je domeinprovider en wacht tot het domein geverifieerd is.
3. Maak een API-key aan en zet die in Vercel als `RESEND_API_KEY`.

Aanvragen komen binnen met als onderwerp "Nieuwe aanvraag: [naam]". Op "Beantwoorden" klikken mailt direct de klant.
