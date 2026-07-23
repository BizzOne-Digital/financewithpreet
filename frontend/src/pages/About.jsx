import { useRef } from 'react'
import Layout from '../components/common/Layout'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import CTA from '../components/sections/CTA'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
)
const ShieldIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const LightbulbIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>
)
const TargetIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
)
const HandshakeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
)
const DocumentIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
)
const GrowthIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const values = [
  { icon: <ShieldIcon />, title: 'Integrity Above Everything', desc: 'We believe trust is earned through honesty. Every recommendation is made with your best interests in mind, ensuring transparency and clarity at every step.' },
  { icon: <LightbulbIcon />, title: 'Education First', desc: "We don't just provide solutions — we help you understand them. Our goal is to empower you with the knowledge to make confident financial decisions." },
  { icon: <TargetIcon />, title: 'Personalized Guidance', desc: 'No two financial journeys are the same. Every mortgage, insurance plan, and investment strategy is tailored to your unique goals and circumstances.' },
  { icon: <HandshakeIcon />, title: 'Long-Term Relationships', desc: "Our relationship doesn't end once your mortgage closes or your policy is approved. We're here to support your financial journey through every stage of life." },
  { icon: <DocumentIcon />, title: 'Simplicity', desc: "Financial planning shouldn't feel overwhelming. We simplify complex concepts into clear, practical advice you can actually use." },
  { icon: <GrowthIcon />, title: 'Growth Mindset', desc: "Whether you're buying your first home, protecting your family, or building wealth, we're committed to helping you move confidently toward your financial goals." },
]

const pillars = [
  { t: 'Mortgage Solutions', d: 'The right home financing at every stage.', to: '/home-financing' },
  { t: 'Investment Planning', d: 'Building lasting, long-term wealth.', to: '/services#wealth-planning' },
  { t: 'Insurance Planning', d: 'Protecting what matters most to your family.', to: '/services#financial-protection' },
]

const promises = [
  { t: 'We Promise To Listen First', d: 'Every recommendation begins with understanding your goals, priorities, and concerns — not with selling a product.' },
  { t: 'We Promise To Keep Things Simple', d: "Financial decisions shouldn't require a finance degree. We'll explain your options in clear, straightforward language so you can make informed choices with confidence." },
  { t: 'We Promise To Be Transparent', d: "You'll always understand why a recommendation is being made, along with its benefits and important considerations." },
  { t: 'We Promise To Put Your Goals First', d: "Whether it's buying your first home, protecting your family, or growing your wealth, every strategy is designed around what matters most to you." },
  { t: 'We Promise To Be Here Beyond the Transaction', d: "Life changes, and your financial plan should evolve with it. We're committed to building a long-term relationship and being a trusted resource whenever you need guidance." },
]

