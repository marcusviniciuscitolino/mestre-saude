import { useEffect, useState } from 'react'

const defaultRootMargin = '-20% 0px -55% 0px'

/**
 * Returns the id of the section most visible in the viewport (for nav highlight).
 */
export function useScrollSpy(sectionIds: readonly string[], enabled = true) {
  const [activeId, setActiveId] = useState<string | undefined>(sectionIds[0])
  const keys = sectionIds.join(',')

  useEffect(() => {
    if (!enabled || keys.length === 0) return
    const ids = keys.split(',').filter(Boolean)

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { root: null, rootMargin: defaultRootMargin, threshold: [0.1, 0.25, 0.5, 0.75] },
    )

    for (const el of elements) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [enabled, keys])

  return activeId
}
