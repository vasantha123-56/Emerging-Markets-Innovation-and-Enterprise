import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MessageCircle, ExternalLink, ScrollText, Globe, Send, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import { conference } from "@/lib/conference";

const countryCodes = [
  { code: "+93", country: "Afghanistan" }, { code: "+355", country: "Albania" }, { code: "+213", country: "Algeria" },
  { code: "+376", country: "Andorra" }, { code: "+244", country: "Angola" }, { code: "+54", country: "Argentina" },
  { code: "+374", country: "Armenia" }, { code: "+61", country: "Australia" }, { code: "+43", country: "Austria" },
  { code: "+994", country: "Azerbaijan" }, { code: "+973", country: "Bahrain" }, { code: "+880", country: "Bangladesh" },
  { code: "+375", country: "Belarus" }, { code: "+32", country: "Belgium" }, { code: "+975", country: "Bhutan" },
  { code: "+591", country: "Bolivia" }, { code: "+387", country: "Bosnia" }, { code: "+267", country: "Botswana" },
  { code: "+55", country: "Brazil" }, { code: "+673", country: "Brunei" }, { code: "+359", country: "Bulgaria" },
  { code: "+855", country: "Cambodia" }, { code: "+237", country: "Cameroon" }, { code: "+1", country: "Canada" },
  { code: "+56", country: "Chile" }, { code: "+86", country: "China" }, { code: "+57", country: "Colombia" },
  { code: "+243", country: "Congo" }, { code: "+506", country: "Costa Rica" }, { code: "+385", country: "Croatia" },
  { code: "+53", country: "Cuba" }, { code: "+357", country: "Cyprus" }, { code: "+420", country: "Czech Republic" },
  { code: "+45", country: "Denmark" }, { code: "+1-809", country: "Dominican Republic" }, { code: "+593", country: "Ecuador" },
  { code: "+20", country: "Egypt" }, { code: "+503", country: "El Salvador" }, { code: "+372", country: "Estonia" },
  { code: "+251", country: "Ethiopia" }, { code: "+358", country: "Finland" }, { code: "+33", country: "France" },
  { code: "+995", country: "Georgia" }, { code: "+49", country: "Germany" }, { code: "+233", country: "Ghana" },
  { code: "+30", country: "Greece" }, { code: "+502", country: "Guatemala" }, { code: "+504", country: "Honduras" },
  { code: "+852", country: "Hong Kong" }, { code: "+36", country: "Hungary" }, { code: "+354", country: "Iceland" },
  { code: "+91", country: "India" }, { code: "+62", country: "Indonesia" }, { code: "+98", country: "Iran" },
  { code: "+964", country: "Iraq" }, { code: "+353", country: "Ireland" }, { code: "+972", country: "Israel" },
  { code: "+39", country: "Italy" }, { code: "+1-876", country: "Jamaica" }, { code: "+81", country: "Japan" },
  { code: "+962", country: "Jordan" }, { code: "+7", country: "Kazakhstan" }, { code: "+254", country: "Kenya" },
  { code: "+965", country: "Kuwait" }, { code: "+856", country: "Laos" }, { code: "+371", country: "Latvia" },
  { code: "+961", country: "Lebanon" }, { code: "+218", country: "Libya" }, { code: "+370", country: "Lithuania" },
  { code: "+352", country: "Luxembourg" }, { code: "+261", country: "Madagascar" }, { code: "+60", country: "Malaysia" },
  { code: "+960", country: "Maldives" }, { code: "+223", country: "Mali" }, { code: "+356", country: "Malta" },
  { code: "+52", country: "Mexico" }, { code: "+373", country: "Moldova" }, { code: "+976", country: "Mongolia" },
  { code: "+212", country: "Morocco" }, { code: "+258", country: "Mozambique" }, { code: "+95", country: "Myanmar" },
  { code: "+977", country: "Nepal" }, { code: "+31", country: "Netherlands" }, { code: "+64", country: "New Zealand" },
  { code: "+505", country: "Nicaragua" }, { code: "+234", country: "Nigeria" }, { code: "+850", country: "North Korea" },
  { code: "+47", country: "Norway" }, { code: "+968", country: "Oman" }, { code: "+92", country: "Pakistan" },
  { code: "+970", country: "Palestine" }, { code: "+507", country: "Panama" }, { code: "+595", country: "Paraguay" },
  { code: "+51", country: "Peru" }, { code: "+63", country: "Philippines" }, { code: "+48", country: "Poland" },
  { code: "+351", country: "Portugal" }, { code: "+974", country: "Qatar" }, { code: "+40", country: "Romania" },
  { code: "+7", country: "Russia" }, { code: "+250", country: "Rwanda" }, { code: "+966", country: "Saudi Arabia" },
  { code: "+221", country: "Senegal" }, { code: "+381", country: "Serbia" }, { code: "+65", country: "Singapore" },
  { code: "+421", country: "Slovakia" }, { code: "+386", country: "Slovenia" }, { code: "+252", country: "Somalia" },
  { code: "+27", country: "South Africa" }, { code: "+82", country: "South Korea" }, { code: "+34", country: "Spain" },
  { code: "+94", country: "Sri Lanka" }, { code: "+249", country: "Sudan" }, { code: "+46", country: "Sweden" },
  { code: "+41", country: "Switzerland" }, { code: "+963", country: "Syria" }, { code: "+886", country: "Taiwan" },
  { code: "+255", country: "Tanzania" }, { code: "+66", country: "Thailand" }, { code: "+216", country: "Tunisia" },
  { code: "+90", country: "Turkey" }, { code: "+971", country: "UAE" }, { code: "+256", country: "Uganda" },
  { code: "+44", country: "UK" }, { code: "+380", country: "Ukraine" }, { code: "+598", country: "Uruguay" },
  { code: "+1", country: "USA" }, { code: "+998", country: "Uzbekistan" }, { code: "+58", country: "Venezuela" },
  { code: "+84", country: "Vietnam" }, { code: "+967", country: "Yemen" }, { code: "+260", country: "Zambia" },
  { code: "+263", country: "Zimbabwe" },
];

