"use client"

import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Printer } from "lucide-react"
import { useRef } from "react"

export default function FeesPage() {
  const { t } = useLanguage()
  const contentRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    const printContent = contentRef.current?.innerHTML
    const originalContent = document.body.innerHTML

    if (printContent) {
      document.body.innerHTML = `
        <div style="padding: 20px;">
          <h1 style="text-align: center; margin-bottom: 20px;">India Speech Therapy Center - Fees Structure</h1>
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
                <CardTitle className="text-3xl font-bold">{t("fees_structure")}</CardTitle>
                <CardDescription>{t("fees_description")}</CardDescription>
              </CardHeader>

              <CardContent ref={contentRef}>
                <div className="space-y-8">
                  {/* Course Fees */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Course Fees</h3>

                    <div className="space-y-4">
                      <div className="p-4 border rounded-md bg-muted/50">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">20 or 30 days full course</h4>
                          <p className="font-bold">Rs. 20,000/-</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">10 days course</h4>
                          <p className="font-bold">Rs. 17,500/-</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md bg-muted/50">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">5 days course</h4>
                          <p className="font-bold">Rs. 15,000/-</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">2 days course</h4>
                          <p className="font-bold">Rs. 6,000/-</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 border rounded-md bg-primary/10">
                      <p className="font-medium">Hostel facility and food charges will be Rs. 600/- per day extra.</p>
                    </div>
                  </div>

                  {/* Payment Note */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Payment Information</h3>

                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        If you do not consider it appropriate to carry cash, a demand draft in favour of "India Speech
                        Therapy Centre" payable at any nationalized bank in Jaipur, may be brought.
                      </p>
                      <p className="font-bold text-destructive">Note:- The Cheques will not be accepted</p>
                    </div>
                  </div>

                  {/* Rules */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Rules of the Centre</h3>

                    <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                      <li>Deaf & Dumb and mentally retarded students are not admitted in the Centre.</li>
                      <li>Children of lesser ages can get 100% success with the help of their parents only.</li>
                      <li>
                        You can come anytime at your convenience. However, we suggest you to book your seat by informing
                        us telephonically.
                      </li>
                      <li>Fee and hostel & food charges will be charged according to stay in the Centre.</li>
                      <li>Parents accompanying their children will also be given hostel & food facilities.</li>
                      <li>
                        Consumption of liquor in the Centre and hostel or outside during the stay is strictly
                        prohibited.
                      </li>
                    </ol>

                    <div className="mt-4 p-4 border rounded-md bg-muted/50">
                      <p className="font-medium">
                        Note: Students, at the time of admission in the centre, must produce a valid document in support
                        of their identity.
                      </p>
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