export default function About() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const missionRef = useRef(null)
  const commitRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-60px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-60px' })
  const missionInView = useInView(missionRef, { once: true, margin: '-60px' })
  const commitInView = useInView(commitRef, { once: true, margin: '-60px' })

  return (
    <Layout>
      {/* Section 1 — Hero */}
      <section className="relative bg-navy-950 text-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" alt=""
            className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 to-navy-950/95" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-gold-500/5 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="gold-label">About</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Finance With <span className="text-gold-400">Preet</span>
          </h1>
          <p className="font-serif text-lg md:text-xl text-gold-300 font-semibold mb-6">
            Securing Your Today. Building Your Tomorrow.
          </p>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Finance With Preet is a Canada-based financial services brand helping individuals and families make confident decisions in mortgages, insurance, and long-term wealth planning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="btn-primary">Book a Free Consultation</Link>
            <Link to="/services" className="btn-outline">Explore Services</Link>
          </div>
        </motion.div>
      </section>

      {/* Section 2 — Story */}
      <section className="py-28 bg-[#FAFAF7] overflow-hidden" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Meet Preet Kamal Singh</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">The Story Behind Finance With Preet</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl shadow-xl border border-gray-200 bg-white overflow-hidden max-w-md mx-auto">
                <img src="/preet.png"
                  alt="Preet Kamal Singh - Financial Advisor"
                  className="w-full h-[580px] object-cover object-top" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
                Growing up in Chandigarh — India's "City Beautiful" — I always dreamed of building a future where hard work could create lasting opportunities. That dream brought me to Canada, where I pursued a background in Computer and Electrical Engineering, but my true passion was always numbers, strategy, and personal finance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
                In 2020, I began my journey in the financial services industry, helping individuals and families protect their futures through insurance and investment planning. In 2023, I expanded into mortgage solutions, allowing me to guide clients through one of the biggest financial decisions of their lives.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
                That journey led to the creation of <span className="text-navy-900 font-semibold">Finance With Preet</span> — a place where mortgages, insurance, and wealth planning come together under one trusted advisor. My mission is simple: to make financial decisions easier, clearer, and more strategic for everyday Canadians.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                I believe financial literacy shouldn't be complicated or intimidating. With the right guidance, everyone can build a secure future and make confident financial decisions — one step at a time.
              </p>
              <a href="https://instagram.com/financewithpreet" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors">
                <InstagramIcon /> Connect With Me on Instagram @financewithpreet
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Mission & Vision */}
      <section className="py-24 bg-white relative overflow-hidden" ref={missionRef}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={missionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Who We Are</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-8">Our Mission &amp; Vision</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-8" />

            <div className="space-y-6 text-left sm:text-center">
              <div>
                <p className="font-serif font-bold text-navy-900 text-lg mb-2">Mission</p>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  To help individuals and families in Canada make smarter financial decisions through transparent guidance in mortgages, insurance, and investments.
                </p>
              </div>
              <div>
                <p className="font-serif font-bold text-navy-900 text-lg mb-2">Vision</p>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  To become a trusted financial coaching brand that simplifies wealth-building for every household.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Three core pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
            {pillars.map((p, i) => (
              <motion.div key={p.t}
                initial={{ opacity: 0, y: 20 }} animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link to={p.to}
                  className="block h-full bg-gray-50 border border-gray-200 hover:border-gold-500/40 hover:shadow-lg rounded-2xl p-6 transition-all duration-300">
                  <p className="font-serif text-lg font-bold text-gold-600 mb-2">{p.t}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.d}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Values */}
      <section className="py-24 bg-gray-50 relative" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Our Values</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Everything We Do Is Guided<br />By These Principles</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              The principles that guide every recommendation, every conversation, and every financial plan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-200 hover:border-gold-500/40 hover:shadow-lg rounded-2xl p-7 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-600 mb-5 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Our Commitment */}
      <section className="relative py-28 overflow-hidden" ref={commitRef}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1400&q=80" alt=""
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={commitInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="gold-label">Our Promise</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Our Commitment to Every Client</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-5" />
            <p className="text-gray-300 text-lg leading-relaxed">
              Your financial goals deserve more than products — they deserve thoughtful guidance, honest conversations, and lasting support.
            </p>
          </motion.div>

          <div className="space-y-5">
            {promises.map((p, i) => (
              <motion.div key={p.t}
                initial={{ opacity: 0, y: 20 }} animate={commitInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <span className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 text-navy-900 mt-0.5">
                  <CheckIcon />
                </span>
                <div>
                  <p className="font-serif font-bold text-white text-base mb-1">{p.t}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={commitInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-300 text-lg leading-relaxed mt-14 max-w-2xl mx-auto">
            Your success isn't measured by a mortgage approval, an insurance policy, or an investment account. It's measured by the confidence you have in your financial future — and we're committed to helping you build that confidence every step of the way.
          </motion.p>
        </div>
      </section>

      <CTA
        label="Take the First Step"
        heading={<>Ready to Start Your<br /><span className="text-gold-400">Financial Journey?</span></>}
      />
    </Layout>
  )
}
