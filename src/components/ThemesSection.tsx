import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Building2, Monitor, ChevronRight, Landmark, ShieldCheck, Wallet, Network, LineChart, Briefcase } from "lucide-react";

const tracks = [
  {
    icon: Building2,
    title: "Emerging Markets Strategy & Growth Policy",
    desc: "Market expansion, regional competitiveness, public policy, and sustainable growth models.",
    color: "#1A56DB",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: Network,
    title: "Innovation Ecosystems & Platform Leadership",
    desc: "Startup clusters, collaboration networks, platform business models, and ecosystem scaling.",
    color: "#7C3AED",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Wallet,
    title: "Enterprise Finance, Payments & Market Access",
    desc: "Fintech adoption, digital payments, cross-border access, and inclusive enterprise finance.",
    color: "#DC2626",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Landmark,
    title: "Business Model Innovation & Competitive Advantage",
    desc: "Value creation, business transformation, sustainability, and emerging enterprise models.",
    color: "#0891B2",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Monitor,
    title: "Digital Products, Services & Customer Experience",
    desc: "Service design, product-market fit, digital adoption, and user-centered innovation.",
    color: "#D97706",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Trust, Governance & Regulatory Resilience",
    desc: "Corporate governance, regulatory strategy, risk management, and trusted growth frameworks.",
    color: "#2563EB",
    gradient: "from-blue-500 to-sky-500",
  },
  {
    icon: Cpu,
    title: "Data, Analytics & Growth Intelligence",
    desc: "Market analytics, AI-driven insights, performance metrics, and data-enabled decision making.",
    color: "#DB2777",
    gradient: "from-pink-500 to-fuchsia-500",
  },
  {
    icon: LineChart,
    title: "Supply Chains, Trade & Market Infrastructure",
    desc: "Value chains, trade ecosystems, logistics, and infrastructure for emerging market growth.",
    color: "#059669",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Briefcase,
    title: "Corporate Innovation, Startups & Enterprise Resilience",
    desc: "New ventures, corporate innovation labs, resilience, and long-term business continuity.",
    color: "#D97706",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "Entrepreneurship, Inclusion & Market Opportunities",
    desc: "Startup ecosystems, inclusive markets, social innovation, and enterprise access for all.",
    color: "#DC2626",
    gradient: "from-red-500 to-rose-500",
  },
];

const ThemesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="themes" className="section-padding gradient-section relative" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            Key Themes & <span className="text-gradient-blue">Research Tracks</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Explore the ideas shaping emerging markets, enterprise innovation, growth strategy, and future-fit market models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3">
          {tracks.map((track, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 cursor-default group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${track.gradient} flex items-center justify-center shadow-md transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
                >
                  <track.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold text-gray-300">0{index + 1}</span>
                    <h3 className="font-bold text-sm text-gray-900 truncate">{track.title}</h3>
                  </div>
                  <p
                    className={`text-xs text-gray-500 leading-relaxed transition-all duration-300 ${isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0 md:max-h-20 md:opacity-100"}`}
                  >
                    {track.desc}
                  </p>
                </div>

                <ChevronRight
                  className={`w-4 h-4 text-gray-300 flex-shrink-0 mt-1 transition-all duration-300 ${isHovered ? "translate-x-0.5" : ""}`}
                  style={isHovered ? { color: track.color } : {}}
                />

                <div
                  className="absolute left-0 top-0 w-[3px] h-0 group-hover:h-full rounded-l-xl transition-all duration-500"
                  style={{ background: track.color }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-400">
            Interdisciplinary work across the digital economy, fintech, governance, Web3, and blockchain innovation is welcome.{" "}
            <a href="#registration" className="text-[#1A56DB] font-medium hover:underline">
              Submit your abstract
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemesSection;
