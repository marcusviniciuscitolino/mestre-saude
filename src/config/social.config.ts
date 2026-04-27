import type { SocialLink } from '@/types/content'

/** Links genéricos — substitua pelos perfis reais. */
export const socialLinks: readonly SocialLink[] = [
  { id: 'ig', label: 'Instagram', href: 'https://instagram.com/exemplo' },
  { id: 'yt', label: 'YouTube', href: 'https://youtube.com/@exemplo' },
  { id: 'tt', label: 'TikTok', href: 'https://tiktok.com/@exemplo' },
  { id: 'wa', label: 'WhatsApp', href: 'https://wa.me/5511999999999' },
] as const
