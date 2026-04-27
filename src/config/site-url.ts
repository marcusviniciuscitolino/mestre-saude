/**
 * Public site origin for absolute URLs (OG, JSON-LD, canonical).
 * Set `VITE_SITE_URL` in production (e.g. https://seudominio.com)
 */
export function getSiteUrl() {
  const raw = (import.meta.env.VITE_SITE_URL as string | undefined) ?? ''
  return raw.replace(/\/$/, '')
}

/**
 * Build absolute path including Vite `base` (e.g. /mestre-saude/ + path).
 */
export function getAbsolutePath(path: string) {
  const base = (import.meta.env.BASE_URL as string) || '/'
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (base === '/') {
    return normalized
  }
  const b = base.endsWith('/') ? base.slice(0, -1) : base
  if (normalized === '/') return b || '/'
  return `${b}${normalized}`
}

export function getCanonicalUrl(path: string) {
  const site = getSiteUrl()
  if (!site) {
    if (typeof window === 'undefined') return ''
    return `${window.location.origin}${getAbsolutePath(path)}`
  }
  return `${site}${getAbsolutePath(path)}`
}
