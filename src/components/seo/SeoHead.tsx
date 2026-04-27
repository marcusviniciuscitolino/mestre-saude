import { useEffect, useId } from 'react'

import { getAbsolutePath, getCanonicalUrl, getSiteUrl } from '@/config/site-url'

type SeoHeadProps = {
  title: string
  description: string
  /** path after Vite `base` without leading slash, e.g. "blog" or "blog/meu-slug" */
  path?: string
  /** full absolute image URL (recommended for Open Graph) */
  imageUrl?: string
  jsonLd?: Readonly<Record<string, unknown>> | Readonly<Record<string, unknown>[]>
  noIndex?: boolean
}

export function SeoHead({
  title,
  description,
  path = '',
  imageUrl: imageOverride,
  jsonLd,
  noIndex = false,
}: SeoHeadProps) {
  const id = useId()
  const scriptId = `json-ld-${id.replace(/:/g, '')}`

  const absoluteUrl = getCanonicalUrl(path)
  const site = getSiteUrl()
  const defaultOgImage = site
    ? `${site}${getAbsolutePath('favicon.svg')}`
    : typeof window !== 'undefined'
      ? new URL('favicon.svg', window.location.origin + import.meta.env.BASE_URL).toString()
      : ''
  const imageUrl = imageOverride || defaultOgImage
  const jsonString = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    document.title = title

    setOrCreateMeta('name', 'description', description)
    setOrCreateMeta('property', 'og:title', title)
    setOrCreateMeta('property', 'og:description', description)
    setOrCreateMeta('property', 'og:type', 'website')
    if (absoluteUrl) setOrCreateMeta('property', 'og:url', absoluteUrl)
    if (imageUrl) setOrCreateMeta('property', 'og:image', imageUrl)
    setOrCreateMeta('property', 'og:locale', 'pt_BR')

    setOrCreateMeta('name', 'twitter:card', 'summary_large_image')
    setOrCreateMeta('name', 'twitter:title', title)
    setOrCreateMeta('name', 'twitter:description', description)
    if (imageUrl) setOrCreateMeta('name', 'twitter:image', imageUrl)

    if (noIndex) {
      setOrCreateMeta('name', 'robots', 'noindex, nofollow')
    } else {
      setOrCreateMeta('name', 'robots', 'index, follow')
    }

    setOrCreateLink('canonical', absoluteUrl)

    const prev = document.getElementById(scriptId)
    prev?.remove()
    if (jsonLd) {
      const s = document.createElement('script')
      s.id = scriptId
      s.type = 'application/ld+json'
      s.textContent = jsonString
      document.head.appendChild(s)
    }

    return () => {
      const s = document.getElementById(scriptId)
      s?.remove()
    }
  }, [title, description, path, imageUrl, absoluteUrl, noIndex, scriptId, jsonString, jsonLd])

  return null
}

function setOrCreateMeta(by: 'name' | 'property', key: string, content: string) {
  if (!content) return
  const sel = by === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`
  let el = document.querySelector(sel)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(by, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOrCreateLink(rel: string, href: string) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}
