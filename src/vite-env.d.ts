/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_LEAD_PROVIDER?: string
  readonly VITE_LEAD_ENDPOINT?: string
  readonly VITE_MAILCHIMP_USER_ID?: string
  readonly VITE_MAILCHIMP_LIST_ID?: string
  readonly VITE_OG_IMAGE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
