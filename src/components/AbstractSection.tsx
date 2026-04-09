import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, Globe2, Award, BookOpen, Users, Sparkles, TrendingUp, ArrowRight, ShieldCheck, Star, Zap, CheckCircle2 } from "lucide-react";

const benefits = [
  { icon: Fingerprint, title: "Permanent DOI", desc: "Crossref DOI (10.65838) — makes your work globally citable forever", color: "from-blue-600 to-blue-700", bg: "bg-blue-50", border: "border-blue-200", iconBg: "bg-blue-600" },
  { icon: Globe2, title: "10+ Index Directories", desc: "Google Scholar, MetaSpectra, JCI, RMetaHub, IntelliMindEd & more", color: "from-emerald-600 to-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", iconBg: "bg-emerald-600" },
  { icon: Award, title: "CPD Accredited Certificate", desc: "Recognized by employers and licensing authorities in 50+ countries", color: "from-amber-600 to-amber-700", bg: "bg-amber-50", border: "border-amber-200", iconBg: "bg-amber-600" },
  { icon: BookOpen, title: "Peer-Reviewed Publication", desc: "Your research evaluated and validated by international reviewers", color: "from-violet-600 to-violet-700", bg: "bg-violet-50", border: "border-violet-200", iconBg: "bg-violet-600" },
  { icon: Users, title: "Global Networking", desc: "Connect with researchers, engineers, and innovators from 50+ countries", color: "from-cyan-600 to-cyan-700", bg: "bg-cyan-50", border: "border-cyan-200", iconBg: "bg-cyan-600" },
  { icon: TrendingUp, title: "170M+ Metadata Records", desc: "Access 170+ million scholarly metadata records via MetaSpectra for your research", color: "from-rose-600 to-rose-700", bg: "bg-rose-50", border: "border-rose-200", iconBg: "bg-rose-600" },
];

const AbstractSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="abstract" className="relative overflow-hidden py-16 md:py-24 px-4 md:px-8" ref={ref}>
      {/* Bold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
      {/* Animated accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-emerald-500/15 to-transparent rounded-full blur-3xl" />
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D97706] via-[#1A56DB] to-[#059669]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HERO-LEVEL HEADER */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-8">

          {/* Animated urgency badge */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm font-bold mb-5 shadow-lg shadow-red-500/30"
          >
            <Sparkles className="w-4 h-4" />
            MOST IMPORTANT — DON'T MISS THIS
            <Sparkles className="w-4 h-4" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-white leading-tight">
            Why Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">IC-EMIE 2026</span> Abstract Matters
          </h2>

          <p className="text-blue-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            Share your research on <strong className="text-white">emerging market dynamics</strong>, <strong className="text-white">innovation-led enterprise growth</strong>, <strong className="text-white">startup ecosystems</strong>, and <strong className="text-white">inclusive business strategy</strong>. One abstract submission gives you a <strong className="text-white">permanent DOI</strong>, indexing in <strong className="text-white">10+ directories</strong>, and an <strong className="text-white">accredited certificate</strong> all at once.
          </p>

          {/* WORLDWIDE banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block"
          >
            <div className="relative px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border-2 border-amber-400/50 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                <span className="text-2xl sm:text-3xl">🌍</span>
                <div className="text-left">
                  <p className="text-amber-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Worldwide Exclusive</p>
                  <p className="text-white text-sm sm:text-base md:text-lg font-extrabold leading-tight">
                    Take Your Emerging Markets and Innovation Research <span className="text-amber-300">Global</span>
                  </p>
                </div>
                <span className="text-2xl sm:text-3xl">🏆</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits — vibrant colored cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {benefits.map((b, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className={`relative rounded-2xl p-5 md:p-6 ${b.bg} ${b.border} border-2 group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
            >
              {/* Subtle glow */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br opacity-20 rounded-full blur-2xl" />

              <div className="relative z-10 flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${b.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900 text-base">{b.title}</h4>
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ALL-IN-ONE highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 p-5 md:p-6 mb-8 shadow-xl shadow-blue-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <p className="font-extrabold text-lg md:text-xl">All 6 Benefits in ONE Submission</p>
                <p className="text-blue-200 text-sm">No hidden fees · No extra steps · Everything included</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["DOI", "Indexing", "Certificate", "Publication", "Networking", "170M+ Records"].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold border border-white/20">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial-style social proof */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {[
            { icon: Star, stat: "50+", label: "Countries Represented", color: "text-amber-400" },
            { icon: ShieldCheck, stat: "100%", label: "Papers Get DOI & Indexing", color: "text-emerald-400" },
            { icon: Award, stat: "CPD", label: "Accredited Worldwide", color: "text-blue-400" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <s.icon className={`w-8 h-8 ${s.color} flex-shrink-0`} />
              <div>
                <p className="text-white font-extrabold text-xl">{s.stat}</p>
                <p className="text-blue-200/70 text-xs">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.75 }}
          className="text-center">
          <motion.a
            href="#registration"
            animate={{ boxShadow: ["0 0 0 0 rgba(37,99,235,0.4)", "0 0 0 12px rgba(37,99,235,0)", "0 0 0 0 rgba(37,99,235,0.4)"] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="inline-flex items-center gap-2.5 px-10 sm:px-14 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-gray-900 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 transition-all shadow-xl hover:shadow-2xl"
          >
            Submit Your Abstract Now <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <p className="text-blue-200/50 text-xs sm:text-sm mt-4 font-medium">⚡ Limited slots available · Registration closing soon</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AbstractSection;
