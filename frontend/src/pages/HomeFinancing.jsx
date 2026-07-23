import { useRef } from 'react'
import Layout from '../components/common/Layout'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import CTA from '../components/sections/CTA'

const APPLY_URL = 'https://app.canadianmortgageapp.com/app/preet'

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
)
const HomeIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>)
const KeyIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>)
const BriefcaseIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>)
const RefreshIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>)
const DollarIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>)
const ChartIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>)
const LayersIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>)
const ClockIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>)
const HammerIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m14.5 12.5-8 8a2.12 2.12 0 1 1-3-3l8-8"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>)
const UserIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>)
const BankIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="21" x2="21" y2="21"/><line x1="5" y1="21" x2="5" y2="10"/><line x1="9" y1="21" x2="9" y2="10"/><line x1="15" y1="21" x2="15" y2="10"/><line x1="19" y1="21" x2="19" y2="10"/><polygon points="12 3 21 9 3 9"/></svg>)
const HeartHandsIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>)
const ShieldCheckIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11.5 14.5 15 10"/></svg>)
const CalcIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="11" x2="8" y2="11"/><line x1="12" y1="11" x2="12" y2="11"/><line x1="16" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="8" y2="15"/><line x1="12" y1="15" x2="12" y2="15"/><line x1="16" y1="15" x2="16" y2="15"/><line x1="8" y1="19" x2="16" y2="19"/></svg>)
const QuestionIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12" y2="17"/></svg>)
const BookIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>)
const CheckIcon = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>)

const solutions = [
  { icon: <HomeIcon />, title: 'First-Time Home Buyers' },
  { icon: <KeyIcon />, title: 'Buying a Home' },
  { icon: <BriefcaseIcon />, title: 'Self-Employed' },
  { icon: <RefreshIcon />, title: 'Mortgage Renewal' },
  { icon: <DollarIcon />, title: 'Mortgage Refinancing' },
  { icon: <ChartIcon />, title: 'Investment Properties' },
  { icon: <LayersIcon />, title: 'Private Mortgages' },
  { icon: <ClockIcon />, title: 'Reverse Mortgages' },
  { icon: <HammerIcon />, title: 'Construction Mortgages' },
]

const whyChoose = [
  { icon: <UserIcon />, title: 'Personalized Strategy', desc: "Every client has different goals. We tailor financing solutions that fit your financial picture — not just today's rate." },
  { icon: <BankIcon />, title: 'Multiple Lenders', desc: 'Compare mortgage options from a wide network of lenders to find competitive rates and flexible solutions.' },
  { icon: <HeartHandsIcon />, title: 'End-to-End Support', desc: "From your first consultation through closing day, you'll have support at every step of the mortgage process." },
  { icon: <ShieldCheckIcon />, title: 'Transparent Advice', desc: 'Clear recommendations, straightforward communication, and no unnecessary jargon — just advice you can trust.' },
]

const tools = [
  { icon: <CalcIcon />, title: 'Mortgage Calculator', desc: 'Estimate your monthly mortgage payments and explore different financing scenarios before you begin your home-buying journey.', cta: 'Calculate Now', to: '/blog' },
  { icon: <QuestionIcon />, title: 'Mortgage FAQs', desc: 'Find answers to common questions about approvals, down payments, interest rates, renewals, refinancing, and more.', cta: 'View FAQs', to: '/faq' },
  { icon: <BookIcon />, title: 'Mortgage Learning Centre', desc: 'Explore practical guides and articles designed to help you make confident mortgage decisions.', cta: 'Read Articles', to: '/blog' },
]

const reviews = [
  { category: 'First-Time Buyer', text: "Working with Preet was an amazing experience! As a first-time homebuyer, I was nervous, but he made everything so easy. He answered all my questions, explained things clearly, and always made sure we felt confident in our decisions. We couldn't have asked for a better mortgage broker. Highly recommend!", name: 'S.S.' },
  { category: 'Mortgage Refinance', text: "I reached out to Preet to see if refinancing was the right move for me, and I'm so glad I did. He not only helped me refinance my mortgage but also consolidated my debt, which dropped my monthly payments significantly. Now I've got way more breathing room each month and improved cashflow. He made the process smooth, explained everything clearly, and really had my best interest in mind. Highly recommend him if you're looking to get your finances on track!", name: 'M.P.' },
  { category: 'Investment Property', text: "I've gone through the mortgage process twice before, but working with Preet this time was a whole different experience, in the best way. From the very beginning, he was honest, professional, and genuinely cared about what was best for me and my family. He found us an amazing rate, handled everything on time, and made the whole process smoother than I ever thought possible. Not only did I find a great mortgage agent, but I also gained a trusted friend. Highly recommend Preet to anyone looking for real guidance and support!", name: 'M.' },
]

