import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  Award,
  BarChart2,
  CheckCircle2,
  DollarSign,
  FileText,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Ship,
  TrendingUp,
  Truck,
  UserCheck,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  {
    icon: FileText,
    title: "Export Documentation",
    desc: "Complete handling of all export paperwork — invoices, packing lists, certificates of origin, and shipping bills prepared with precision.",
  },
  {
    icon: Package,
    title: "Customs Clearance",
    desc: "Seamless customs clearance with expert handling of HS codes, duty calculations, and compliance with Indian customs regulations.",
  },
  {
    icon: Truck,
    title: "Freight Forwarding",
    desc: "End-to-end freight solutions covering air, sea, and road logistics with competitive rates from trusted carrier partners.",
  },
  {
    icon: TrendingUp,
    title: "Trade Consulting",
    desc: "Strategic guidance on international trade regulations, export incentives (MEIS/RoDTEP), and market entry strategies.",
  },
  {
    icon: Ship,
    title: "Import Advisory",
    desc: "Comprehensive import guidance — duty structures, import licensing, FSSAI/BIS compliance, and regulatory approvals.",
  },
  {
    icon: BarChart2,
    title: "Market Research",
    desc: "In-depth global market intelligence, buyer identification, and competitive analysis for your export target markets.",
  },
];

const whyChooseUs = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    desc: "Home-based operations mean lower overheads — savings passed directly to you. Premium expertise at competitive rates.",
  },
  {
    icon: UserCheck,
    title: "Personalized Service",
    desc: "You work directly with the expert, not a junior associate. Every client gets undivided attention and tailored solutions.",
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    desc: "15+ years of hands-on experience in export-import trade, customs compliance, and international logistics.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    desc: "Agile, responsive, and deadline-driven. Documentation and advisory delivered fast without compromising accuracy.",
  },
];

