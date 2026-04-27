import { AppLayout } from '@/components/layout/AppLayout'
import { SeoHead } from '@/components/seo/SeoHead'
import { AboutSection } from '@/components/sections/about/AboutSection'
import { CoursesSection } from '@/components/sections/courses/CoursesSection'
import { FaqSection } from '@/components/sections/faq/FaqSection'
import { FinalCtaSection } from '@/components/sections/final-cta/FinalCtaSection'
import { HeroSection } from '@/components/sections/hero/HeroSection'
import { LeadMagnetSection } from '@/components/sections/lead-magnet/LeadMagnetSection'
import { PartnerSection } from '@/components/sections/partner/PartnerSection'
import { ProofStripSection } from '@/components/sections/proof-strip/ProofStripSection'
import { TestimonialsSection } from '@/components/sections/testimonials/TestimonialsSection'
import { TipsPreviewSection } from '@/components/sections/tips-preview/TipsPreviewSection'
import { TrailsSection } from '@/components/sections/trails/TrailsSection'
import { useMemo } from 'react'

import { buildHomePageJsonLd } from '@/lib/seo-jsonld'
import { siteConfig } from '@/config/site.config'

const defaultTitle = `${siteConfig.title} — Cursos, trilhas e blog em enfermagem`
const defaultDescription = siteConfig.tagline

export function HomePage() {
  const homeJsonLd = useMemo(() => buildHomePageJsonLd(), [])

  return (
    <>
      <SeoHead
        title={defaultTitle}
        description={defaultDescription}
        path=""
        jsonLd={homeJsonLd}
      />
      <AppLayout>
        <HeroSection />
        <ProofStripSection />
        <TrailsSection />
        <CoursesSection />
        <AboutSection />
        <LeadMagnetSection />
        <TestimonialsSection />
        <TipsPreviewSection />
        <FaqSection />
        <PartnerSection />
        <FinalCtaSection />
      </AppLayout>
    </>
  )
}
