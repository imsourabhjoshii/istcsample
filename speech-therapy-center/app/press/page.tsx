"use client"

import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Newspaper } from "lucide-react"
import Link from "next/link"

export default function PressPage() {
  const { t } = useLanguage()

  const pressReports = [
    {
      title: "India Speech Therapy Center Celebrates 10 Years of Excellence",
      publication: "The Health Times",
      date: "June 15, 2020",
      excerpt:
        "The India Speech Therapy Center, founded by renowned therapist Bhoop Singh Yadav, celebrates a decade of transforming lives through innovative speech therapy techniques.",
      link: "#",
    },
    {
      title: "Breakthrough Techniques in Speech Therapy Developed by Local Expert",
      publication: "Rajasthan Medical Journal",
      date: "March 3, 2019",
      excerpt:
        "Bhoop Singh Yadav's innovative approach to treating stuttering has shown remarkable results, according to a new study published this month.",
      link: "#",
    },
    {
      title: "Speech Therapy Center Expands Services to Rural Communities",
      publication: "Jaipur Today",
      date: "November 12, 2021",
      excerpt:
        "The India Speech Therapy Center launches mobile clinic initiative to bring essential speech therapy services to underserved rural areas around Jaipur.",
      link: "#",
    },
    {
      title: "Local Speech Therapist Honored with Lifetime Achievement Award",
      publication: "Indian Healthcare Association",
      date: "February 28, 2022",
      excerpt:
        "Bhoop Singh Yadav receives prestigious recognition for his 45 years of contribution to the field of speech-language pathology in India.",
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <div className="flex items-center mb-8">
            <Button variant="ghost" size="sm" asChild className="mr-2">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("back_to_home")}
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("press_title")}</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("press_description")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressReports.map((report, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Newspaper className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{report.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {report.publication} • {report.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{report.excerpt}</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={report.link} className="flex items-center justify-center">
                      {t("read_article")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <LanguageSwitcher />
    </div>
  )
}

