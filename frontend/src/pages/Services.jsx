import { useState, useEffect, useRef } from 'react'
import Layout from '../components/common/Layout'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import CTA from '../components/sections/CTA'
import API from '../utils/api'

const CheckDot = () => (
  <span className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0 mt-2" />
)

const SVGIcon = ({ name, size = 28 }) => {
  const icons = {
    'shield': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    'trending-up': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    'bar-chart': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    'graduation-cap': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  }
  return icons[name] || icons['shield']
}

function ServiceBlock({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
    >
      {/* Image */}
      <div className={isEven ? '' : 'lg:order-2'}>
        <div className="relative rounded-2xl overflow-hidden shadow-navy-lg">
          <img src={service.image} alt={service.title}
            className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          {/* Icon overlay */}
          <div className="absolute bottom-5 left-5 w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center text-navy-900 shadow-gold">
            <SVGIcon name={service.icon} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={isEven ? '' : 'lg:order-1'}>
        <span className="gold-label">{`0${index + 1}`}</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">{service.title}</h2>
        <div className="w-12 h-0.5 bg-gold-500 mb-5" />
        <p className="text-gray-400 leading-relaxed mb-7 text-[15px]">{service.description}</p>

        {service.features?.length > 0 && (
          <ul className="space-y-3 mb-8">
            {service.features.map((f, fi) => (
              <li key={fi} className="flex items-start gap-3">
                <CheckDot />
                <span className="text-gray-300 text-sm">{f}</span>
              </li>
            ))}
          </ul>
        )}

        <Link to="/booking" className="btn-primary inline-flex items-center gap-2">
          Get Free Consultation
        </Link>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.get('/services')
      .then(r => setServices(r.data || []))
      .catch(() => setServices([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white pt-40 pb-24">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80" alt=""
            className="w-full h-full object-cover opacity-8" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-950/95" />
        </div>
        {/* Gold decorations */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <span className="gold-label">Our Services</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Complete Financial Services<br />
            <span className="text-gold-400">for Every Stage of Life</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From protecting what you have to building what you want — comprehensive financial solutions tailored for Canadian families.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && services.length === 0 && (
            <div className="text-center py-24">
              <h3 className="font-serif text-2xl font-bold text-gray-300 mb-3">Services Coming Soon</h3>
              <p className="text-gray-500 mb-8">Please check back soon or contact us directly.</p>
              <Link to="/contact" className="btn-primary inline-block">Contact Us</Link>
            </div>
          )}

          {!loading && services.length > 0 && (
            <div className="space-y-28">
              {services.map((s, i) => (
                <ServiceBlock key={s._id} service={s} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </Layout>
  )
}
