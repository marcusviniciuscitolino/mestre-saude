import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import { BlogIndexPage } from '@/pages/BlogIndexPage'
import { BlogPostPage } from '@/pages/BlogPostPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const rawBase = import.meta.env.BASE_URL
const basename = rawBase === '/' ? undefined : rawBase.replace(/\/$/, '')

const STICKY_HEADER_OFFSET_PX = 80

function HashScroller() {
  const { hash, key } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - STICKY_HEADER_OFFSET_PX
    window.scrollTo({ top, behavior: 'smooth' })
  }, [hash, key])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <HashScroller />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