export default function HomeFinancing() {
  const applyRef = useRef(null)
  const whyRef = useRef(null)
  const toolsRef = useRef(null)
  const reviewsRef = useRef(null)
  const applyInView = useInView(applyRef, { once: true, margin: '-60px' })
  const whyInView = useInView(whyRef, { once: true, margin: '-60px' })
  const toolsInView = useInView(toolsRef, { once: true, margin: '-60px' })
  const reviewsInView = useInView(reviewsRef, { once: true, margin: '-60px' })

  return (
    <Layout>
      {/* Section 1 — Hero */}
      <section className="relative bg-navy-950 text-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80" alt="Happy family in front of their Canadian home"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/40" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="gold-label">Home Financing</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Home Financing <span className="text-gold-400">Made Simple</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Whether you're buying your first home, renewing your mortgage, refinancing, or investing in real estate, Finance With Preet helps you find the right mortgage solution with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={APPLY_URL} target="_blank" rel="noreferrer" className="btn-primary">Apply for a Mortgage</a>
            <Link to="/booking" className="btn-outline">Book a Free Consultation</Link>
          </div>
        </motion.div>
      </section>

      {/* Section 2 — Which Mortgage Solution */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Mortgage Solutions</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Which Mortgage Solution<br />Are You Looking For?</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {solutions.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="flex items-center gap-4 bg-gray-50 border border-gray-200 hover:border-gold-500/40 hover:shadow-lg rounded-2xl p-6 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-600 flex-shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-navy-900 text-[15px]">{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Qualify application CTA */}
      <section className="py-28 bg-navy-950 relative overflow-hidden" ref={applyRef}>
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={applyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>
              <span className="gold-label">Get Started</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">Find Out What You Could Qualify For</h2>
              <div className="w-12 h-0.5 bg-gold-500 mb-6" />
              <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                Curious about how much you may qualify for? Complete our secure mortgage application to estimate your eligibility, organize your financial information, and help us better understand your home financing needs. Once submitted, we'll review your information and provide personalized guidance based on your goals.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a href={APPLY_URL} target="_blank" rel="noreferrer" className="btn-primary">Start My Mortgage Application</a>
                <Link to="/booking" className="text-gold-400 font-semibold text-sm hover:text-gold-300 transition-colors">Book a Consultation Instead</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={applyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex justify-center">
              <div className="relative w-64 rounded-[2.5rem] border-8 border-navy-800 bg-gradient-to-b from-emerald-600 to-emerald-700 shadow-navy-lg overflow-hidden">
                <div className="p-6 pt-10 text-white">
                  <p className="font-serif text-2xl font-bold mb-1">Welcome!</p>
                  <p className="text-emerald-100 text-sm mb-8">Have a wonderful day</p>
                </div>
                <div className="bg-white rounded-t-3xl p-6 -mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-bold text-navy-900 text-[15px]">You are Pre-Qualified</p>
                    <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white"><CheckIcon /></span>
                  </div>
                  <p className="font-serif text-3xl font-bold text-navy-900 mb-1">$888,231</p>
                  <p className="text-gray-400 text-xs mb-6">Maximum Purchase Price</p>
                  <div className="bg-emerald-600 text-white text-sm font-semibold rounded-lg px-4 py-3 flex items-center justify-between">
                    What's next? <ArrowRight />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 — Why Homebuyers Choose Finance With Preet */}
      <section className="py-28 bg-gray-50 relative overflow-hidden" ref={whyRef}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>
              <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Why Choose Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Why Homebuyers Choose<br />Finance With Preet?</h2>
              <div className="w-12 h-0.5 bg-gold-500 mb-5" />
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                More than finding you a mortgage—we help you make confident financial decisions.
              </p>

              <div className="space-y-6 mb-10">
                {whyChoose.map((w, i) => (
                  <motion.div key={w.title}
                    initial={{ opacity: 0, y: 20 }} animate={whyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-600 flex-shrink-0">
                      {w.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">{w.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-navy-900 font-semibold mb-4">Ready to explore your mortgage options?</p>
              <Link to="/booking" className="btn-primary inline-block">Book a Free Consultation</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="rounded-2xl shadow-xl border border-gray-200 bg-white overflow-hidden max-w-md mx-auto">
                <img src="/preet.png" alt="Preet Kamal Singh"
                  className="w-full h-[560px] object-cover object-top" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 — Mortgage Tools & Resources */}
      <section className="py-28 bg-white relative overflow-hidden" ref={toolsRef}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={toolsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Resources</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Mortgage Tools &amp; Resources</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((t, i) => (
              <motion.div key={t.title}
                initial={{ opacity: 0, y: 30 }} animate={toolsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 hover:border-gold-500/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-400">
                <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  {t.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{t.desc}</p>
                <Link to={t.to} className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm group">
                  {t.cta} <ArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Testimonials */}
      <section className="py-28 bg-gray-50 relative overflow-hidden" ref={reviewsRef}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Client Stories</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Trusted by Homebuyers Across Canada</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Real experiences from clients who trusted Finance With Preet to help them navigate one of life's biggest financial decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={r.name}
                initial={{ opacity: 0, y: 30 }} animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col bg-white border border-gray-200 rounded-2xl p-7">
                <span className="inline-block self-start bg-gold-500/10 text-gold-600 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                  {r.category}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{r.text}</p>
                <p className="font-serif font-bold text-navy-900">{r.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-600 mb-4">See what more clients are saying.</p>
            <a href="#" className="btn-primary inline-block">View All Reviews</a>
          </div>
        </div>
      </section>

      {/* Section 7 — Final banner */}
      <CTA
        label="Take the Next Step"
        heading={<>Ready to Take the<br /><span className="text-gold-400">Next Step?</span></>}
        text="Apply for your mortgage online or book a free consultation to talk through your options."
      >
        <a href={APPLY_URL} target="_blank" rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 btn-primary text-base px-8 py-4">Apply Now</a>
        <Link to="/booking"
          className="inline-flex items-center justify-center gap-3 border-2 border-gold-500 bg-gold-500/10 text-gold-300 hover:border-gold-400 hover:bg-gold-500/20 font-bold px-8 py-4 rounded-lg transition-all duration-300 text-base backdrop-blur-sm shadow-gold">Book Consultation</Link>
      </CTA>
    </Layout>
  )
}
