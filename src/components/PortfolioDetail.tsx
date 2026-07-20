import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Mail, 
  Globe,
  MapPin,
  Shield,
  Laptop,
  BarChart3,
  Smartphone,
  MessageCircle,
  Instagram,
  ExternalLink
} from 'lucide-react';
import { PortfolioData } from '../types';

interface PortfolioDetailProps {
  data: PortfolioData;
  onBack: () => void;
  theme?: 'dark' | 'light';
}

export default function PortfolioDetail({ data, onBack, theme = 'dark' }: PortfolioDetailProps) {
  const isLight = theme === 'light';

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 relative">
      
      {/* Back Button to return to landing page */}
      <div className="mb-6">
        <motion.button
          id="back-to-card-btn"
          onClick={onBack}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -4 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-mono tracking-wide cursor-pointer transition-colors active:scale-95 ${
            isLight 
              ? 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-sm' 
              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <ArrowLeft size={14} className="text-indigo-500" />
          <span>Kembali ke Kunci Kartu ID</span>
        </motion.button>
      </div>

      {/* Hero Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative border rounded-3xl p-6 lg:p-10 overflow-hidden mb-10 transition-colors ${
          isLight 
            ? 'bg-white border-slate-200/90 shadow-md shadow-slate-200/40 text-slate-800' 
            : 'bg-slate-950 border-slate-900 text-slate-100'
        }`}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
        <div className={`absolute inset-0 opacity-10 pointer-events-none ${
          isLight ? 'grid-pattern-light' : 'grid-pattern'
        }`}></div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
          {/* Avatar Area */}
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-60 blur-sm"></div>
            <div className={`relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border ${
              isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-700 bg-slate-900'
            }`}>
              <img 
                src={data.avatarUrl} 
                alt={data.name} 
                className="w-full h-full object-cover grayscale brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Profile Text Details */}
          <div className="flex-1 text-center lg:text-left space-y-3">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 justify-center lg:justify-start">
              <h1 className={`text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>{data.name}</h1>
              <span className={`inline-block self-center lg:self-auto px-3 py-1 text-[10px] font-mono rounded-full font-bold ${
                isLight 
                  ? 'bg-indigo-50 border border-indigo-200 text-indigo-600' 
                  : 'bg-indigo-950/50 border border-indigo-800/40 text-indigo-400'
              }`}>
                PRANATA KOMPUTER
              </span>
            </div>
            
            <p className={`text-lg font-mono font-bold ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`}>{data.role}</p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold pt-1">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                isLight ? 'bg-slate-50 text-slate-600 border-slate-200/80' : 'bg-slate-900/50 text-slate-400 border-slate-800/40'
              }`}>
                <MapPin size={13} className="text-indigo-500" />
                <span>{data.location}</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                isLight ? 'bg-slate-50 text-slate-600 border-slate-200/80' : 'bg-slate-900/50 text-slate-400 border-slate-800/40'
              }`}>
                <Globe size={13} className="text-indigo-500" />
                <span>{data.company}</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                isLight ? 'bg-slate-50 text-slate-600 border-slate-200/80' : 'bg-slate-900/50 text-slate-400 border-slate-800/40'
              }`}>
                <Mail size={13} className="text-indigo-500" />
                <span>{data.email}</span>
              </div>
            </div>

            <p className={`text-sm leading-relaxed max-w-2xl pt-2 ${
              isLight ? 'text-slate-600 font-medium' : 'text-slate-300'
            }`}>
              {data.longBio}
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t relative z-10 text-left ${
          isLight ? 'border-slate-200' : 'border-slate-900'
        }`}>
          {data.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <p className={`text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>{stat.value}</p>
              <p className="text-[10px] lg:text-xs font-mono text-slate-500 uppercase tracking-widest mt-1.5 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Sections */}
      <div className="space-y-16">
        
        {/* 02 Kompetensi Section */}
        <section className="space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800/80">
            <div className="flex items-start gap-4">
              <span className={`text-5xl lg:text-6xl font-extrabold tracking-tight select-none leading-none ${
                isLight ? 'text-indigo-600/20' : 'text-indigo-400/25'
              }`}>
                &gt;
              </span>
              <div>
                <h2 className={`text-2xl lg:text-3xl font-extrabold tracking-tight ${
                  isLight ? 'text-slate-900' : 'text-slate-100'
                }`}>
                  Kompetensi
                </h2>
                <span className="text-[10px] lg:text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold mt-1 block">
                  KEAHLIAN UTAMA
                </span>
              </div>
            </div>
            <p className={`text-xs lg:text-sm max-w-sm leading-relaxed ${
              isLight ? 'text-slate-600 font-medium' : 'text-slate-400'
            }`}>
              Perpaduan keahlian pengawasan pemilu dan teknologi informasi untuk demokrasi yang lebih baik.
            </p>
          </div>

          {/* 4 Cards Grid with customized branding icons & colors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Pengawasan Pemilu */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-2px] flex flex-col gap-4 ${
              isLight 
                ? 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300' 
                : 'bg-slate-900/20 border-slate-800/80 hover:border-indigo-500/30'
            }`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                isLight 
                  ? 'bg-indigo-50 border-indigo-100 text-indigo-600' 
                  : 'bg-indigo-950/40 border-indigo-900/40 text-indigo-400'
              }`}>
                <Shield size={18} />
              </div>
              <div>
                <h3 className={`text-base font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  Pengawasan Pemilu
                </h3>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
                  Pemantauan menyeluruh terhadap setiap tahapan pemilu — mulai dari pendaftaran pemilih, kampanye, hingga rekapitulasi suara — berdasarkan UU dan regulasi Bawaslu.
                </p>
              </div>
            </div>

            {/* Card 2: Sistem Informasi & IT */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-2px] flex flex-col gap-4 ${
              isLight 
                ? 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300' 
                : 'bg-slate-900/20 border-slate-800/80 hover:border-emerald-500/30'
            }`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                isLight 
                  ? 'bg-emerald-50 border-emerald-100 text-emerald-600' 
                  : 'bg-emerald-950/40 border-emerald-900/40 text-emerald-400'
              }`}>
                <Laptop size={18} />
              </div>
              <div>
                <h3 className={`text-base font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  Sistem Informasi & IT
                </h3>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
                  Pengelolaan infrastruktur teknologi informasi, pengembangan sistem pelaporan digital, dan otomatisasi proses administrasi pengawasan pemilu.
                </p>
              </div>
            </div>

            {/* Card 3: Analisis Data Pemilu */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-2px] flex flex-col gap-4 ${
              isLight 
                ? 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-violet-300' 
                : 'bg-slate-900/20 border-slate-800/80 hover:border-violet-500/30'
            }`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                isLight 
                  ? 'bg-violet-50 border-violet-100 text-violet-600' 
                  : 'bg-violet-950/40 border-violet-900/40 text-violet-400'
              }`}>
                <BarChart3 size={18} />
              </div>
              <div>
                <h3 className={`text-base font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  Analisis Data Pemilu
                </h3>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
                  Pengolahan dan analisis data hasil pengawasan untuk mendeteksi potensi pelanggaran, memetakan kerawanan, dan mendukung pengambilan keputusan berbasis bukti.
                </p>
              </div>
            </div>

            {/* Card 4: Transformasi Digital */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-2px] flex flex-col gap-4 ${
              isLight 
                ? 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300' 
                : 'bg-slate-900/20 border-slate-800/80 hover:border-amber-500/30'
            }`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                isLight 
                  ? 'bg-amber-50 border-amber-100 text-amber-600' 
                  : 'bg-amber-950/40 border-amber-900/40 text-amber-400'
              }`}>
                <Smartphone size={18} />
              </div>
              <div>
                <h3 className={`text-base font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  Transformasi Digital
                </h3>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
                  Mendorong adopsi teknologi dalam proses pengawasan, termasuk pemanfaatan aplikasi pelaporan masyarakat dan sistem informasi geografis (SIG) untuk pemetaan TPS.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 03 Karya & Proyek Section */}
        <section className="space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800/80">
            <div className="flex items-start gap-4">
              <span className={`text-5xl lg:text-6xl font-extrabold tracking-tight select-none leading-none ${
                isLight ? 'text-indigo-600/20' : 'text-indigo-400/25'
              }`}>
                &gt;
              </span>
              <div>
                <h2 className={`text-2xl lg:text-3xl font-extrabold tracking-tight ${
                  isLight ? 'text-slate-900' : 'text-slate-100'
                }`}>
                  Karya & Proyek
                </h2>
                <span className="text-[10px] lg:text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold mt-1 block">
                  PORTOFOLIO DIGITAL
                </span>
              </div>
            </div>
            <p className={`text-xs lg:text-sm max-w-sm leading-relaxed ${
              isLight ? 'text-slate-600 font-medium' : 'text-slate-400'
            }`}>
              Karya digital yang mendukung transparansi dan edukasi kepemiluan.
            </p>
          </div>

          {/* 2 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Pantau Saja */}
            <div className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-6 hover:translate-y-[-2px] ${
              isLight 
                ? 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300' 
                : 'bg-slate-900/20 border-slate-800/80 hover:border-indigo-500/30'
            }`}>
              <div className="space-y-4">
                <span className={`inline-block px-3 py-1 text-[10px] font-mono rounded-full font-bold tracking-wide ${
                  isLight 
                    ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' 
                    : 'bg-indigo-950/45 text-indigo-400 border border-indigo-900/40'
                }`}>
                  PORTAL UTAMA
                </span>
                <h3 className={`text-2xl font-extrabold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Pantau Saja
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isLight ? 'text-slate-600 font-medium' : 'text-slate-300'
                }`}>
                  Platform digital pribadi yang menjadi pusat dokumentasi pengawasan pemilu, berisi analisis tahapan pemilu, catatan lapangan, dan edukasi kepemiluan untuk masyarakat.
                </p>
              </div>
              <a 
                href="https://pantausaja.my.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-xs lg:text-sm font-mono font-bold inline-flex items-center gap-1.5 transition-colors self-start cursor-pointer ${
                  isLight 
                    ? 'text-indigo-600 hover:text-indigo-500' 
                    : 'text-indigo-400 hover:text-indigo-300'
                }`}
              >
                <span>Kunjungi pantausaja.my.id</span>
                <span>→</span>
              </a>
            </div>

            {/* Card 2: Game Edukasi Pengawas */}
            <div className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-6 hover:translate-y-[-2px] ${
              isLight 
                ? 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300' 
                : 'bg-slate-900/20 border-slate-800/80 hover:border-indigo-500/30'
            }`}>
              <div className="space-y-4">
                <span className={`inline-block px-3 py-1 text-[10px] font-mono rounded-full font-bold tracking-wide ${
                  isLight 
                    ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' 
                    : 'bg-indigo-950/45 text-indigo-400 border border-indigo-900/40'
                }`}>
                  EDUKASI INTERAKTIF
                </span>
                <h3 className={`text-2xl font-extrabold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Game Edukasi Pengawas
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isLight ? 'text-slate-600 font-medium' : 'text-slate-300'
                }`}>
                  Game berbasis web yang mensimulasikan peran pengawas pemilu. Dirancang untuk meningkatkan literasi kepemiluan masyarakat melalui pengalaman gamifikasi yang menarik dan edukatif.
                </p>
              </div>
              <a 
                href="https://game.ragajatsuma.my.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-xs lg:text-sm font-mono font-bold inline-flex items-center gap-1.5 transition-colors self-start cursor-pointer ${
                  isLight 
                    ? 'text-indigo-600 hover:text-indigo-500' 
                    : 'text-indigo-400 hover:text-indigo-300'
                }`}
              >
                <span>Mainkan di game.ragajatsuma.my.id</span>
                <span>→</span>
              </a>
            </div>

          </div>
        </section>

        {/* 04 Media Sosial Section */}
        <section className="space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800/80">
            <div className="flex items-start gap-4">
              <span className={`text-5xl lg:text-6xl font-extrabold tracking-tight select-none leading-none ${
                isLight ? 'text-indigo-600/20' : 'text-indigo-400/25'
              }`}>
                &gt;
              </span>
              <div>
                <h2 className={`text-2xl lg:text-3xl font-extrabold tracking-tight ${
                  isLight ? 'text-slate-900' : 'text-slate-100'
                }`}>
                  Media Sosial
                </h2>
                <span className="text-[10px] lg:text-xs font-mono tracking-widest text-indigo-500 uppercase font-bold mt-1 block">
                  HUBUNGI & IKUTI SAYA
                </span>
              </div>
            </div>
            <p className={`text-xs lg:text-sm max-w-sm leading-relaxed ${
              isLight ? 'text-slate-600 font-medium' : 'text-slate-400'
            }`}>
              Mari terhubung di media sosial atau hubungi langsung untuk kolaborasi lebih lanjut.
            </p>
          </div>

          {/* Social Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.socials.map((social) => {
              let iconElement;
              if (social.icon === 'MessageCircle' || social.platform === 'WhatsApp') {
                iconElement = <MessageCircle size={22} />;
              } else if (social.icon === 'Instagram' || social.platform === 'Instagram') {
                iconElement = <Instagram size={22} />;
              } else if (social.icon === 'Mail' || social.platform === 'E-mail') {
                iconElement = <Mail size={22} />;
              } else {
                iconElement = <ExternalLink size={22} />;
              }

              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-6 hover:translate-y-[-2px] hover:shadow-md group ${
                    isLight 
                      ? 'bg-white border-slate-200 shadow-sm hover:border-indigo-300 hover:text-indigo-600' 
                      : 'bg-slate-900/20 border-slate-800/80 hover:border-indigo-500/30 hover:text-indigo-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors group-hover:scale-105 duration-300 ${
                      isLight 
                        ? 'bg-indigo-50 border-indigo-100 text-indigo-600' 
                        : 'bg-indigo-950/40 border-indigo-900/40 text-indigo-400'
                    }`}>
                      {iconElement}
                    </div>
                    <span className={`text-[10px] font-mono tracking-wide ${
                      isLight ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      IKUTI / HUBUNGI
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                      {social.platform}
                    </h3>
                    <p className={`text-xs font-mono tracking-tight ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {social.username}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>

    </div>
  );
}
