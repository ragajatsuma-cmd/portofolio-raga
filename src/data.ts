import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Raga Jatsuma",
  role: "Pranata Komputer / Pengawas Pemilu",
  company: "Bawaslu",
  location: "Banjarbaru, Kalimantan Selatan, Indonesia",
  avatarUrl: "https://i.imgur.com/KVMUNeH.jpeg",
  bio: "Pranata Komputer & Pengawas Pemilu yang memadukan integritas penegakan hukum dengan kecakapan teknologi informasi.",
  longBio: "Saya Raga Jatsuma, seorang Pengawas Pemilu yang memadukan integritas penegakan hukum dengan kecakapan teknologi informasi. Sebagai Pranata Komputer, saya memanfaatkan sistem digital untuk memperkuat pengawasan partisipatif, memastikan setiap tahap pemilu berjalan adil, transparan, dan dapat dipertanggungjawabkan.\n\nDengan pemahaman mendalam tentang regulasi kepemiluan dan kemampuan teknis dalam pengelolaan data, saya berkomitmen menjadi garda terdepan dalam mengawal demokrasi Indonesia melalui pendekatan yang modern, terukur, dan partisipatif.",
  email: "ragajatsuma@gmail.com",
  phone: "+62 851-5683-8450",
  stats: [
    { label: "Tahun Pengalaman Pengawas", value: "2018-Sekarang" },
    { label: "Instansi", value: "Bawaslu Kota Banjarbaru & Bawaslu Kabupaten Kotabaru" },
  ],
  skills: [],
  projects: [
    {
      id: "proj-1",
      title: "Pantau Saja",
      description: "Platform digital pribadi yang menjadi pusat dokumentasi pengawasan pemilu.",
      longDescription: "Platform digital pribadi yang menjadi pusat dokumentasi pengawasan pemilu, berisi analisis tahapan pemilu, catatan lapangan, dan edukasi kepemiluan untuk masyarakat.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      category: "Web",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      demoUrl: "https://pantausaja.my.id",
      githubUrl: "https://github.com/#",
      featured: true
    },
    {
      id: "proj-2",
      title: "Game Edukasi Pengawas",
      description: "Game berbasis web yang mensimulasikan peran pengawas pemilu.",
      longDescription: "Game berbasis web yang mensimulasikan peran pengawas pemilu. Dirancang untuk meningkatkan literasi kepemiluan masyarakat melalui pengalaman gamifikasi yang menarik dan edukatif.",
      tags: ["React", "Express", "Node.js", "Canvas", "Framer Motion"],
      category: "Web",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      demoUrl: "https://game.ragajatsuma.my.id",
      githubUrl: "https://github.com/#",
      featured: true
    },
  ],
  socials: [
    {
      id: "soc-wa",
      platform: "WhatsApp",
      username: "+62 851-5683-8450",
      url: "https://wa.me/6285156838450",
      icon: "MessageCircle",
      color: "hover:bg-emerald-600 hover:text-white"
    },
    {
      id: "soc-4",
      platform: "Instagram",
      username: "@ragajatsuma",
      url: "https://instagram.com/ragajatsuma",
      icon: "Instagram",
      color: "hover:bg-pink-600 hover:text-white"
    },
    {
      id: "soc-5",
      platform: "E-mail",
      username: "ragajatsuma@gmail.com",
      url: "mailto:ragajatsuma@gmail.com",
      icon: "Mail",
      color: "hover:bg-emerald-600 hover:text-white"
    }
  ]
};
