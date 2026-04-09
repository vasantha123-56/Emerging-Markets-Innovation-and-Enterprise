import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Flame, Award, BookOpen, Users } from "lucide-react";
import logo from "@/assets/logo.png";
import { conference } from "@/lib/conference";

const HERO_BG = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=3840&q=95";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const tenMinutes = 10 * 60 * 1000;
      const diff = tenMinutes - (now.getTime() % tenMinutes);

      setTime({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center gap-2.5 md:gap-4">
      {(["hours", "minutes", "seconds"] as const).map((unit) => (
        <div
          key={unit}
          className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 sm:p-3 md:p-4 min-w-[56px] sm:min-w-[64px] md:min-w-[80px] text-center border border-white/20"
        >
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums">
            {String(time[unit]).padStart(2, "0")}
          </div>
          <div className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-widest mt-0.5 font-medium">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/75 to-[#0F172A]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-red-500/20 border border-red-400/30 backdrop-blur-sm">
            <Flame className="w-4 h-4 text-red-400 animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-red-300 tracking-wide">
              SEATS FILLING FAST - REGISTER NOW!
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white rounded-2xl px-10 py-5 md:px-16 md:py-6 shadow-xl">
            <img src={logo} alt="OneGrasp" className="h-20 sm:h-28 md:h-36 object-contain" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-[11px] md:text-xs font-medium tracking-wide text-white/80">
            ONLINE INTERNATIONAL CONFERENCE | EMERGING MARKETS | INNOVATION | ENTERPRISE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-4 text-white"
        >
          <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white/80">
            International Conference on
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300">
            Emerging Markets, Innovation and Enterprise
          </span>
          <br />
          <span className="text-white/90 text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold">
            13th & 14th May 2026
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          Present breakthrough work in <span className="text-white font-semibold">emerging markets</span>,{" "}
          <span className="text-white font-semibold">innovation ecosystems</span>,{" "}
          <span className="text-white font-semibold">enterprise strategy</span>, and{" "}
          <span className="text-white font-semibold">market transformation</span> while earning a{" "}
          <span className="text-white font-semibold">Crossref DOI</span>,{" "}
          <span className="text-white font-semibold">CPD accreditation</span>, and visibility across{" "}
          <span className="text-white font-semibold">10+ global directories</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 text-sm text-white/80 font-mono"
        >
          <span className="font-bold text-white">Date: {conference.datesDisplay}</span>
          <span className="text-white/30">|</span>
          <span className="font-bold text-white">Time: {conference.timeDisplay}</span>
          <span className="text-white/30">|</span>
          <span className="font-bold text-white">{conference.locationDisplay}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-white/70 text-xs uppercase tracking-widest mb-2 font-medium">Today's offer ends in</p>
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <a
            href="#registration"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-gradient-to-r from-[#1A56DB] to-[#2563EB] text-white hover:from-[#1648B5] hover:to-[#1A56DB] transition-all animate-cta-pulse shadow-[0_4px_20px_rgba(26,86,219,0.4)]"
          >
            Register & Grab Your Benefits 
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
          className="mb-5"
        >
          <div className="inline-block px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
            <p className="text-white/90 text-xs sm:text-sm italic">
              "No visa needed | No flights | No cancellations -{" "}
              <span className="text-sky-300 font-semibold not-italic">attend from anywhere, 100% online</span>"
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
        >
          {[
            { icon: Award, text: "Accredited Certificate" },
            { icon: BookOpen, text: "Crossref DOI" },
            { icon: Users, text: "Global Networking" },
          ].map((benefit, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/90 text-[11px] font-medium"
            >
              <benefit.icon className="w-3 h-3" /> {benefit.text}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 animate-bounce-arrow">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default HeroSection;
