import { Link } from 'react-router-dom'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-gold-500/10">
      {/* Top decorative gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gold-500 rounded-full flex items-center justify-center shadow-gold">
                <span className="text-navy-900 font-bold text-lg font-serif">FP</span>
              </div>
              <div>
                <p className="font-serif font-bold text-lg leading-none text-white">Finance</p>
                <p className="text-xs tracking-widest text-gold-400">WITH PREET</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Helping Canadian families build wealth, protect their future, and achieve financial freedom — one family at a time.
            </p>
            <a href="https://instagram.com/financewithpreet" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm font-medium">
              <InstagramIcon /> @FinanceWithPreet
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {[['Home','/'],['About','/about'],['Services','/services'],['Blog','/blog'],['FAQ','/faq'],['Contact','/contact']].map(([n,p]) => (
                <li key={p}>
                  <Link to={p} className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold-500/50 rounded-full group-hover:bg-gold-400 transition-colors" />
                    {n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-5 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3">
              {['Life Insurance','Retirement Planning','Tax-Free Savings (TFSA)','RESP for Children','Mortgage Protection','Investment Planning'].map(s => (
                <li key={s} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-gold-500/40 rounded-full" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-5 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:8732882055" className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm">
                  <div className="w-8 h-8 bg-navy-800 border border-navy-600/50 rounded-lg flex items-center justify-center text-gold-500">
                    <PhoneIcon />
                  </div>
                  (873) 288-2055
                </a>
              </li>
              <li>
                <a href="mailto:financewithpreet@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm">
                  <div className="w-8 h-8 bg-navy-800 border border-navy-600/50 rounded-lg flex items-center justify-center text-gold-500">
                    <MailIcon />
                  </div>
                  financewithpreet@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 bg-navy-800 border border-navy-600/50 rounded-lg flex items-center justify-center text-gold-500">
                  <MapPinIcon />
                </div>
                Serving All of Canada
              </li>
            </ul>
            <Link to="/booking"
              className="mt-6 inline-block bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold px-5 py-3 rounded-lg transition-all duration-300 shadow-gold hover:shadow-gold-lg">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Finance With Preet. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            Serving Canadian Families Nationwide
          </p>
        </div>
      </div>
    </footer>
  )
}
