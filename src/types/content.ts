export type CourseBadge = 'mais-procurado' | 'novo' | 'popular'

export type CourseItem = {
  id: string
  title: string
  description: string
  level: string
  duration: string
  href: string
  /** e.g. "R$ 97" — shown on card */
  priceFrom?: string
  badge?: CourseBadge
  /** trilha id where this course appears (for cross-link text) */
  trailId?: string
}

export type TrailItem = {
  id: string
  title: string
  subtitle: string
  discount: string
  courses: readonly string[]
  priceFrom?: string
  priceTo?: string
  href: string
  /** Highlight as main offer in the grid */
  popular?: boolean
  /** Mark as best seller (distinct badge) */
  bestSeller?: boolean
}

export type TipItem = {
  id: string
  title: string
  excerpt: string
  href: string
  imageUrl: string
  category: string
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type TestimonialItem = {
  id: string
  name: string
  role: string
  quote: string
  /** optional image URL (local public path or full URL) */
  avatarUrl?: string
}

export type SocialLink = {
  id: string
  label: string
  href: string
}