const serviceTypes = [
  "Export Documentation",
  "Customs Clearance",
  "Freight Forwarding",
  "Trade Consulting",
  "Import Advisory",
  "Market Research",
  "General Inquiry",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const { actor } = useActor();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.serviceType || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitInquiry(
          form.name,
          form.email,
          form.phone,
          form.serviceType,
          form.message,
        );
      }
      toast.success("Inquiry submitted! We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", serviceType: "", message: "" });
    } catch {
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navbar */}
      <header
        className="fixed top-0 inset-x-0 z-50 border-b"
        style={{
          background: "oklch(0.18 0.07 245 / 0.97)",
          borderColor: "oklch(0.75 0.12 78 / 0.25)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
              style={{
                background: "oklch(0.75 0.12 78)",
                color: "oklch(0.18 0.07 245)",
              }}
            >
              DES
            </div>
            <span className="text-white font-serif text-lg font-semibold hidden sm:block">
              Delhi Export Services
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {["home", "services", "about", "contact"].map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="px-4 py-2 rounded text-sm font-medium capitalize transition-colors hover:text-gold"
                style={{ color: "oklch(0.85 0.04 240)" }}
                data-ocid="nav.link"
              >
                {id}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="ml-2 px-5 py-2 rounded text-sm font-semibold transition-all"
              style={{
                background: "oklch(0.75 0.12 78)",
                color: "oklch(0.18 0.07 245)",
              }}
              data-ocid="nav.primary_button"
            >
              Free Consultation
            </button>
          </nav>

          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((o) => !o)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
              style={{ background: "oklch(0.18 0.07 245)" }}
            >
              <div className="px-4 pb-4 flex flex-col gap-1">
                {["home", "services", "about", "contact"].map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="text-left px-3 py-2 capitalize text-sm font-medium"
                    style={{ color: "oklch(0.85 0.04 240)" }}
                    data-ocid="nav.link"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-[520px] md:min-h-[580px] pt-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-banner.dim_1200x400.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.18 0.07 245 / 0.88) 0%, oklch(0.22 0.08 245 / 0.75) 60%, oklch(0.15 0.05 245 / 0.85) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border"
                style={{
                  color: "oklch(0.75 0.12 78)",
                  borderColor: "oklch(0.75 0.12 78 / 0.5)",
                  background: "oklch(0.75 0.12 78 / 0.1)",
                }}
              >
                Professional Export Consultancy · Delhi, India
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-5"
            >
              Your Trusted{" "}
              <span style={{ color: "oklch(0.75 0.12 78)" }}>
                Export Partner
              </span>{" "}
              in Delhi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "oklch(0.80 0.03 240)" }}
            >
              Professional export consultancy from the comfort of home —
              experienced, reliable, and cost-effective.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="px-7 py-3 rounded font-semibold text-sm transition-all"
                style={{
                  background: "oklch(0.75 0.12 78)",
                  color: "oklch(0.18 0.07 245)",
                }}
                data-ocid="hero.primary_button"
              >
                Get a Free Consultation
              </button>
              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="px-7 py-3 rounded font-semibold text-sm border-2 text-white transition-all"
                style={{ borderColor: "oklch(0.75 0.12 78 / 0.6)" }}
                data-ocid="hero.secondary_button"
              >
                Our Services
              </button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M0 48L1440 48L1440 20C1200 50 900 0 720 20C540 40 240 5 0 20L0 48Z"
              fill="oklch(0.97 0.008 240)"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section
        className="bg-background py-8 border-b"
        style={{ borderColor: "oklch(0.88 0.02 240)" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Clients Served" },
              { value: "50+", label: "Countries Covered" },
              { value: "99%", label: "Accuracy Rate" },
            ].map((stat, _i) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <div
                  className="text-2xl md:text-3xl font-serif font-bold"
                  style={{ color: "oklch(0.28 0.08 245)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: "oklch(0.50 0.04 240)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.75 0.12 78)" }}
            >
              What We Offer
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-serif font-bold"
              style={{ color: "oklch(0.18 0.07 245)" }}
            >
              Our Export Services
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-base max-w-xl mx-auto"
              style={{ color: "oklch(0.50 0.04 240)" }}
            >
              End-to-end export-import solutions tailored for businesses of all
              sizes.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="group p-6 rounded-lg border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-navy"
                style={{
                  borderColor: "oklch(0.88 0.02 240)",
                  boxShadow: "0 2px 12px -4px rgba(15,25,80,0.08)",
                }}
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.28 0.08 245 / 0.08)" }}
                >
                  <s.icon size={22} style={{ color: "oklch(0.28 0.08 245)" }} />
                </div>
                <h3
                  className="text-lg font-serif font-semibold mb-2"
                  style={{ color: "oklch(0.18 0.07 245)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.50 0.04 240)" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20"
        style={{ background: "oklch(0.22 0.07 245)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "oklch(0.75 0.12 78)" }}
              >
                About Us
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-serif font-bold text-white mb-5"
              >
                Home-Based. Expert-Driven. Delhi-Rooted.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-sm md:text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.78 0.04 240)" }}
              >
                Based in the heart of Delhi, we are a boutique export
                consultancy operating from a home office — combining the
                personal warmth of a small business with the professional depth
                of an industry veteran.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-sm md:text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.78 0.04 240)" }}
              >
                With over 15 years navigating India's complex export-import
                landscape, we've helped hundreds of businesses — from handicraft
                artisans to manufacturing SMEs — reach global markets with
                confidence.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                {[
                  "DGFT & Customs Registered Consultant",
                  "IEC Code & Licensing Assistance",
                  "GST Refund & Export Incentive Advisory",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      style={{ color: "oklch(0.75 0.12 78)", flexShrink: 0 }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.85 0.03 240)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="rounded-2xl p-8 border"
                style={{
                  background: "oklch(0.18 0.07 245 / 0.7)",
                  borderColor: "oklch(0.75 0.12 78 / 0.25)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-serif font-bold mb-4"
                  style={{
                    background: "oklch(0.75 0.12 78)",
                    color: "oklch(0.18 0.07 245)",
                  }}
                >
                  RK
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  Rajiv Kumar
                </h3>
                <p
                  className="text-xs font-semibold tracking-wide mb-4"
                  style={{ color: "oklch(0.75 0.12 78)" }}
                >
                  Export-Import Consultant · Delhi
                </p>
                <blockquote
                  className="text-sm leading-relaxed italic"
                  style={{ color: "oklch(0.78 0.04 240)" }}
                >
                  "My mission is simple: to make global trade accessible for
                  every Indian business. Whether you're exporting for the first
                  time or streamlining an existing operation, I'm here to guide
                  you every step of the way."
                </blockquote>
                <div
                  className="mt-6 pt-5 border-t grid grid-cols-2 gap-4"
                  style={{ borderColor: "oklch(0.75 0.12 78 / 0.2)" }}
                >
                  {[
                    { val: "15+", lbl: "Yrs Experience" },
                    { val: "500+", lbl: "Clients" },
                    { val: "50+", lbl: "Countries" },
                    { val: "₹100Cr+", lbl: "Trade Facilitated" },
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div
                        className="text-xl font-serif font-bold"
                        style={{ color: "oklch(0.75 0.12 78)" }}
                      >
                        {s.val}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.65 0.03 240)" }}
                      >
                        {s.lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.75 0.12 78)" }}
            >
              Why Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-serif font-bold"
              style={{ color: "oklch(0.18 0.07 245)" }}
            >
              The Delhi Export Services Advantage
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((w, i) => (
              <motion.div
                key={w.title}
                variants={fadeUp}
                className="text-center p-6 rounded-xl border bg-white"
                style={{
                  borderColor: "oklch(0.88 0.02 240)",
                  boxShadow: "0 2px 12px -4px rgba(15,25,80,0.06)",
                }}
                data-ocid={`why.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "oklch(0.75 0.12 78 / 0.12)" }}
                >
                  <w.icon size={26} style={{ color: "oklch(0.75 0.12 78)" }} />
                </div>
                <h3
                  className="text-base font-serif font-bold mb-2"
                  style={{ color: "oklch(0.18 0.07 245)" }}
                >
                  {w.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.50 0.04 240)" }}
                >
                  {w.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20"
        style={{ background: "oklch(0.95 0.01 240)" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.75 0.12 78)" }}
            >
              Get In Touch
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-serif font-bold"
              style={{ color: "oklch(0.18 0.07 245)" }}
            >
              Request a Free Consultation
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm md:text-base max-w-lg mx-auto"
              style={{ color: "oklch(0.50 0.04 240)" }}
            >
              Tell us about your export needs and we'll get back to you within
              24 hours.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 flex flex-col gap-6"
            >
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "B-45, Sector 18, Noida\nDelhi NCR — 201301, India",
                },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@delhiexportservices.in",
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.28 0.08 245 / 0.1)" }}
                  >
                    <info.icon
                      size={18}
                      style={{ color: "oklch(0.28 0.08 245)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(0.75 0.12 78)" }}
                    >
                      {info.label}
                    </p>
                    <p
                      className="text-sm whitespace-pre-line"
                      style={{ color: "oklch(0.30 0.05 240)" }}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
              <div
                className="mt-2 p-4 rounded-xl border"
                style={{
                  background: "oklch(0.28 0.08 245 / 0.06)",
                  borderColor: "oklch(0.28 0.08 245 / 0.15)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "oklch(0.28 0.08 245)" }}
                >
                  Business Hours
                </p>
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.40 0.04 240)" }}
                >
                  Monday – Saturday
                  <br />
                  9:00 AM – 7:00 PM IST
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-7 border"
                style={{
                  borderColor: "oklch(0.88 0.02 240)",
                  boxShadow: "0 4px 24px -4px rgba(15,25,80,0.10)",
                }}
                data-ocid="contact.panel"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wide"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="h-10 text-sm"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wide"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="h-10 text-sm"
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-wide"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-10 text-sm"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="service"
                      className="text-xs font-semibold uppercase tracking-wide"
                    >
                      Service Type *
                    </Label>
                    <Select
                      value={form.serviceType}
                      onValueChange={(v) => handleChange("serviceType", v)}
                    >
                      <SelectTrigger
                        className="h-10 text-sm"
                        data-ocid="contact.select"
                      >
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1.5 mb-5">
                  <Label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wide"
                  >
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Briefly describe your export/import requirements..."
                    rows={4}
                    className="text-sm resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 text-sm font-semibold rounded"
                  style={{
                    background: submitting ? undefined : "oklch(0.28 0.08 245)",
                  }}
                  data-ocid="contact.submit_button"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "oklch(0.15 0.07 245)" }}>
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                style={{
                  background: "oklch(0.75 0.12 78)",
                  color: "oklch(0.18 0.07 245)",
                }}
              >
                DES
              </div>
              <div>
                <p className="text-white font-serif font-semibold text-sm">
                  Delhi Export Services
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.60 0.04 240)" }}
                >
                  Professional Export Consultancy · Delhi, India
                </p>
              </div>
            </div>
            <nav className="flex gap-5">
              {["home", "services", "about", "contact"].map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className="text-xs capitalize transition-colors"
                  style={{ color: "oklch(0.65 0.04 240)" }}
                  data-ocid="footer.link"
                >
                  {id}
                </button>
              ))}
            </nav>
          </div>
          <div
            className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
            style={{
              borderColor: "oklch(0.75 0.12 78 / 0.15)",
              color: "oklch(0.50 0.03 240)",
            }}
          >
            <p>
              © {new Date().getFullYear()} Delhi Export Services. All rights
              reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "oklch(0.75 0.12 78)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
