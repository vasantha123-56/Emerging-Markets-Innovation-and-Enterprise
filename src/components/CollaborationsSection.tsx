import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import logoCrossref from "@/assets/logo-rmetahub.png";
import logoCpd from "@/assets/logo-doi.png";
import logoJci from "@/assets/logo-jci.png";
import logoMetaspectra from "@/assets/logo-metaspectra.png";
import logoRmetahub from "@/assets/mahendra.png";
import logoIntelliminded from "@/assets/logo-crossref.png";
import logoDoi from "@/assets/logo-intelliminded.png";

const collaborators = [
  { name: "Crossref", logo: logoCrossref, website: "https://www.crossref.org/", badge: "World's #1 DOI Registration Agency", desc: "Trusted by over 50,000 publishers across 190 countries. Your DOI (10.65838) makes research permanently citable.", color: "#1A56DB" },
  { name: "CPD Accredited", logo: logoCpd, website: "https://thecpd.group/", badge: "Global CPD Body", desc: "Globally recognized CPD accreditation confirming highest professional education standards in 50+ countries.", color: "#059669" },
  { name: "Journal Citation Index", logo: logoJci, website: "https://journalcitationindex.org", badge: "Journal Indexing", desc: "Global platform showcasing credible journals, citation impact tracking, and academic publishing standards.", color: "#0891B2" },
  { name: "MetaSpectra", logo: logoMetaspectra, website: "https://metaspectra.org", badge: "170M+ Records", desc: "Interdisciplinary knowledge ecosystem with 170M+ metadata records spanning every scientific discipline.", color: "#7C3AED" },
  { name: "RMetaHub", logo: logoRmetahub, website: "https://rmetahub.com", badge: "Research Intelligence", desc: "Unified hub for research intelligence, citation networks, and institutional data in one powerful platform.", color: "#D97706" },
  { name: "IntelliMindEd", logo: logoIntelliminded, website: "https://intelliminded.com", badge: "Academic Growth", desc: "Driving digital learning transformation, research excellence, and global academic growth.", color: "#DC2626" },
  { name: "DOI", logo: logoDoi, website: "https://www.doi.org/", badge: "Digital Object Identifier", desc: "Your abstract indexed with DOI increases citation, collaboration invitations, and academic recognition globally.", color: "#2563EB" },
];

const CollaborationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section-alt relative" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            Globally Accredited & <span className="text-gradient-gold">Powered By</span> World-Class Partners
          </h2>
          <p className="text-gray-500 text-base max-w-3xl mx-auto">
            Your participation is recognized, indexed, and certified by the world's most trusted academic organizations.
          </p>
        </motion.div>

        {/* Large logo cards grid — bigger logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {collaborators.map((c, i) => (
            <motion.a key={i} href={c.website} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
              className="group bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-gray-200 transition-all duration-300 relative overflow-hidden"
            >
              {/* Larger logo container */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gray-50 border border-gray-100 p-4 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <img src={c.logo} alt={c.name} className="w-full h-full object-contain" />
              </div>
              <h4 className="font-bold text-base text-gray-900 mb-1">{c.name}</h4>
              <span className="text-[11px] font-medium px-3 py-1 rounded-full mb-2" style={{ color: c.color, background: `${c.color}12` }}>
                {c.badge}
              </span>
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{c.desc}</p>
              <div className="flex items-center gap-1 mt-auto pt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: c.color }}>
                <ExternalLink className="w-3.5 h-3.5" /> Visit
              </div>
            </motion.a>
          ))}
        </div>

        {/* Scrolling ticker */}
        <div className="mt-8 py-3 overflow-hidden bg-gray-50 border-t border-b border-gray-100 rounded-xl">
          <div className="animate-marquee whitespace-nowrap flex">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="text-xs text-gray-400 font-medium mx-4 inline-block min-w-max">
                ✦  Crossref  ·  DOI: 10.65838  ·  CPD Accredited  ·  Journal Citation Index  ·  MetaSpectra (170M+ Records)  ·  RMetaHub  ·  IntelliMindEd  ·  Google Scholar  
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
