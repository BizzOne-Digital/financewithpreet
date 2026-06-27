import { motion } from 'framer-motion'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
)
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
)
const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)
const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
)
const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
)

const reasons = [
  { icon: <HeartIcon />, title: 'Family-First Approach', desc: 'Every family is unique. Our advice is always personal, caring, and tailored to your specific situation.' },
  { icon: <AwardIcon />, title: 'Certified & Experienced', desc: 'Over 10 years helping Canadian families navigate complex financial decisions with confidence.' },
  { icon: <ClockIcon />, title: 'Always Available', desc: 'Available evenings, weekends, and beyond. Your timeline matters to us.' },
  { icon: <GlobeIcon />, title: 'Bilingual Support', desc: 'We serve families in English and Punjabi, ensuring clear communication in your preferred language.' },
]

export default function WhyUs() {
  return (
    <section className="py-28 bg-navy-900 relative overflow-hidden" id="about-section">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-500/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="gold-label"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              We're Not Just Advisors —{' '}
              <span className="text-gold-400">We're Your Partners</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-12 h-0.5 bg-gold-500 mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 leading-relaxed mb-8 text-[15px]"
            >
              Finance With Preet was built with one mission: to make professional financial guidance accessible, honest, and genuinely helpful for every Canadian family — regardless of income level or background.
            </motion.p>

            <ul className="space-y-3 mb-10">
              {['No pressure, no jargon — just honest advice','Free initial consultation for every family','Ongoing support as your life changes','100% independent — we work for you, not companies'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 text-navy-900">
                    <CheckIcon />
                  </span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-6"
            >
              {[['500+','Families Served'],['10+','Years Exp.'],['4.9','Star Rating']].map(([val, lbl], i) => (
                <div key={lbl} className={`text-center ${i > 0 ? 'pl-6 border-l border-gold-500/20' : ''}`}>
                  <p className="text-3xl font-bold text-gold-400 font-serif">{val}</p>
                  <p className="text-gray-500 text-xs">{lbl}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-navy-800/60 backdrop-blur-sm rounded-2xl p-6 border border-navy-600/40 hover:border-gold-500/30 hover:bg-navy-800/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center text-gold-400 mb-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                  {r.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{r.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
