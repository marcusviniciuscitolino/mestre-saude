export type NavItem = {
  label: string
  href: string
}

export type CourseItem = {
  id: string
  title: string
  description: string
  level: string
  duration: string
  href: string
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
}

export type SocialLink = {
  id: string
  label: string
  href: string
}
