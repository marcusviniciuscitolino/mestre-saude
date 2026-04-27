import { useEffect, useId } from 'react'

type JsonLdProps = {
  data: Readonly<Record<string, unknown>> | Readonly<Record<string, unknown>[]>
}

/** Injects/updates a single JSON-LD script (use for section-specific schema e.g. FAQ). */
export function JsonLd({ data }: JsonLdProps) {
  const id = useId()
  const scriptId = `jsonld-${id.replace(/:/g, '')}`

  useEffect(() => {
    const s = document.createElement('script')
    s.id = scriptId
    s.type = 'application/ld+json'
    s.textContent = JSON.stringify(data)
    document.head.appendChild(s)
    return () => s.remove()
  }, [scriptId, data])

  return null
}
