import Layout from '../components/common/Layout'
import Hero from '../components/sections/Hero'
import StatsBar from '../components/sections/StatsBar'
import WhyUs from '../components/sections/WhyUs'
import ServicesSection from '../components/sections/ServicesSection'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import LatestBlogs from '../components/sections/LatestBlogs'
import Newsletter from '../components/sections/Newsletter'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <StatsBar />
      <div id="about-section">
        <WhyUs />
      </div>
      <ServicesSection />
      <HowItWorks />
      <Testimonials />
      <LatestBlogs />
      <Newsletter />
      <CTA />
    </Layout>
  )
}
