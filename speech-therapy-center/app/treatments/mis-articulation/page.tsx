"use client"

import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Printer, Calendar } from "lucide-react"
import { useRef } from "react"
import { VoiceVisualizer } from "@/components/speech-therapy-graphics"

export default function MisArticulationPage() {
  const { t } = useLanguage()
  const contentRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    const printContent = contentRef.current?.innerHTML
    const originalContent = document.body.innerHTML

    if (printContent) {
      document.body.innerHTML = `
        <div style="padding: 20px;">
          <h1 style="text-align: center; margin-bottom: 20px;">India Speech Therapy Center - Mis-Articulation Treatment</h1>
          ${printContent}
        </div>
      `

      window.print()
      document.body.innerHTML = originalContent
      window.location.reload()
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <div className="container py-8 md:py-12 lg:py-16">
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10 transition-colors">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("back_to_home")}
              </Link>
            </Button>

            <Button variant="outline" size="sm" onClick={handlePrint} className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              {t("print")}
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Mis-Articulation Treatment</CardTitle>
                <CardDescription>Information about mis-articulation and our treatment approach</CardDescription>
              </CardHeader>

              <CardContent ref={contentRef}>
                <div className="space-y-8">
                  <div className="flex justify-center">
                    <VoiceVisualizer height={80} width={300} className="mb-4" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Mis-articulation is not a disease</h3>

                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Mis-articulation is not a disease but a wrong habit developed during childhood. Children start
                        speaking by imitating elder members of their families. In the beginning whenever children
                        mis-articulate, parents and other family members should correct their pronunciation by repeating
                        words. Parents and family members who correct the pronunciation of their children are successful
                        in curing them and those who do not, their children become habitual of mis-articulation.
                      </p>

                      <p>
                        Children who mis-articulate are having normal tongue and other speech organs. However there is a
                        mis-conception among some people that mis-articulation is due to the reason that tongue of such
                        children is stuck somewhere in the mouth. If a person can move his tongue out of his mouth then
                        there is nothing wrong with his tongue.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Treatment of mis-articulation</h3>

                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Candidates are taught about correct pronunciation of words and then it is practiced regularly in
                        the Centre. Speaking correctly regularly, he becomes habitual of talking correctly.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Period of Treatment</h3>

                    <div className="space-y-4 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Ages 5-9:</span> You should come to the Centre for 2 days only.
                          You will be explained about the treatment and the practice methods so as to be able to treat
                          your child at home. If you wish to stay for more than 2 days, then you can extend the 2 days
                          course to 5 days or 10 days course.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Ages 10-15:</span> You should come to the Centre for 10 days
                          only. In the Centre, the child will learn to speak correctly and practice regularly. You will
                          get your child cured at home only by regular practice.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Ages 15+:</span> If you are more than 15 years old and can live
                          alone, you may come alone. In case you do not have sufficient time, you may come at least for
                          10 days because after correcting pronunciation, you have to practice it regularly in the
                          Centre. If you have sufficient time, you should come for the complete course of 20-30 days so
                          that you may get full success.
                        </p>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-md mt-6">
                        <p className="font-medium">
                          Many people suffering from a lisp increase their talking speed in order to conceal their lisp,
                          thereby also developing a stammer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <LanguageSwitcher />
    </div>
  )
}

