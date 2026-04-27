import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqItems } from '@/config/faq.config'
import { faqPageJsonLd } from '@/lib/seo-jsonld'
import { JsonLd } from '@/components/seo/JsonLd'

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-border/60 bg-surface py-20 lg:py-28">
      <JsonLd data={faqPageJsonLd} />
      <Container>
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          description="Transparência sobre certificação, acesso e suporte. Se não encontrar sua dúvida, fale pelo WhatsApp."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
