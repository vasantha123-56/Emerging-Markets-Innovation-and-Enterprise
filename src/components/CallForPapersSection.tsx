import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { abstractTopics } from "@/lib/conference";

const CallForPapersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToRegistration = () => {
    const element = document.getElementById("registration");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d]">Call for Abstracts</h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            IC-EMIE 2026 invites interdisciplinary abstract submissions on emerging markets evolution, innovation ecosystems, enterprise strategy, inclusive growth, and future-ready policy frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&q=90&fit=crop"
                alt="Conference abstract presentation"
                className="w-full h-[300px] md:h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#059669]" />
                  <span className="text-sm font-semibold text-gray-800">Submit Your Abstract</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#059669]/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#1a365d]/10 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-sm text-gray-500">
              Submissions are welcomed on, but not limited to, the following themes:
            </p>

            <ul className="space-y-3">
              {abstractTopics.map((topic, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <span className="flex-shrink-0 w-2.5 h-2.5 mt-2 rounded-sm bg-[#059669] group-hover:scale-125 transition-transform duration-200" />
                  <span className="text-gray-700 font-medium text-base md:text-lg leading-relaxed group-hover:text-[#1a365d] transition-colors duration-200">
                    {topic}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6"
            >
              <Button
                onClick={scrollToRegistration}
                className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Register Your Interest
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapersSection;
