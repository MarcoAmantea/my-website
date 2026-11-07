import logoAmalfira from "./assets/logos/icona.optimized.webp";
import logoMudif from "./assets/logos/mudif.optimized.webp";
import logoCompagnia from "./assets/logos/logo-compagnia.optimized.webp";
import logoSubzilla from "./assets/logos/subzilla.optimized.webp";
import logoGoblin from "./assets/logos/icon.optimized.webp";
import projectMudif from "./assets/projects/mudif.optimized.webp";
import projectAmalfi from "./assets/projects/amalfi.optimized.webp";
import projectSubzilla from "./assets/projects/subzilla.optimized.webp";
import projectTeatro from "./assets/projects/teatro.optimized.webp";
import projectGoblin from "./assets/projects/icon.optimized.webp";
export const projects = [{
  category: "website",
  image: projectAmalfi,
  tags: ["React", "Tailwind", "Netlify"],
  badge: {
    it: "Luxury Hospitality",
    en: "Luxury Hospitality"
  },
  liveUrl: "https://amalfiraluxuryseaviewrooftop.com/?preview=amalfi",
  title: {
    it: "AmalfiRa — Luxury Seaview Rooftop",
    en: "AmalfiRa — Luxury Seaview Rooftop"
  },
  desc: {
    it: "Sito vetrina per il B&B AmalfiRa, con focus su immagine premium, prenotazione e presentazione elegante della struttura.",
    en: "Showcase website for AmalfiRa B&B, focused on premium visuals, booking and elegant presentation."
  },
  logo: logoAmalfira // MOBILE (riquadro)
}, {
  category: "website",
  image: projectMudif,
  tags: ["Next.js", "React", "Tailwind", "Firebase", "Strapi"],
  badge: {
    it: "Museo / Archivio Digitale",
    en: "Museum / Digital Archive"
  },
  liveUrl: "https://ildidrammo.com/",
  title: {
    it: "MuDiF — Museo Didattico della Fotografia",
    en: "MuDiF — Educational Photography Museum"
  },
  desc: {
    it: "Sito istituzionale del museo didattico della fotografia, sviluppato con Next.js, React e Tailwind, con integrazione Firebase e Strapi per la gestione dei contenuti.",
    en: "Official website of the educational photography museum, built with Next.js, React and Tailwind, with Firebase and Strapi integration for content management."
  },
  logo: logoMudif // MOBILE (riquadro)
}, {
  category: "website",
  image: projectTeatro,
  logo: logoCompagnia,
  // MOBILE (riquadro)

  tags: ["React", "Tailwind", "Responsive"],
  badge: {
    it: "Teatro / Cultura",
    en: "Theatre / Culture"
  },
  liveUrl: "https://teatrolalocandina.it/",
  title: {
    it: "Sipario Aperto",
    en: "Sipario Aperto"
  },
  desc: {
    it: "Sito web per la compagnia teatrale Sipario Aperto, pensato per raccontare eventi, spettacoli, identità artistica e presenza online della compagnia.",
    en: "Website for the theatre company Sipario Aperto, designed to present events, shows and the artistic identity of the company."
  }
}, {
  category: "mobile",
  image: projectSubzilla,
  tags: ["React Native", "Android", "Reminder", "Smart Notifications"],
  badge: {
    it: "App Mobile / Productivity",
    en: "Mobile App / Productivity"
  },
  liveUrl: "https://play.google.com/store/apps/details?id=com.ienashow.abbonamentiapp",
  title: {
    it: "Subzilla",
    en: "Subzilla"
  },
  desc: {
    it: "Applicazione Android pensata per ricordare gli abbonamenti attivi, con promemoria intelligenti e notifiche utili per evitare rinnovi dimenticati.",
    en: "Android app designed to track active subscriptions, with smart reminders and notifications to avoid unwanted renewals."
  },
  logo: logoSubzilla // MOBILE (riquadro)
}, {
  category: "mobile",
  image: projectGoblin,
  tags: ["React Native", "Expo", "PIN", "Biometria"],
  badge: {
    it: "App Mobile / Security",
    en: "Mobile App / Security"
  },
  liveUrl: "https://play.google.com/store/apps/details?id=com.subzillamark.passwordgoblin&hl=it",
  title: {
    it: "Password Goblin",
    en: "Password Goblin"
  },
  desc: {
    it: "App mobile per memorizzare in modo sicuro le password dei vari servizi, protetta da PIN o impronta digitale e sviluppata con React Native ed Expo.",
    en: "Mobile app to securely store passwords for different services, protected by PIN or fingerprint and built with React Native and Expo."
  },
  logo: logoGoblin // MOBILE (riquadro)
}, {
  category: "webapp",
  image: logoCompagnia,
  youtubeId: "Ap3zyIxTrXc",
  tags: ["React", "Tailwind", "Gestionale", "Prenotazioni Posti"],
  badge: {
    it: "WebApp / Teatro",
    en: "Web App / Theatre"
  },
  liveUrl: "https://booking.teatrolalocandina.it/",
  title: {
    it: "Sistema Prenotazioni Posti — Sipario Aperto",
    en: "Seat Booking System — Sipario Aperto"
  },
  desc: {
    it: "Web app gestionale che ho progettato e sviluppato per la gestione di prenotazioni, posti e organizzazione degli spettatori.",
    en: "Management web app I designed and developed to handle bookings, seats and audience organization."
  },
  logo: logoCompagnia // MOBILE (riquadro)
}];
