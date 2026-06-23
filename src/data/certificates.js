/* =============================================================================
   certificates.js — the Certificates section, as data.

   Feeds the {{#each certificates}} loop in src/partials/certificates.html.
   Certificate titles/issuers are proper nouns and are NOT translated, so these
   records have no { en, id } shape and never touch the I18N dictionary.
   ============================================================================= */

/**
 * @typedef {Object} Certificate
 * @property {string} year
 * @property {string} title
 * @property {string} issuer
 * @property {string} url
 */

/** @type {Certificate[]} */
export const certificates = [
  {
    year: "2024",
    title: "Learn to Create Front-End Web for Beginners",
    issuer: "Dicoding Indonesia",
    url: "https://www.dicoding.com/certificates/NVP749OKRPR0",
  },
  {
    year: "2023",
    title: "Learn to Create Back-End Applications for Beginners",
    issuer: "Dicoding Indonesia",
    url: "https://www.dicoding.com/certificates/N9ZO66LQDXG5",
  },
  {
    year: "2023",
    title: "Learn Basic JavaScript Programming",
    issuer: "Dicoding Indonesia",
    url: "https://www.dicoding.com/certificates/JMZV9N5M3PN9",
  },
  {
    year: "2021",
    title: "Cloud Practitioner Essentials",
    issuer: "Dicoding Indonesia",
    url: "https://www.dicoding.com/certificates/1RXY47KQQPVM",
  },
  {
    year: "2020",
    title: "Learn Basic Web Programming",
    issuer: "Dicoding Indonesia",
    url: "https://www.dicoding.com/certificates/J1RXYR0DQPVM",
  },
  {
    year: "2020",
    title: "Laravel Web Development",
    issuer: "Sanbercode",
    url: "https://sanbercode.com/sertifikat/generate/6ee91b5b-f188-48eb-93ab-cdc3f4247069",
  },
  {
    year: "2020",
    title: "Web Development Path — Node.js",
    issuer: "Progate",
    url: "https://progate.com/path_certificate/590ac5f9qd7l6z",
  },
];