const countries = countryCodes.map(c => c.country);

const roles = ["Student","Researcher","Academic Faculty","Industry Professional","Government / Policy Maker","Entrepreneur / Innovator","Other"];
const referralSources = ["Google Search","LinkedIn","Email","Colleague","Social Media","Other"];

const WEB3FORMS_KEY = "6dea2bb5-2738-49ad-badc-11f252014b54";

const RegistrationForm = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const thankYouRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "" });
  const [codeSearch, setCodeSearch] = useState("");

  /* On mobile, intercept #registration clicks and scroll directly to form card */
  useEffect(() => {
    const isMobile = () => window.innerWidth < 1024;
    const handleClick = (e: MouseEvent) => {
      if (!isMobile()) return;
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href="#registration"]') || target.closest('a[href*="registration"]');
      if (anchor && formRef.current) {
        e.preventDefault();
        const top = formRef.current.getBoundingClientRect().top + window.scrollY - 48;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  /* Scroll thank-you card into view on mobile after submission */
  useEffect(() => {
    if (submitted && thankYouRef.current) {
      setTimeout(() => {
        if (!thankYouRef.current) return;
        const top = thankYouRef.current.getBoundingClientRect().top + window.scrollY - 48;
        window.scrollTo({ top, behavior: "smooth" });
      }, 100);
    }
  }, [submitted]);

  const filteredCodes = codeSearch
    ? countryCodes.filter(c => c.country.toLowerCase().includes(codeSearch.toLowerCase()) || c.code.includes(codeSearch))
    : countryCodes;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const fullName = data.get("fullName") as string;
    const email = data.get("email") as string;
    setFormData({ fullName, email });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `${conference.registrationSubjectPrefix}: ${fullName}`,
          from_name: conference.registrationFromName,
          name: fullName,
          email: email,
          phone: `${data.get("countryCode") || ""} ${data.get("phone") || ""}`.trim(),
          profession: data.get("profession") || "",
          country: data.get("country") || "",
          role: data.get("role") || "",
          referral: data.get("referral") || "",
          comments: data.get("comments") || "",
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm font-medium transition-all duration-200 focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-gray-400";
  const selectClass = "w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-700 text-sm font-medium transition-all duration-200 appearance-none focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-blue-100 outline-none";

  if (submitted) {
    return (
      <section id="registration" className="section-padding gradient-section-alt relative" ref={ref}>
        <div ref={thankYouRef} className="relative z-10 max-w-lg mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-10 border border-gray-100 shadow-lg">
            <div className="w-16 h-16 rounded-full border-2 border-[#059669] flex items-center justify-center mx-auto mb-5">
              <svg width="32" height="32" viewBox="0 0 40 40">
                <path d="M10 20 L17 27 L30 13" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  style={{ strokeDasharray: 100, animation: "drawCheck 0.8s ease-out forwards" }} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Thank You, {formData.fullName?.split(" ")[0] || "there"}!</h3>
            <p className="text-gray-500 mb-2 text-sm">You're officially on the list for <span className="text-[#1A56DB] font-semibold">{conference.shortName}</span>.</p>
            <p className="text-gray-500 mb-6 text-sm">We'll reach out at <span className="text-gray-900">{formData.email}</span> within 24 hours.</p>
            <div className="space-y-2.5">
              <a href={conference.whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1FB855] transition-all">
                <MessageCircle className="w-4 h-4" /> Join WhatsApp Community
              </a>
              <a href={conference.websiteUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-all">
                <ExternalLink className="w-4 h-4" /> Visit OneGrasp Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="section-padding relative overflow-hidden bg-gradient-to-br from-[#F0F4FF] via-white to-[#F5F7FA] scroll-mt-14 md:scroll-mt-20" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start">

          {/* Left sidebar — info panel (desktop only) */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
            className="hidden lg:block lg:sticky lg:top-24">
            {/* Company logo */}
            <div className="mb-5">
              <img src={logo} alt="OneGrasp" className="h-10 sm:h-12 object-contain" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 text-gray-900 leading-tight">
              Secure Your Spot at <span className="text-gradient-blue">{conference.shortName}</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Fill in your details and our team will reach out within 24 hours with full conference and abstract submission details.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: ScrollText, text: "Accredited Certificates", desc: "CPD + Presentation certificates" },
                { icon: Globe, text: "Open to All Countries", desc: "50+ nations participating" },
                { icon: ShieldCheck, text: "Verified & Indexed", desc: "Crossref DOI · 10+ directories" },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100/50">
                  <div className="w-8 h-8 rounded-lg bg-[#1A56DB] flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{b.text}</p>
                    <p className="text-[11px] text-gray-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-1">
              <a href="mailto:support@onegrasp.com" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1A56DB] text-xs font-semibold hover:bg-blue-100 transition-colors">
                📧 support@onegrasp.com
              </a>
              <a href="tel:+918977760443" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] text-xs font-semibold hover:bg-emerald-100 transition-colors">
                📞 +91 89777 60443
              </a>
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.form
            ref={formRef}
            id="registration-form"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 border-gray-200 scroll-mt-12"
          >
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Full Name *</label>
                  <input name="fullName" required className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Email Address *</label>
                  <input name="email" type="email" required className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Phone Number *</label>
                  <div className="flex gap-2">
                    <div className="relative w-[140px] flex-shrink-0">
                      <select name="countryCode" required className={selectClass + " pr-2 text-xs"} defaultValue="+91">
                        {countryCodes.map((c, i) => (
                          <option key={i} value={c.code}>{c.code} {c.country}</option>
                        ))}
                      </select>
                    </div>
                    <input name="phone" type="tel" required placeholder="Phone number" className={inputClass + " flex-1"} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Profession / Designation</label>
                  <input name="profession" className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Country *</label>
                  <select name="country" required className={selectClass} defaultValue="">
                    <option value="" disabled>Select country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">Current Role</label>
                  <select name="role" className={selectClass} defaultValue="">
                    <option value="" disabled>Select role</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1 block">How did you hear about us?</label>
                <select name="referral" className={selectClass} defaultValue="">
                  <option value="" disabled>Select source</option>
                  {referralSources.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1 block">Questions or Comments</label>
                <textarea name="comments" rows={2} className={inputClass} />
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-gray-500 leading-relaxed">
                <input type="checkbox" required className="mt-0.5 accent-[#1A56DB]" />
                <span>I agree to be contacted by OneGrasp regarding this event and future conferences.</span>
              </label>

              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-base bg-gradient-to-r from-[#1A56DB] to-[#2563EB] text-white hover:from-[#1648B5] hover:to-[#1A56DB] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <><Send className="w-4 h-4" /> Submit & Reserve My Spot</>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
