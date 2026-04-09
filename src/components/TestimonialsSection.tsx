import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Presenting at this conference gave my research a global DOI and connected me with collaborators I never would have found otherwise. The CPD certificate was an added bonus for my professional registration.",
    name: "Dr. A. Mehta",
    role: "Associate Professor",
    country: "India",
    initials: "AM",
    color: "#1A56DB",
  },
  {
    quote: "As a fintech product researcher, the sessions on digital payments, tokenization, and governance were immediately useful. The certificate and Crossref DOI gave my abstract real academic weight.",
    name: "S. Kowalski",
    role: "Fintech Research Lead",
    country: "Poland",
    initials: "SK",
    color: "#0891B2",
  },
  {
    quote: "The conference was superbly organized. Being indexed in Google Scholar and 10+ directories through a single abstract submission is remarkable value. Highly recommend to every early-career researcher.",
    name: "T. Nakamura",
    role: "PhD Candidate",
    country: "Japan",
    initials: "TN",
    color: "#D97706",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section relative" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            Voices From Our <span className="text-gradient-blue">Global Community</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="light-card light-card-hover rounded-2xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              <p className="text-sm text-gray-500 italic leading-relaxed mb-6">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}, {t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
