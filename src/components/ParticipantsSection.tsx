import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Landmark, Briefcase, Wallet, Cpu } from "lucide-react";

const participants = [
  {
    icon: GraduationCap,
    title: "Researchers & Academics",
    headline: "Publish the Future of Enterprise",
    desc: "Share rigorous research on emerging markets, innovation strategy, enterprise performance, and policy for inclusive growth.",
    color: "#1A56DB",
    gradient: "from-blue-600 to-blue-500",
    image: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=800&q=90",
    href: "#abstract",
    linkText: "Explore abstract themes",
  },
  {
    icon: Wallet,
    title: "Fintech Founders & Product Teams",
    headline: "Build the Next Market Wave",
    desc: "Highlight innovation in payments, enterprise platforms, digital commerce, and inclusive market access for startups and scaleups.",
    color: "#0891B2",
    gradient: "from-cyan-600 to-teal-500",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=90",
    href: "#themes",
    linkText: "See innovation tracks",
  },
  {
    icon: Cpu,
    title: "Blockchain Developers & Innovators",
    headline: "Engineer Resilient Systems",
    desc: "Discuss secure digital infrastructure, tokenization, interoperability, and trust layers for modern enterprise ecosystems.",
    color: "#059669",
    gradient: "from-emerald-600 to-green-500",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=90",
    href: "#themes",
    linkText: "Discover developer topics",
  },
  {
    icon: Landmark,
    title: "Policy Makers & Regulators",
    headline: "Shape Responsible Markets",
    desc: "Collaborate on governance, regulation, compliance, and inclusive policy frameworks that support emerging markets and enterprise growth.",
    color: "#7C3AED",
    gradient: "from-violet-600 to-purple-500",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=90",
    href: "#about",
    linkText: "Review conference goals",
  },
  {
    icon: Briefcase,
    title: "Students & Early Careers",
    headline: "Launch a Future-Ready Career",
    desc: "Access mentorship, networking, and practical insights into emerging markets, innovation leadership, and enterprise strategy.",
    color: "#D97706",
    gradient: "from-amber-600 to-orange-500",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=90",
    href: "#registration",
    linkText: "Start your journey",
  },
];

const ParticipantsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section relative" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            This Conference Is <span className="text-gradient-blue">Built For You</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Whether you research emerging markets, develop innovation-led businesses, or steer enterprise strategy, there is a seat at this table for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {participants.slice(0, 3).map((participant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default h-[280px] sm:h-[320px] md:h-[340px]"
            >
              <img
                src={participant.image}
                alt={participant.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${participant.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                  <participant.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{participant.title}</h3>
                <span
                  className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2 w-fit"
                  style={{ color: "white", background: `${participant.color}90` }}
                >
                  {participant.headline}
                </span>
                <p className="text-xs text-white/70 leading-relaxed mb-4">{participant.desc}</p>
                <a
                  href={participant.href}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-3 py-2 text-[11px] font-semibold text-white hover:bg-white/20 transition"
                >
                  {participant.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {participants.slice(3).map((participant, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.38 + index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default h-[260px] sm:h-[280px] md:h-[300px]"
            >
              <img
                src={participant.image}
                alt={participant.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${participant.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                  <participant.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{participant.title}</h3>
                <span
                  className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2 w-fit"
                  style={{ color: "white", background: `${participant.color}90` }}
                >
                  {participant.headline}
                </span>
                <p className="text-xs text-white/70 leading-relaxed mb-4">{participant.desc}</p>
                <a
                  href={participant.href}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-3 py-2 text-[11px] font-semibold text-white hover:bg-white/20 transition"
                >
                  {participant.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
