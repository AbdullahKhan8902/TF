"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

const getFaqs = (t: ReturnType<typeof getTranslation>) => [
  { question: t.faq.q1, answer: t.faq.a1 },
  { question: t.faq.q2, answer: t.faq.a2 },
  { question: t.faq.q3, answer: t.faq.a3 },
  { question: t.faq.q4, answer: t.faq.a4 },
  { question: t.faq.q5, answer: t.faq.a5 },
  { question: t.faq.q6, answer: t.faq.a6 },
  { question: t.faq.q7, answer: t.faq.a7 },
  { question: t.faq.q8, answer: t.faq.a8 },
  { question: t.faq.q9, answer: t.faq.a9 },
  { question: t.faq.q10, answer: t.faq.a10 },
  { question: t.faq.q11, answer: t.faq.a11 },
  { question: t.faq.q12, answer: t.faq.a12 },
  { question: t.faq.q13, answer: t.faq.a13 },
  { question: t.faq.q14, answer: t.faq.a14 },
  { question: t.faq.q15, answer: t.faq.a15 },
  { question: t.faq.q16, answer: t.faq.a16 },
  { question: t.faq.q17, answer: t.faq.a17 },
  { question: t.faq.q18, answer: t.faq.a18 },
]

export function FaqSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const faqs = getFaqs(t)

  return (
    <section id="faq" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1a0a2e_0%,_#0d0015_100%)]" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/15 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {t.faq.title} <span className="text-gradient">{t.faq.titleHighlight}</span>
          </h2>
          <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            {t.faq.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 data-[state=open]:border-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-base sm:text-lg font-medium [&[data-state=open]]:text-purple-300 hover:text-purple-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
