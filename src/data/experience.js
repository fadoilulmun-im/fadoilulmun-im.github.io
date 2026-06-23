/* =============================================================================
   experience.js — the Experience timeline, as data.

   Single source of truth: feeds BOTH the {{#each experiences}} loop in
   src/partials/experience.html AND the generated exp.<key>.* keys in
   src/js/i18n.js (role / period / location / desc / b1..bN from `points`).

   `company` is a proper noun and stays identical in both languages.
   Edit one record here to change a role — markup and translations follow.
   ============================================================================= */

/** @typedef {{ en: string, id: string }} Localized */

/**
 * @typedef {Object} Experience
 * @property {string}      key       stable slug → i18n key + loop key (unique)
 * @property {string}      company   proper noun — identical in both languages
 * @property {Localized}   role
 * @property {Localized}   period
 * @property {Localized}   location
 * @property {Localized}   desc
 * @property {Localized[]} points    bullet points → exp.<key>.b1 … bN
 */

/** @type {Experience[]} */
export const experiences = [
  {
    key: "gajihub",
    company: "PT Gajihub Berhati Nyaman",
    role: { en: "Backend Developer", id: "Backend Developer" },
    period: { en: "Jan 2025 – Present", id: "Jan 2025 – Sekarang" },
    location: { en: "Remote", id: "Remote" },
    desc: {
      en: "GajiHub is online HR & payroll software that streamlines HR for small businesses.",
      id: "GajiHub adalah perangkat lunak HR & payroll online yang menyederhanakan pengelolaan HR untuk bisnis kecil.",
    },
    points: [
      { en: "Build RESTful APIs with Laravel.", id: "Membangun RESTful API dengan Laravel." },
      {
        en: "Add new features requested by clients.",
        id: "Menambahkan fitur baru sesuai permintaan klien.",
      },
      {
        en: "Adjust existing features to client requests.",
        id: "Menyesuaikan fitur yang ada dengan permintaan klien.",
      },
      {
        en: "Write API documentation with Swagger.",
        id: "Membuat dokumentasi API dengan Swagger.",
      },
      { en: "Optimize existing features.", id: "Mengoptimalkan fitur yang sudah ada." },
      {
        en: "Build internal admin-panel features with React, Tailwind CSS, Inertia.js, and Laravel.",
        id: "Membangun fitur panel admin internal dengan React, Tailwind CSS, Inertia.js, dan Laravel.",
      },
      { en: "Write unit tests with PHPUnit.", id: "Menulis unit test dengan PHPUnit." },
      { en: "Manage tasks in Notion.", id: "Mengelola tugas menggunakan Notion." },
    ],
  },
  {
    key: "kampung",
    company: "Kampung Inggris LC",
    role: { en: "Fullstack Programmer", id: "Programmer Fullstack" },
    period: { en: "Apr 2024 – Dec 2024", id: "Apr 2024 – Des 2024" },
    location: { en: "Kediri, Indonesia", id: "Kediri, Indonesia" },
    desc: {
      en: "An English-language course institution offering both offline and online learning.",
      id: "Lembaga kursus bahasa Inggris yang menyediakan pembelajaran offline dan online.",
    },
    points: [
      {
        en: "Build cross-platform marketing apps with Flutter.",
        id: "Membangun aplikasi marketing lintas platform dengan Flutter.",
      },
      {
        en: "Build RESTful APIs with Laravel and NestJS.",
        id: "Membangun RESTful API dengan Laravel dan NestJS.",
      },
      {
        en: "Write API documentation with Swagger, Scribe, and Scramble.",
        id: "Membuat dokumentasi API dengan Swagger, Scribe, dan Scramble.",
      },
    ],
  },
  {
    key: "digdaya",
    company: "CV Digital Digdaya Multi Solusi",
    role: { en: "PHP Laravel Fullstack Programmer", id: "Programmer Fullstack PHP Laravel" },
    period: { en: "Jul 2023 – Dec 2025", id: "Jul 2023 – Des 2025" },
    location: { en: "Remote", id: "Remote" },
    desc: {
      en: "A software house building web & mobile products, IT infrastructure, and digital-marketing consulting and training.",
      id: "Software house yang membangun produk web & mobile, infrastruktur IT, serta konsultasi dan pelatihan digital marketing.",
    },
    points: [
      {
        en: "Build an ERP application for a fabric-sales company with Laravel.",
        id: "Membangun aplikasi ERP untuk perusahaan penjualan kain dengan Laravel.",
      },
      {
        en: "Add journaling features to existing POS applications.",
        id: "Menambahkan fitur jurnal pada aplikasi POS yang sudah ada.",
      },
      {
        en: "Fix bugs and ship features on Laravel-based websites.",
        id: "Memperbaiki bug dan menambah fitur pada situs web berbasis Laravel.",
      },
    ],
  },
  {
    key: "lmi",
    company: "Lembaga Manajemen Infaq",
    role: { en: "Fullstack Programmer (Internship)", id: "Programmer Fullstack (Magang)" },
    period: { en: "Feb 2023 – Jun 2023", id: "Feb 2023 – Jun 2023" },
    location: { en: "Surabaya, Indonesia", id: "Surabaya, Indonesia" },
    desc: {
      en: "A philanthropic institution that elevates underprivileged communities by collecting and managing social funds (zakat, infaq, shadaqah, and waqf).",
      id: "Lembaga filantropi yang mengangkat martabat masyarakat kurang mampu melalui penghimpunan dan pengelolaan dana sosial (zakat, infaq, shadaqah, dan wakaf).",
    },
    points: [
      {
        en: "Build a fundraising website with Laravel, Bootstrap, and jQuery.",
        id: "Membangun situs web penggalangan dana dengan Laravel, Bootstrap, dan jQuery.",
      },
      {
        en: "Integrate the Xendit payment gateway.",
        id: "Mengintegrasikan payment gateway Xendit.",
      },
      {
        en: "Convert Figma designs into Laravel Blade views.",
        id: "Mengonversi desain Figma menjadi tampilan Laravel Blade.",
      },
      {
        en: "Write API documentation with Postman.",
        id: "Membuat dokumentasi API dengan Postman.",
      },
    ],
  },
  {
    key: "energeek",
    company: "Energeek The E-Government Solution",
    role: { en: "Backend Developer", id: "Backend Developer" },
    period: { en: "Jul 2022 – Feb 2023", id: "Jul 2022 – Feb 2023" },
    location: { en: "Surabaya, Indonesia", id: "Surabaya, Indonesia" },
    desc: {
      en: "An IT consulting and information-technology services company based in Surabaya, East Java.",
      id: "Perusahaan konsultan dan layanan teknologi informasi yang berlokasi di Surabaya, Jawa Timur.",
    },
    points: [
      {
        en: "Build APIs with the Laravel framework.",
        id: "Membangun API dengan framework Laravel.",
      },
      {
        en: "Design and build the PostgreSQL schema using Laravel migrations.",
        id: "Merancang dan membangun skema PostgreSQL menggunakan Laravel migration.",
      },
      {
        en: "Write API documentation with Postman and Swagger.",
        id: "Membuat dokumentasi API dengan Postman dan Swagger.",
      },
      { en: "Contributed to 4 different projects.", id: "Berkontribusi pada 4 proyek berbeda." },
    ],
  },
  {
    key: "cross",
    company: "PT Crosstechno Digitech Internasional",
    role: { en: "Web Developer", id: "Web Developer" },
    period: { en: "Jan 2022 – Jun 2022", id: "Jan 2022 – Jun 2022" },
    location: { en: "Surabaya, Indonesia", id: "Surabaya, Indonesia" },
    desc: {
      en: "A company providing web and mobile application development services.",
      id: "Perusahaan yang menyediakan layanan pengembangan aplikasi web dan mobile.",
    },
    points: [
      { en: "Build APIs and web applications.", id: "Membangun API dan aplikasi web." },
      {
        en: "Maintain and update existing web features.",
        id: "Memelihara dan memperbarui fitur web yang sudah ada.",
      },
    ],
  },
];
