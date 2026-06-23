/* =============================================================================
   Fadoilul Mun'im — Portfolio translations
   EN/ID translation strings — the single source for copy.

   ⚑ EDITING COPY: change a string in BOTH `en` and `id` below. Every key must
     exist in both objects — checkParity() warns in the console on load, and
     `npm run check:i18n` fails the build if a key is missing or mistyped.

   ⚑ PROJECTS & EXPERIENCE are data-driven: their copy lives as { en, id }
     records in src/data/projects.js and src/data/experience.js. The proj.* and
     exp.* keys below are GENERATED from those records (see buildDataStrings), so
     the build-time markup and this runtime dictionary share one source.
   ============================================================================= */
import { projects } from "../data/projects.js";
import { experiences } from "../data/experience.js";

/* Static copy — everything that isn't a per-item project/experience string. */
const STATIC = {
  en: {
    "a11y.skip": "Skip to content",

    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "nav.downloadCv": "Download CV",
    "nav.lang.aria": "Switch language to Indonesian",
    "nav.theme.aria": "Toggle dark mode",
    "nav.menu.aria": "Toggle navigation menu",

    "hero.eyebrow": "Fullstack Developer",
    "hero.title": "Fullstack PHP Laravel Programmer",
    "hero.intro":
      "I build reliable web applications and RESTful APIs — with 4+ years of fullstack experience and a backend rooted in PHP and Laravel.",
    "hero.location": "Surabaya, Indonesia",
    "hero.availability": "Available for remote work",
    "hero.cta.work": "View Work",
    "hero.cta.cv": "Download CV",
    "hero.cta.contact": "Get in Touch",
    "hero.photoAlt": "Portrait of Fadoilul Mun'im, Fullstack Developer",

    "about.eyebrow": "About",
    "about.heading": "A bit about me",
    "about.body1":
      "I'm a fullstack programmer with over four years of experience, and more than four of those years spent building backends in PHP and Laravel. I'm comfortable across the stack — HTML, CSS, JavaScript, Bootstrap, jQuery, and MySQL — and I've spent the last year and beyond working with React.js and Tailwind CSS.",
    "about.body2":
      "I've collaborated with remote teams for 2+ years, shipping RESTful APIs, ERP systems, and payment integrations. I care about clean, well-documented code and features that hold up in production.",
    "about.stat.exp": "Years experience",
    "about.stat.remote": "Years remote",
    "about.stat.gpa": "GPA / 4.00",
    "about.stat.grad": "Best graduate",

    "skills.eyebrow": "Skills",
    "skills.heading": "Tools I work with",
    "skills.group.backend": "Backend",
    "skills.group.frontend": "Frontend",
    "skills.group.mobile": "Mobile",
    "skills.group.databases": "Databases",
    "skills.group.tools": "Tools & Practices",

    "exp.eyebrow": "Experience",
    "exp.heading": "Where I've worked",

    "proj.eyebrow": "Projects",
    "proj.heading": "Selected work",
    "proj.lead": "Highlights derived from my professional experience.",
    "proj.linkSoon": "Link coming soon",
    "proj.visitSite": "Visit site",

    "cert.eyebrow": "Certificates",
    "cert.heading": "Credentials",

    "edu.eyebrow": "Education",
    "edu.heading": "Education",
    "edu.degree": "Bachelor's Degree in Informatics Engineering",
    "edu.note": "Best graduate in the Informatics Engineering study program.",

    "contact.eyebrow": "Contact",
    "contact.heading": "Get in touch",
    "contact.lead":
      "Open to remote roles and freelance work. The fastest way to reach me is email or WhatsApp.",
    "contact.email.label": "Email",
    "contact.wa.label": "WhatsApp",
    "contact.linkedin.label": "LinkedIn",
    "contact.location.label": "Location",
    "contact.location.value": "Surabaya, Indonesia",

    "footer.tagline": "Fullstack PHP & Laravel programmer.",
    "footer.rights": "All rights reserved.",
    "footer.backToTop": "Back to top ↑",
  },

  id: {
    "a11y.skip": "Lewati ke konten",

    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.experience": "Pengalaman",
    "nav.projects": "Proyek",
    "nav.certificates": "Sertifikat",
    "nav.contact": "Kontak",
    "nav.downloadCv": "Unduh CV",
    "nav.lang.aria": "Ganti bahasa ke Bahasa Inggris",
    "nav.theme.aria": "Alihkan mode gelap",
    "nav.menu.aria": "Buka/tutup menu navigasi",

    "hero.eyebrow": "Fullstack Developer",
    "hero.title": "Fullstack PHP Laravel Programmer",
    "hero.intro":
      "Saya membangun aplikasi web dan RESTful API yang andal — dengan pengalaman fullstack lebih dari 4 tahun dan fondasi backend di PHP serta Laravel.",
    "hero.location": "Surabaya, Indonesia",
    "hero.availability": "Terbuka untuk kerja remote",
    "hero.cta.work": "Lihat Karya",
    "hero.cta.cv": "Unduh CV",
    "hero.cta.contact": "Hubungi Saya",
    "hero.photoAlt": "Potret Fadoilul Mun'im, Fullstack Developer",

    "about.eyebrow": "Tentang",
    "about.heading": "Sedikit tentang saya",
    "about.body1":
      "Saya seorang programmer fullstack dengan pengalaman lebih dari empat tahun, dan lebih dari empat tahun di antaranya saya habiskan untuk membangun backend dengan PHP dan Laravel. Saya terbiasa bekerja di seluruh lapisan teknologi — HTML, CSS, JavaScript, Bootstrap, jQuery, dan MySQL — serta lebih dari setahun terakhir menggunakan React.js dan Tailwind CSS.",
    "about.body2":
      "Saya telah berkolaborasi dengan tim remote selama lebih dari 2 tahun, mengirimkan RESTful API, sistem ERP, dan integrasi pembayaran. Saya peduli pada kode yang rapi dan terdokumentasi dengan baik serta fitur yang tangguh di lingkungan produksi.",
    "about.stat.exp": "Tahun pengalaman",
    "about.stat.remote": "Tahun remote",
    "about.stat.gpa": "IPK / 4.00",
    "about.stat.grad": "Lulusan terbaik",

    "skills.eyebrow": "Keahlian",
    "skills.heading": "Teknologi yang saya gunakan",
    "skills.group.backend": "Backend",
    "skills.group.frontend": "Frontend",
    "skills.group.mobile": "Mobile",
    "skills.group.databases": "Basis Data",
    "skills.group.tools": "Alat & Praktik",

    "exp.eyebrow": "Pengalaman",
    "exp.heading": "Tempat saya bekerja",

    "proj.eyebrow": "Proyek",
    "proj.heading": "Karya pilihan",
    "proj.lead": "Sorotan yang diambil dari pengalaman profesional saya.",
    "proj.linkSoon": "Tautan segera hadir",
    "proj.visitSite": "Kunjungi situs",

    "cert.eyebrow": "Sertifikat",
    "cert.heading": "Kredensial",

    "edu.eyebrow": "Pendidikan",
    "edu.heading": "Pendidikan",
    "edu.degree": "Sarjana Teknik Informatika",
    "edu.note": "Lulusan terbaik di program studi Teknik Informatika.",

    "contact.eyebrow": "Kontak",
    "contact.heading": "Hubungi saya",
    "contact.lead":
      "Terbuka untuk pekerjaan remote dan freelance. Cara tercepat menghubungi saya adalah lewat email atau WhatsApp.",
    "contact.email.label": "Email",
    "contact.wa.label": "WhatsApp",
    "contact.linkedin.label": "LinkedIn",
    "contact.location.label": "Lokasi",
    "contact.location.value": "Surabaya, Indonesia",

    "footer.tagline": "Programmer Fullstack PHP & Laravel.",
    "footer.rights": "Hak cipta dilindungi.",
    "footer.backToTop": "Kembali ke atas ↑",
  },
};

/**
 * Generate the proj.* / exp.* keys for one language from the shared data, so the
 * markup ({{#each}} loops) and this dictionary never drift.
 * @param {"en" | "id"} lang
 * @returns {Record<string, string>}
 */
function buildDataStrings(lang) {
  /** @type {Record<string, string>} */
  const out = {};
  for (const p of projects) {
    out[`proj.${p.key}.title`] = p.title[lang];
    out[`proj.${p.key}.desc`] = p.desc[lang];
  }
  for (const e of experiences) {
    out[`exp.${e.key}.role`] = e.role[lang];
    out[`exp.${e.key}.period`] = e.period[lang];
    out[`exp.${e.key}.location`] = e.location[lang];
    out[`exp.${e.key}.desc`] = e.desc[lang];
    e.points.forEach((pt, i) => {
      out[`exp.${e.key}.b${i + 1}`] = pt[lang];
    });
  }
  return out;
}

export const I18N = {
  en: { ...STATIC.en, ...buildDataStrings("en") },
  id: { ...STATIC.id, ...buildDataStrings("id") },
};
