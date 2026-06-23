/* =============================================================================
   projects.js — the Projects section, as data.

   Single source of truth: this array feeds BOTH the build-time markup (via the
   {{#each projects}} loop in src/partials/projects.html, wired through
   vite.config.js's handlebars context) AND the runtime EN/ID dictionary
   (src/js/i18n.js generates proj.<key>.title / proj.<key>.desc from it).

   So to add or edit a project, edit one record here — nothing else.
   `company` and `chips` are proper nouns and stay identical in both languages.
   ============================================================================= */

/** @typedef {{ en: string, id: string }} Localized */

/**
 * @typedef {Object} Project
 * @property {string}        key      stable slug → i18n key + loop key (unique)
 * @property {string}        index    two-digit display index, e.g. "01"
 * @property {string}        company  proper noun — identical in both languages
 * @property {string | null} url      live link, or null → "link coming soon"
 * @property {string[]}      chips    tech tags (proper nouns — not translated)
 * @property {Localized}     title
 * @property {Localized}     desc
 */

/** @type {Project[]} */
export const projects = [
  {
    key: "gajihub",
    index: "01",
    company: "GajiHub",
    url: "https://gajihub.com",
    chips: ["Laravel", "REST API", "React.js", "Tailwind CSS", "Inertia.js", "PHPUnit"],
    title: {
      en: "HR & Payroll API Platform",
      id: "Platform API HR & Payroll",
    },
    desc: {
      en: "RESTful payroll & HR APIs in Laravel, plus an internal admin panel built with React, Tailwind CSS, and Inertia.js.",
      id: "RESTful API payroll & HR di Laravel, ditambah panel admin internal yang dibangun dengan React, Tailwind CSS, dan Inertia.js.",
    },
  },
  {
    key: "semtek",
    index: "02",
    company: "Semtek Indonesia",
    url: "https://semtekindonesia.com",
    chips: ["Laravel", "REST API", "Bootstrap CSS"],
    title: {
      en: "Totalisator Monitoring Platform",
      id: "Platform Monitoring Totalisator",
    },
    desc: {
      en: "Web-based totalisator system with real-time transaction monitoring, customizable dashboards, and operator oversight.",
      id: "Sistem totalisator berbasis web dengan monitoring transaksi real-time, dashboard yang dapat disesuaikan, dan pengawasan operator.",
    },
  },
  {
    key: "wanderup",
    index: "03",
    company: "WanderUp Adventure",
    url: "https://wanderupadventure-fadoilulmunims-projects.vercel.app",
    chips: ["Next.js", "Bootstrap CSS"],
    title: {
      en: "Travel & Adventure Booking Site",
      id: "Situs Pemesanan Wisata & Petualangan",
    },
    desc: {
      en: "Marketing & booking site for a Karimunjawa tour operator, with curated vacation packages, detailed package pages, and WhatsApp booking inquiries.",
      id: "Situs pemasaran & pemesanan untuk operator wisata Karimunjawa, dengan paket liburan pilihan, halaman detail paket, dan pemesanan lewat WhatsApp.",
    },
  },
  {
    key: "isaluny",
    index: "04",
    company: "isaluny",
    url: "https://isaluny-main-uyspxv.free.laravel.cloud",
    chips: ["Laravel", "Filament", "Livewire", "Blade"],
    title: {
      en: "Organization & Member Management System",
      id: "Sistem Manajemen Organisasi & Anggota",
    },
    desc: {
      en: "Admin platform for managing organization data and membership, built on Laravel with a Filament admin panel.",
      id: "Platform admin untuk mengelola data organisasi dan keanggotaan, dibangun dengan Laravel dan panel admin Filament.",
    },
  },
];
