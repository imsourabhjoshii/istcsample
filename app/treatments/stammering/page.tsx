"use client"

import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Printer, Clock, Calendar, School } from "lucide-react"
import { useRef } from "react"
import { SpeechWave } from "@/components/speech-therapy-graphics"

export default function StammeringPage() {
  const { t } = useLanguage()
  const contentRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    const printContent = contentRef.current?.innerHTML
    const originalContent = document.body.innerHTML

    if (printContent) {
      document.body.innerHTML = `
        <div style="padding: 20px;">
          <h1 style="text-align: center; margin-bottom: 20px;">India Speech Therapy Center - Stammering Treatment</h1>
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
                <CardTitle className="text-3xl font-bold">Stammering Treatment</CardTitle>
                <CardDescription>Information about stammering and our treatment approach</CardDescription>
              </CardHeader>

              <CardContent ref={contentRef}>
                <div className="space-y-8">
                  <div className="flex justify-center">
                    <SpeechWave height={80} width={300} className="mb-4" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Stammering is not a Disease</h3>

                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Treatment of stammering is not available in most of the places in India. Only the specialist who
                        were affected due to stammering 100% in his life, can understand the problem and do research on
                        its treatment. I, Bhoop Singh Yadav suffered from stammering from the age of 4 years to 24
                        years. I got myself cured and after doing research on the subject, running the Centre since
                        1979. Now I tell you what the truth is?
                      </p>

                      <p>
                        Stammering is not a disease but a habit of speaking in a wrong way which is not by birth. It is
                        due to shortened breath because of some reason during childhood. The breath is shortened by the
                        following reasons:
                      </p>

                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Physical weakness due to any kind of disease</li>
                        <li>Any kind of fear</li>
                        <li>Imitating other stammerers</li>
                        <li>Accident or mis-happening</li>
                      </ol>

                      <p>
                        The breath is shortened due to above mentioned reasons and you start speaking with pauses. You
                        do not want to speak with pauses, but not knowing the reality, try to speak more and more in
                        shortened breath. Speaking in shortened breath increases your speed of speech and start speaking
                        with pauses. Speaking with pauses is Stammering.
                      </p>

                      <p>
                        What is the Psychology in stammering? Anything happens always cast its impression in your mind.
                        Speaking with pauses since childhood cast impression in your mind that you are a stammerer. This
                        is psychology.
                      </p>

                      <p>
                        Some children after growing up give more attention on this problem. The words which are
                        frequently used in the speech, you feel more uncomfortable due to high speed and stammer more.
                        Ultimately you select these words as problematic words.
                      </p>

                      <p>
                        A stammerer always tries to speak fluently everywhere. Now you have two options either struggle
                        and stammer or substitute the problematic words. For example speak out "pa-pa pani" (water) or
                        substitute with "Jal". If you struggle and stammer or substitute these words, your psychology
                        will increase.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Treatment of Stammering</h3>

                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        The treatment for stammering is to elongate the breath, reduce the talking speed and to
                        eradicate the psychology from the patient's mind. In our centre you would be taught to elongate
                        your breath and to reduce the talking speed by adopting various techniques. You would be made to
                        adopt these techniques through regular practice sessions at the centre, because of which you
                        would be able to speak without a stammer. Once you adopt these techniques, our treatment will
                        focus on consistently speaking correctly, because only when you consistently speak without a
                        stammer you would be able to overcome your fear of stammering on words with difficult alphabets
                        and uproot the stammering psychology embedded in your mind.
                      </p>

                      <p>
                        As till now, you have been stammering while speaking, the fear of stammering has grown in your
                        mind, but by speaking correctly at our centre this fear will slowly start to wear off. By
                        consistently speaking correctly, this fear will keep reducing and your confidence will increase
                        and eventually the talking speed would also become normal. Thus you will find a way to achieve
                        100% success to speak correctly.
                      </p>

                      <div className="bg-muted p-4 rounded-md my-6">
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-1" />
                          <p>
                            At the centre students practice regularly from 9:00 AM to 6:00 PM i.e. prolongation of
                            breath, slowing down the speed of speech, storytelling, deliver the lecture in front of
                            other students, performing activity of group discussion among students and talking to
                            visitors, etc.
                          </p>
                        </div>
                      </div>

                      <p>
                        We deliver a lecture every day where the students sitting in a group are explained in a
                        practical way that what is stammering and its remedies. This lecture is key to success. Because
                        a stammerer does not know about the reasons of his stammering. This lecture will enables you to
                        assess yourself about your shortcomings and their remedies. As such you become confident.
                      </p>

                      <p>
                        The treatment can only be taken at the centre and not at home. Because without guidance of
                        mentor and suitable atmosphere it is not possible. There are always 8-10 persons present in the
                        Centre which gives better atmosphere for practicing. This treatment can be taken at any age.
                        Person who is more mature and sincere will recover early. Mostly persons of the age group of
                        20-30 years take treatment in this Centre.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Period of Treatment</h3>

                    <div className="space-y-4 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Ages 5-9:</span> You should come to the centre with the child
                          for 2 days only. You will be explained about the treatment and the practice methods so is to
                          able to treat your child at home. If you wish to stay for more than 2 days, then you can
                          extend the 2 days course to 5 days or 10 days course.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Ages 10-15:</span> You should come to centre for 10 days only,
                          In the Centre child will practice for 10 days in your presence and you will be able to
                          understand the treatment completely (speaking correctly without stammering). Your child will
                          get cured up to 80% to 90% during the period of 10 days and the rest of the practice will be
                          done by the child at home. Speech Therapy says that the patient must be the Specialist of the
                          Subject. If the patient is child, then his father and mother should be the specialist of the
                          subject.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Ages 16+:</span> If you can live alone, then you may come alone.
                          You can meet the students first and get satisfaction.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Limited time:</span> If you lack time, you may come here for at
                          least 10 days to become a specialist in the subject. Sincere and intelligent students can
                          continue practicing at home and cure themselves fully after learning the treatment procedure.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <School className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Full course:</span> If you have enough time, you should come for
                          the complete course of 30 days. Psychology may be lesser, but your habit of stammering is 10
                          to 15 years old, and your breath and speed are unbalanced. We suggest you take the full course
                          of 30 days for 100% success. Hardworking and sincere students become satisfied in 20 days. You
                          can take the contact numbers of those persons in your state who, after curing themselves 100%,
                          are leading their lives happily.
                        </p>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-md mt-6">
                        <p className="font-medium">
                          India Speech Therapy Centre, Amer, Jaipur has been running successfully since 1979. Thousands
                          of persons have been cured successfully.
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

