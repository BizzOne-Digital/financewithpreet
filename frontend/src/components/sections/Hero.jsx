import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import API from '../../utils/api'

const ChevronDownIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
)
const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
)
const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
)
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)
const VolumeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
  </svg>
)
const VolumeOnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
)

const DEFAULT_HERO = {
  headline: "Your Family's Financial Future Starts Here",
  subheadline: 'Trusted financial guidance for Canadian families — from life insurance and retirement planning to tax-free savings and mortgage protection.',
  video: '/hero.mp4',
  fallbackImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&q=80',
  ctaPrimary: 'Book Free Consultation',
  ctaSecondary: 'Explore Services',
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function Hero() {
  const [hero, setHero] = useState(DEFAULT_HERO)
  const [muted, setMuted] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    API.get('/hero').then(r => {
      if (r.data) setHero({ ...DEFAULT_HERO, ...r.data })
    }).catch(() => {})
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const isVideo = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm'))
  const mediaSrc = hero.video || hero.image || DEFAULT_HERO.video

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">

      {/* ── Background Media ── */}
      <div className="absolute inset-0">
        {isVideo(mediaSrc) && !videoError ? (
          <>
            <video
              ref={videoRef}
              src={mediaSrc}
              autoPlay loop muted playsInline
              onCanPlay={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            {!videoLoaded && (
              <img src={hero.fallbackImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
            )}
          </>
        ) : (
          <img src={isVideo(mediaSrc) ? hero.fallbackImage : mediaSrc} alt="Hero" className="w-full h-full object-cover" />
        )}

        {/* Multi-layer dark overlay — navy luxury feel */}
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/40" />

        {/* Gold accent glow — bottom left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-gold-500/5 blur-[100px] rounded-full" />
        {/* Blue glow — top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-navy-500/20 blur-[120px] rounded-full" />
      </div>

      {/* Mute Toggle */}
      {isVideo(mediaSrc) && !videoError && videoLoaded && (
        <button onClick={toggleMute} title={muted ? 'Unmute' : 'Mute'}
          className="absolute bottom-8 right-8 z-20 w-9 h-9 bg-white/5 hover:bg-gold-500/20 backdrop-blur-sm border border-white/10 hover:border-gold-500/40 rounded-full flex items-center justify-center text-gray-300 hover:text-gold-400 transition-all duration-300">
          {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        </button>
      )}

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Trust Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-400/30 text-gold-300 px-4 py-2 rounded-full text-xs font-semibold mb-8 backdrop-blur-sm"
          >
            <ShieldIcon />
            Trusted by 500+ Canadian Families
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            {hero.headline.split(' ').slice(0, 4).join(' ')}{' '}
            <span className="text-shimmer">
              {hero.headline.split(' ').slice(4).join(' ')}
            </span>
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="w-16 h-0.5 bg-gold-500 mb-6"
          />

          {/* Subheadline */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-base text-gray-300 leading-relaxed mb-10 max-w-2xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap justify-center gap-4 mb-14"
          >
            <Link to="/booking" className="btn-primary flex items-center gap-2">
              <PlayIcon /> {hero.ctaPrimary}
            </Link>
            <Link to="/services" className="btn-outline flex items-center gap-2">
              {hero.ctaSecondary}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: <UsersIcon />, value: '500+', label: 'Families Helped' },
              { icon: <ShieldIcon />, value: '10+', label: 'Years Experience' },
              { icon: <StarIcon />, value: '4.9★', label: 'Client Rating' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/15 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-400">
                  {icon}
                </div>
                <div className="text-left">
                  <p className="font-bold text-xl text-white leading-none">{value}</p>
                  <p className="text-gray-400 text-xs">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <a href="#about-section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-500/50 hover:text-gold-400 animate-bounce transition-colors z-10">
        <ChevronDownIcon />
      </a>
    </section>
  )
}
