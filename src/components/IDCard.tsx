import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  RotateCw, 
  ExternalLink, 
  MapPin, 
  Sparkles, 
  Move, 
  QrCode,
  LockKeyhole,
  MessageCircle,
  RefreshCw
} from 'lucide-react';
import { PortfolioData } from '../types';

interface IDCardProps {
  data: PortfolioData;
  onOpenPortfolio: () => void;
  isOpening: boolean;
  theme?: 'dark' | 'light';
}

export default function IDCard({ data, onOpenPortfolio, isOpening, theme = 'dark' }: IDCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Motion values to create a subtle tilting effect while dragging
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    x.set(0);
    y.set(0);
  };

  // Transform values to translate drag position to rotational tilt
  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  const getSocialIcon = (name: string, size = 18) => {
    switch (name) {
      case 'Github': return <Github size={size} />;
      case 'Linkedin': return <Linkedin size={size} />;
      case 'Twitter': return <Twitter size={size} />;
      case 'Instagram': return <Instagram size={size} />;
      case 'Mail': return <Mail size={size} />;
      case 'MessageCircle':
      case 'WhatsApp': return <MessageCircle size={size} />;
      default: return <ExternalLink size={size} />;
    }
  };

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent trigger drag or other handlers
    setIsFlipped(!isFlipped);
  };

  const isLight = theme === 'light';

  return (
    <div className="flex flex-col items-center justify-center p-2">
      {/* Outer container with 3D perspective */}
      <div className="perspective-1000 w-[340px] h-[520px] relative z-10 flex items-center justify-center mb-6">
        


        {/* The Card wrapper supporting drag (only when NOT flipped) and 3D Rotation */}
        <motion.div
          id="draggable-id-card"
          drag={!isFlipped}
          dragSnapToOrigin={false}
          dragElastic={0.15}
          onDragStart={() => setDragActive(true)}
          onDragEnd={() => setDragActive(false)}
          style={{ x, y, rotateX, rotateY }}
          animate={{
            scale: isOpening ? [1, 0.95, 1.2, 0] : dragActive ? 1.05 : 1,
            rotate: isOpening ? [0, -5, 15, 0] : 0,
            opacity: isOpening ? [1, 1, 1, 0] : 1,
            z: dragActive ? 100 : 0
          }}
          transition={{
            type: isOpening ? 'tween' : 'spring',
            ease: 'easeInOut',
            stiffness: 200,
            damping: 18,
            duration: isOpening ? 1.1 : 0.5
          }}
          className={`w-full h-full preserve-3d relative rounded-[24px] transition-shadow duration-300 ${
            isFlipped ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
          } ${
            dragActive 
              ? isLight ? 'shadow-indigo-500/10 shadow-3xl' : 'shadow-indigo-500/20 shadow-3xl'
              : isLight ? 'shadow-xl shadow-slate-300/60' : 'shadow-2xl shadow-black/80'
          }`}
        >
          {/* Inner card supporting flip state rotation */}
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="w-full h-full preserve-3d relative rounded-[24px]"
          >
            
            {/* ================= CARD FRONT ================= */}
            <div 
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(0deg) translateZ(1px)',
              }}
              className={`absolute inset-0 w-full h-full rounded-[24px] overflow-hidden flex flex-col justify-between p-6 select-none shadow-inner border-2 transition-all duration-300 ${
                isFlipped ? 'opacity-0 pointer-events-none invisible' : 'opacity-100 pointer-events-auto visible'
              } ${
                isLight 
                  ? 'bg-white text-slate-800 border-slate-200/90' 
                  : 'bg-[#0f1424] text-slate-100 border-slate-800'
              }`}
            >
              {/* Holographic foil overlay on card edges */}
              <div className="absolute inset-0 hologram-foil opacity-5 pointer-events-none mix-blend-color-dodge"></div>
              {/* Grid background */}
              <div className={`absolute inset-0 opacity-40 pointer-events-none ${
                isLight ? 'grid-pattern-light' : 'grid-pattern'
              }`}></div>

              {/* Top Bar: Card Holder Loop & access label */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
                  <span className={`text-[10px] font-mono tracking-wider ${
                    isLight ? 'text-emerald-600 font-bold' : 'text-emerald-400'
                  }`}>KARTU IDENTITAS</span>
                </div>
                <div className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  isLight 
                    ? 'bg-slate-100 text-slate-600 border-slate-200' 
                    : 'bg-slate-950 text-slate-500 border-slate-800'
                }`}>
                  ID: 077A-7BDC
                </div>
              </div>

              {/* Slot cutout representation at the top */}
              <div className={`absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full border shadow-inner z-10 ${
                isLight ? 'bg-slate-200 border-slate-300' : 'bg-slate-950 border-slate-800/80'
              }`}></div>

              {/* Card Body Profile */}
              <div className="relative z-10 flex flex-col items-center mt-6">
                {/* Profile Photo with Glow and Tech Border */}
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative w-28 h-28 rounded-2xl overflow-hidden border-2 ${
                    isLight ? 'border-slate-300 bg-slate-100' : 'border-slate-700 bg-slate-950'
                  }`}>
                    <img 
                      src={data.avatarUrl} 
                      alt={data.name} 
                      className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mt-5">
                  <h2 className={`text-xl font-bold tracking-tight ${
                    isLight ? 'text-slate-900' : 'text-slate-100'
                  }`}>{data.name}</h2>
                  <p className={`text-sm font-mono font-semibold mt-1 ${
                    isLight ? 'text-indigo-600' : 'text-indigo-400'
                  }`}>{data.role}</p>
                  
                  {/* Location badge */}
                  <div className={`flex items-center justify-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                    isLight 
                      ? 'text-slate-600 bg-slate-100 border-slate-200' 
                      : 'text-slate-400 bg-slate-950/40 border-slate-800'
                  }`}>
                    <MapPin size={11} className="text-indigo-400" />
                    <span>{data.location}</span>
                  </div>
                </div>

                {/* Short Bio Tagline */}
                <p className={`text-center text-[11px] mt-4 leading-relaxed max-w-[240px] line-clamp-2 px-1 ${
                  isLight ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  "{data.bio}"
                </p>
              </div>

              {/* Barcode & QR Code segment */}
              <div className={`relative z-10 flex items-center justify-between border-t pt-4 mt-2 ${
                isLight ? 'border-slate-100' : 'border-slate-800/80'
              }`}>
                {/* Barcode */}
                <div className="flex flex-col">
                  <div className="h-7 w-28 flex items-end gap-[2px] opacity-75">
                    {/* Simulated Barcode Stripes */}
                    {[1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3].map((w, i) => (
                      <div 
                        key={i} 
                        className={`h-full ${isLight ? 'bg-slate-800' : 'bg-slate-300'}`} 
                        style={{ width: `${w}px` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-[7px] font-mono text-slate-500 mt-1 tracking-widest text-center">RAGAJATSUMA_2026</span>
                </div>

                {/* QR Code */}
                <div className={`p-1.5 border rounded-lg shadow-inner ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}>
                  <QrCode size={26} className={isLight ? 'text-slate-600' : 'text-slate-400'} />
                </div>
              </div>

              {/* Navigation Action Buttons (Front) */}
              <div className="relative z-10 grid grid-cols-5 gap-2 mt-4">
                {/* Buka Portofolio CTA (4/5 width) */}
                <button
                  id="open-portfolio-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenPortfolio();
                  }}
                  className="col-span-4 py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20 border border-indigo-500/30 transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <LockKeyhole size={14} className="animate-pulse" />
                  Buka Portofolio
                </button>

                {/* Flip Button (1/5 width) */}
                <button
                  id="flip-card-btn-front"
                  onClick={handleFlip}
                  title="Putar untuk Sosial Media"
                  className={`col-span-1 p-2 rounded-xl border flex items-center justify-center transition-colors cursor-pointer active:scale-95 ${
                    isLight 
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200' 
                      : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border-slate-800'
                  }`}
                >
                  <RotateCw size={14} />
                </button>
              </div>
            </div>


            {/* ================= CARD BACK ================= */}
            <div 
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg) translateZ(1px)',
              }}
              className={`absolute inset-0 w-full h-full rounded-[24px] overflow-hidden flex flex-col justify-between p-6 select-none shadow-inner border-2 transition-all duration-300 ${
                isFlipped ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
              } ${
                isLight 
                  ? 'bg-white text-slate-800 border-slate-200/90' 
                  : 'bg-[#0f1424] text-slate-100 border-slate-800'
              }`}
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 hologram-foil opacity-5 pointer-events-none mix-blend-color-dodge"></div>
              {/* Grid background */}
              <div className={`absolute inset-0 opacity-40 pointer-events-none ${
                isLight ? 'grid-pattern-light' : 'grid-pattern'
              }`}></div>

              {/* Top Bar: Magnetic Strip (Realistic card strip) */}
              <div className={`absolute top-8 left-0 right-0 h-11 border-y ${
                isLight ? 'bg-slate-900 border-slate-950' : 'bg-slate-950 border-slate-800'
              }`}></div>

              {/* Slot cutout representation (matching front) */}
              <div className={`absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full border shadow-inner z-10 ${
                isLight ? 'bg-slate-200 border-slate-300' : 'bg-slate-950 border-slate-800/80'
              }`}></div>

              {/* Header Label (relative positioned to stack over magnetic strip) */}
              <div className="relative z-10 mt-14 flex justify-between items-center">
                <span className={`text-[10px] font-mono tracking-wider ${
                  isLight ? 'text-slate-500 font-semibold' : 'text-slate-500'
                }`}>MEDIA SOSIAL & WA</span>
                <Sparkles size={12} className="text-indigo-400 animate-pulse" />
              </div>

              {/* Social Media Links List (Highly clickable as drag is disabled when back is active) */}
              <div className="relative z-10 flex flex-col gap-2.5 my-3 overflow-y-auto max-h-[230px] pr-1 scrollbar-thin">
                {data.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Safe click
                    className={`flex items-center justify-between p-2.5 rounded-xl border transition-all duration-200 group/link ${
                      isLight 
                        ? 'bg-slate-50/90 hover:bg-slate-100 border-slate-200/80 hover:border-indigo-500/40 text-slate-800' 
                        : 'bg-slate-950/80 hover:bg-slate-900 border-slate-800 hover:border-indigo-500/40 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg border group-hover/link:scale-110 transition-transform ${
                        isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                      }`}>
                        {getSocialIcon(social.icon || social.platform, 15)}
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-[9px] text-slate-500 font-mono tracking-wide">{social.platform}</span>
                        <span className="text-xs font-semibold">{social.username}</span>
                      </div>
                    </div>
                    <ExternalLink size={12} className="text-slate-400 group-hover/link:text-indigo-500 transition-colors" />
                  </a>
                ))}
              </div>

              {/* Info Disclaimer / QR explanation */}
              <div className={`relative z-10 p-2.5 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200/60' : 'bg-slate-950/50 border-slate-800/60'
              }`}>
                <p className={`text-[9px] font-mono leading-relaxed text-center ${
                  isLight ? 'text-slate-500' : 'text-slate-500'
                }`}>
                  Hubungi langsung melalui tautan WhatsApp atau E-mail di atas untuk berdiskusi tentang peluang kerja sama atau proyek web.
                </p>
              </div>

              {/* Navigation Action Buttons (Back) */}
              <div className="relative z-10 grid grid-cols-5 gap-2 mt-4 pt-1">
                {/* Flip Back Button (4/5 width) */}
                <button
                  id="flip-card-btn-back"
                  onClick={handleFlip}
                  className={`col-span-4 py-2.5 px-4 font-semibold text-xs rounded-xl border flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95 ${
                    isLight 
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200' 
                      : 'bg-slate-950 hover:bg-slate-800 text-slate-200 border-slate-800'
                  }`}
                >
                  <RotateCw size={12} className="animate-spin-slow text-indigo-500" />
                  Kembali ke Depan
                </button>

                {/* Fast Access to Portfolio from back too (1/5 width) */}
                <button
                  id="open-portfolio-btn-back"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenPortfolio();
                  }}
                  title="Langsung Buka Portofolio"
                  className="col-span-1 p-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-xl border border-indigo-500/30 flex items-center justify-center transition-all cursor-pointer active:scale-95 animate-pulse"
                >
                  <LockKeyhole size={14} />
                </button>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>

      {/* Dynamic Interaction Controls (Move, Reset) */}
      <div className="mt-4 flex flex-col items-center gap-3 w-full">
        <button
          id="reset-card-btn"
          onClick={handleReset}
          title="Reset Posisi Kartu"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm text-xs font-mono font-semibold transition-all cursor-pointer active:scale-95 ${
            isLight 
              ? 'bg-white border-slate-200/90 hover:bg-slate-50 text-slate-600' 
              : 'bg-slate-900/95 border-slate-800 hover:bg-slate-800 text-slate-300'
          }`}
        >
          <RefreshCw size={12} className="text-indigo-500" />
          <span>Reset Posisi</span>
        </button>

        {/* Dynamic Interaction Instructions */}
        <div className="text-center max-w-sm pointer-events-none select-none">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-xs font-mono flex items-center justify-center gap-1.5 ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            <Move size={12} className="text-indigo-500 animate-pulse" />
            <span>Geser kartu ke mana saja • Klik tombol putar balik</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
