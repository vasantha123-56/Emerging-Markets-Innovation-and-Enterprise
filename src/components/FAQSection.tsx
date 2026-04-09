import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is participation free or paid?",
    a: "Registration for participation is open to all. Contact the OneGrasp team via the form or WhatsApp for detailed pricing on abstract submission, speaker slots, and certificate packages.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. Every registered participant receives a Certificate of Participation upon completing the post-conference feedback form. Speakers and presenters receive a Certificate of Presentation plus a Commemorative Memento.",
  },
  {
    q: "Will my abstract receive a DOI?",
    a: "Yes. All accepted abstracts receive a permanent Crossref DOI (10.65838) making your research globally citable and permanently accessible.",
  },
  {
    q: "Which indexing directories will my abstract appear in?",
    a: "Google Scholar, Journal Citation Index, MetaSpectra (170M+ records), RMetaHub, IntelliMindEd, and 5+ additional directories.",
  },
  {
    q: "Is the conference CPD accredited?",
    a: "Yes. Participation is CPD accredited through TheCPD.Group. You will receive a CPD certificate confirming your professional development hours.",
  },
  {
    q: "How do I join the conference on the event day?",
    a: "All registered participants receive a virtual access link via email before the event. The conference is fully online with no software installation required.",
  },
  {
    q: "Can I present research from any country?",
    a: "Absolutely. This is an international conference welcoming participants and submissions from every country globally.",
  },
  {
    q: "What topics are accepted for abstract submission?",
    a: "Abstracts are invited on emerging markets, innovation ecosystems, enterprise transformation, growth strategy, inclusive business models, digital adoption, governance, regulation, and related interdisciplinary themes.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding gradient-section-alt relative" ref={ref}>
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="light-card rounded-xl overflow-hidden transition-colors"
              style={openIndex === i ? { borderLeftWidth: 3, borderLeftColor: "#1A56DB" } : {}}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 text-sm hover:text-[#1A56DB] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#1A56DB] flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
