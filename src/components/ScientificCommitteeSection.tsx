import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase } from "lucide-react";
import { conference } from "@/lib/conference";

interface Member {
  name: string;
  role: string;
  country: string;
  image: string;
}

const members: Member[] = [
  {
    name: "Dr. Rudrarup Gupta",
    role: "Researcher, Business & Economics",
    country: "India",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Rudrarup-Gupta.jpg",
  },
  {
    name: "Dr. Rohan Singh",
    role: "Associate Professor, Management (HR, OB) - Chandigarh University",
    country: "India",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Rohan-Singh.jpg",
  },
  {
    name: "Dr. Pradip Das",
    role: "Associate Professor (Retd.), H.O.D., Commerce Unit - Jagannath Kishore College",
    country: "India",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Pradip-Das.jpg",
  },
  {
    name: "Dr. Nalanda Roy",
    role: "Full Professor / Coordinator, Asian Studies Program, Political Science & International Studies - Georgia Southern University",
    country: "USA",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/Nalanda-Roy.jpg",
  },
  {
    name: "Dr. G. Vikram",
    role: "Associate Professor, School of Management - Karunya Institute of Technology and Sciences",
    country: "India",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-G.Vikram.jpg",
  },
  {
    name: "Dr. Ganesh Adhikari",
    role: "Researcher",
    country: "USA",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/Dr.-Ganesh-Adhikari.jpg",
  },
  {
    name: "Dr. Rahmatullah Pashtoon",
    role: "Assistant Professor, Department of National Economics - Kandahar University",
    country: "Afghanistan",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/Assist.-Prof.-Dr.-Rahmatullah-Pashtoon.jpg",
  },
  {
    name: "Academic Advisor",
    role: "Lecturer / Module Leader / Academic Advisor, Business, Entrepreneurship & Finance - Royal Docks School of Business and Law",
    country: "United Kingdom",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/1-14.jpg",
  },
  {
    name: "Dr. Tareq Nael Hashem",
    role: "Researcher",
    country: "",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/2-13.jpg",
  },
  {
    name: "Professor / Former Pro-Vice Chancellor",
    role: "Professor / Former Pro-Vice Chancellor, School of Business and Entrepreneurship - Independent University, Bangladesh",
    country: "Bangladesh",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/3-12.jpg",
  },
  {
    name: "Dr. Maatouk Khoukhi",
    role: "Associate Professor, Architectural Engineering, College of Engineering - United Arab Emirates University (UAEU)",
    country: "UAE",
    image: "https://onegrasp.com/wp-content/uploads/2025/10/4-12.jpg",
  },
];

const MemberCard = ({ member, index }: { member: Member; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: 0.04 * (index % 6) }}
    className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-300"
  >
    <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[10px] font-semibold text-gray-700">
        <MapPin className="w-3 h-3 text-[#1A56DB]" />
        {member.country}
      </div>
    </div>

    <div className="p-4 sm:p-5">
      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 leading-snug">{member.name}</h3>
      <div className="flex items-start gap-2">
        <Briefcase className="w-3.5 h-3.5 text-[#1A56DB] flex-shrink-0 mt-0.5" />
        <p className="text-xs text-gray-500 leading-relaxed">{member.role}</p>
      </div>
    </div>

    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#1A56DB] to-[#2563EB] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  </motion.div>
);

const ScientificCommitteeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1A56DB] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1A56DB]">Expert Panel</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-gray-900">
            Scientific Committee <span className="text-gradient-blue">Members</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Distinguished professors, researchers, and industry leaders from across the globe guiding the academic and innovation direction of {conference.shortName}.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {[
            { value: "11", label: "Committee Members" },
            { value: "6+", label: "Countries Represented" },
            { value: "10+", label: "Research Fields" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-[#1A56DB]">{stat.value}</div>
              <div className="text-[11px] text-gray-400 mt-0.5 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScientificCommitteeSection;
