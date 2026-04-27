import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { WhatsAppFloatingAction } from '@/components/layout/WhatsAppFloatingAction'
import { AboutSection } from '@/components/sections/about/AboutSection'
import { CoursesSection } from '@/components/sections/courses/CoursesSection'
import { FaqSection } from '@/components/sections/faq/FaqSection'
import { HeroSection } from '@/components/sections/hero/HeroSection'
import { TestimonialsSection } from '@/components/sections/testimonials/TestimonialsSection'
import { TipsSection } from '@/components/sections/tips/TipsSection'
import { TrailsSection } from '@/components/sections/trails/TrailsSection'

export default function App() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <TrailsSection />
        <TipsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsAppFloatingAction />
    </div>
  )
}
