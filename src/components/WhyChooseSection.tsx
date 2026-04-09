import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Shield, Zap } from "lucide-react";

const features = [
  { name: "Crossref DOI Assignment", us: true, them: false },
  { name: "10+ Indexing Directories", us: true, them: false },
  { name: "CPD Accredited Certificate", us: true, them: false },
  { name: "170M+ Metadata Exposure", us: true, them: false },
  { name: "Global Collaboration Network", us: true, them: false },
  { name: "Transparent Recognition", us: true, them: false },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section-alt relative" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            Why Choose <span className="text-gradient-blue">This Conference</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Unlike generic conferences, we deliver tangible, indexed, accredited value for your career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-[1fr_80px_80px] text-center text-[10px] uppercase tracking-wider font-bold border-b border-gray-100">
              <div className="p-3 text-left text-gray-400 pl-5">Feature</div>
              <div className="p-3 text-gray-300">Others</div>
              <div className="p-3 text-[#1A56DB] bg-blue-50/50">IC-EMIE</div>
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="grid grid-cols-[1fr_80px_80px] text-center border-b border-gray-50 last:border-0 group hover:bg-blue-50/20 transition-colors"
              >
                <div className="p-3 text-left text-gray-700 text-sm font-medium pl-5">{feature.name}</div>
                <div className="p-3 flex justify-center items-center">
                  <X className="w-4 h-4 text-red-300" />
                </div>
                <div className="p-3 flex justify-center items-center bg-blue-50/30">
                  <Check className="w-4 h-4 text-[#059669]" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A56DB] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Verified & Accredited</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every certificate, DOI, and indexing is backed by globally recognized organizations - Crossref, TheCPD.Group, and 5+ indexing partners. No vague promises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#D97706] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">Instant Value</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                From submission to DOI assignment, certificate delivery, and indexing - everything happens within the conference cycle. No waiting months for results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center pt-2"
            >
              <a
                href="#registration"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1A56DB] text-white font-semibold text-sm hover:bg-[#1648B5] transition-all shadow-lg"
              >
                Join IC-EMIE 2026
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
