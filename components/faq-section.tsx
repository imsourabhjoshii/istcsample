"use client"

import { useLanguage } from "@/lib/language-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("faq1_question"),
      answer: t("faq1_answer"),
    },
    {
      question: t("faq2_question"),
      answer: t("faq2_answer"),
    },
    {
      question: t("faq3_question"),
      answer: t("faq3_answer"),
    },
    {
      question: t("faq4_question"),
      answer: t("faq4_answer"),
    },
    {
      question: t("faq5_question"),
      answer: t("faq5_answer"),
    },
    {
      question: t("faq6_question"),
      answer: t("faq6_answer"),
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("faq_title")}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("faq_description")}</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

