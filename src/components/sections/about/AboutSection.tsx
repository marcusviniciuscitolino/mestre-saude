import { motion } from 'framer-motion'
import { BadgeCheck, HeartPulse, Quote } from 'lucide-react'

import { Container } from '@/components/ui/container'
import { PulseLineBg } from '@/components/ui/decorative'
import { SectionHeading } from '@/components/ui/section-heading'
import { Stat } from '@/components/ui/stat'
import { siteConfig } from '@/config/site.config'
import { INITIAL_ALUNAS } from '@/config/proof-numbers'
import { cn } from '@/lib/cn'
import { fadeUp, gentleTransition } from '@/lib/motion'

const aboutImage = `${import.meta.env.BASE_URL}images/nursing-team-clean.svg`

const CREDENTIAL_LINES = [
  {
    title: 'Graduação em Enfermagem',
    body: 'Formação técnico-científica aplicada aos protocolos contemporâneos de cuidado.',
  },
  {
    title: 'Mestrado em Ciências',
    body: 'Rigor acadêmico para traduzir evidências em prática segura e comunicação clara.',
  },
  {
    title: 'Experiência clínica contínua',
    body: 'Rotina em ambientes de alta complexidade, UTI, emergência e gestão da equipe.',
  },
] as const

export function AboutSection() {
  return (
    <section id="sobre" className="relative border-b border-border/50 bg-surface py-20 lg:py-28">
      <PulseLineBg className="opacity-[0.035]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Sobre"
          title="Enfermeiro, Mestre em Ciências e criador do Mestre em Saúde"
          description="Um dos principais perfis de educação em enfermagem do Brasil, com forte presença e influência nas redes sociais."
        />

        <div className="mt-16 grid gap-16 lg:mt-20 lg:grid-cols-[0.94fr_minmax(0,1.12fr)] lg:items-start lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={gentleTransition}
            className="relative max-w-xl lg:max-w-none lg:sticky lg:top-28"
          >
            <div className="absolute -left-8 -top-8 hidden rounded-full bg-gold/15 blur-3xl xl:block xl:size-[18rem]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-background p-[3px] shadow-soft">
              <div className="overflow-hidden rounded-[1.82rem] border border-border/60 shadow-inner">
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
            </div>

            <div className="absolute -bottom-7 -right-3 hidden max-w-[15rem] rounded-2xl border border-border/70 bg-background/95 p-4 shadow-card backdrop-blur-md md:block">
              <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                <HeartPulse className="size-5 text-primary" aria-hidden />
                Influência positiva todos os dias
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Educação que amplifica segurança, ética e liderança assistencial.
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
            className="space-y-10"
          >
            <motion.div variants={fadeUp} transition={gentleTransition}>
              <h3 className="font-display text-[1.95rem] text-foreground sm:text-[2.35rem]">
                Por que aprender comigo?
              </h3>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
                Produzo conteúdos estratégicos, práticos e voltados à realidade clínica, impactando
                diariamente milhares de profissionais — enfermeiros, técnicos e estudantes da
                saúde. Também sou responsável por cursos que já capacitaram inúmeros alunos, com
                foco em prática assistencial, cálculo de medicamentos, segurança do paciente e
                empregabilidade.
              </p>
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              transition={gentleTransition}
              className="relative rounded-3xl border border-gold/30 bg-gradient-to-br from-gold-soft/35 via-transparent to-transparent p-8 shadow-inner"
            >
              <Quote className="size-9 text-gold/80" aria-hidden />
              <p className="mt-5 font-display text-[1.45rem] leading-snug tracking-[-0.01em] text-foreground text-balance sm:text-[1.65rem]">
                “Ensino pensando no plantão: protocolos atualizados, ética luminosa e decisões seguras
                no leito.”
              </p>
              <footer className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">
                {siteConfig.professionalName.split(',')[0]?.trim()}
              </footer>
            </motion.blockquote>

            <motion.div
              variants={fadeUp}
              transition={gentleTransition}
              className="grid gap-4 sm:grid-cols-2"
            >
              {CREDENTIAL_LINES.map((line, index) => (
                <div
                  key={line.title}
                  className="relative rounded-2xl border border-border/65 bg-background/80 p-5 pl-[3.75rem]"
                >
                  <span
                    className={cn(
                      'absolute left-4 top-5 flex size-9 items-center justify-center rounded-full border border-gold/40 text-xs font-semibold text-primary',
                    )}
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-foreground">{line.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{line.body}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Stat
                    size="sm"
                    value={
                      <span className="tabular-nums">
                        {INITIAL_ALUNAS.toLocaleString('pt-BR')}+
                      </span>
                    }
                    label="Alunos(as) formados(as)"
                    description="Comunidade ativa em cursos e trilhas"
                  />
                  <Stat
                    size="sm"
                    value="24/7"
                    label="Conteúdo sob demanda"
                    description="Estude no ritmo do plantão e da família"
                  />
                </div>
              </div>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              transition={gentleTransition}
              className="space-y-3 text-sm text-muted"
            >
              {[
                'Conteúdos estratégicos e práticos para a realidade clínica',
                'Cursos com foco em cálculo de medicamentos, segurança do paciente e empregabilidade',
                'Educação que conecta influência e resultados reais para profissionais e parceiros',
              ].map((line) => (
                <li key={line} className="flex gap-3 rounded-2xl border border-border/60 bg-background/70 p-4">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              transition={gentleTransition}
              className="text-xs uppercase tracking-[0.16em] text-muted"
            >
              {siteConfig.professionalName} · {siteConfig.coren}
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
