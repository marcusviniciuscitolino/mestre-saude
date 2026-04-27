declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

export function pushDataLayerEvent(
  name: string,
  detail?: Readonly<Record<string, string | number | boolean | null | undefined>>,
) {
  if (typeof window === 'undefined') return
  const layer = (window.dataLayer = window.dataLayer ?? [])
  layer.push({ event: name, ...detail })
}
