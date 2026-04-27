import { Link } from 'react-router-dom'

import { SeoHead } from '@/components/seo/SeoHead'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/container'

export function NotFoundPage() {
  return (
    <div className="min-h-svh bg-background">
      <SeoHead title="Página não encontrada — Mestre em Saúde" description="O conteúdo não existe ou foi movido." path="404" noIndex />
      <Container className="flex min-h-svh flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-4 font-display text-3xl text-foreground">Página não encontrada</h1>
        <p className="mt-3 max-w-md text-muted">
          Use o menu para voltar ao início ou explore o blog.
        </p>
        <Link to="/" className={cn(buttonVariants({ size: 'lg' }), 'mt-8')}>
          Voltar ao início
        </Link>
      </Container>
    </div>
  )
}
