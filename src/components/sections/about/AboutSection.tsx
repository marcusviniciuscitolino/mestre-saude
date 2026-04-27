import { motion } from 'framer-motion'
import { BadgeCheck, HeartPulse } from 'lucide-react'

import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { siteConfig } from '@/config/site.config'
import { fadeUp, gentleTransition } from '@/lib/motion'

const aboutImage = `${import.meta.env.BASE_URL}images/nursing-team-clean.svg`

export function AboutSection() {
  return (
    <section id="sobre" className="border-b border-border/60 bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Sobre"
          title="Enfermeiro, Mestre em Ciências e criador do Mestre em Saúde"
          description="Um dos principais perfis de educação em enfermagem do Brasil, com forte presença e influência nas redes sociais."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={gentleTransition}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-border/80 shadow-card">
              <img
                src={aboutImage}
                alt="Consulta e cuidado em ambiente hospitalar claro e acolhedor"
                className="aspect-[4/3] w-full object-cover"
                width={900}
                height={675}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden max-w-xs rounded-2xl border border-border/80 bg-background/95 p-4 shadow-soft backdrop-blur md:block">
              <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                <HeartPulse className="size-5 text-primary" aria-hidden />
                Impacto diário em milhares de profissionais
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Educação que conecta influência e resultados reais.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} transition={gentleTransition}>
              <h3 className="font-display text-2xl text-foreground sm:text-3xl">
                Por que aprender comigo?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Produzo conteúdos estratégicos, práticos e voltados à realidade clínica,
                impactando diariamente milhares de profissionais — enfermeiros, técnicos e
                estudantes da saúde. Também sou responsável por cursos que já capacitaram
                inúmeros alunos, com foco em prática assistencial, cálculo de medicamentos,
                segurança do paciente e empregabilidade.
              </p>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              transition={gentleTransition}
              className="space-y-4 text-sm text-muted"
            >
              {[
                'Conteúdos estratégicos e práticos para a realidade clínica',
                'Cursos com foco em cálculo de medicamentos, segurança do paciente e empregabilidade',
                'Educação que conecta influência e resultados reais para profissionais e parceiros',
              ].map((line) => (
                <li key={line} className="flex gap-3 rounded-2xl bg-background/70 p-4">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              transition={gentleTransition}
              className="text-xs text-muted"
            >
              {siteConfig.professionalName} · {siteConfig.coren}
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
