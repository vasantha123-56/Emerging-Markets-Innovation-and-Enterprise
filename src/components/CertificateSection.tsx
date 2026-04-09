import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import blurImg from "@/assets/blur.png";

const CertificateSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section relative" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-14 text-gray-900"
        >
          Certification <span className="text-gradient-gold">Preview</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative rounded-2xl p-1 animate-border-shimmer" style={{ border: "2px solid rgba(217,119,6,0.3)", background: "rgba(217,119,6,0.02)" }}>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={blurImg} alt="IC-EMIE 2026 Certificate Preview" className="w-full h-auto" />
              </div>
            </div>
            <p className="text-center text-[11px] text-gray-400 mt-2">* Personal details blurred for privacy</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Professionally Designed Certificate by <span className="text-[#D97706]">OneGrasp</span>
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Recognized and indexed event documentation - each certificate carries the conference identity, participant details, and unique Certificate ID with accreditation badges.
            </p>
            <div className="space-y-3">
              <div className="light-card rounded-xl p-4" style={{ borderLeftWidth: 3, borderLeftColor: "#059669" }}>
                <p className="text-sm text-gray-700">
                  <span className="text-[#059669] font-semibold">Certificate awarded</span> after submitting post-conference feedback
                </p>
              </div>
              <div className="light-card rounded-xl p-4" style={{ borderLeftWidth: 3, borderLeftColor: "#D97706" }}>
                <p className="text-sm text-gray-700">
                  <span className="text-[#D97706] font-semibold">Commemorative Memento</span> for active contributors and speakers
                </p>
              </div>
              <div className="light-card rounded-xl p-4" style={{ borderLeftWidth: 3, borderLeftColor: "#0891B2" }}>
                <p className="text-sm text-gray-700">
                  <span className="text-[#0891B2] font-semibold">CPD Accredited</span> - recognized for Continuing Professional Development
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
