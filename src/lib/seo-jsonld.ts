import { faqItems } from '@/config/faq.config'
import { siteConfig } from '@/config/site.config'
import { courses } from '@/config/courses.config'
import { getCanonicalUrl } from '@/config/site-url'

export function buildHomeJsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.professionalName,
    jobTitle: 'Enfermeiro',
    description: siteConfig.tagline,
    email: siteConfig.email,
    url: getCanonicalUrl(''),
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: getCanonicalUrl(''),
    description: siteConfig.tagline,
  }

  const courseList = courses.map((c) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.title,
    description: c.description,
    provider: {
      '@type': 'Person',
      name: siteConfig.professionalName,
    },
    url: c.href,
  }))

  return [person, website, ...courseList] as const
}

export function buildFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export const faqPageJsonLd = buildFaqJsonLd()

export function buildHomePageJsonLd() {
  const [person, website, ...courseList] = buildHomeJsonLd()
  return {
    '@context': 'https://schema.org',
    '@graph': [person, website, ...courseList],
  }
}
