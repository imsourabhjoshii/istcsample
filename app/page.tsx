"use client"

import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import { LanguageSwitcher } from "@/components/language-switcher"
import { GoogleRating } from "@/components/google-rating"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  User,
  MessageSquare,
  BrainCog,
  Mic2,
  Wand2,
  Youtube,
  MessageCircle,
} from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function Home() {
  const { t } = useLanguage()
  const testimonialSliderRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const services = [
    {
      title: t("speech_delay"),
      description: t("speech_delay_desc"),
      icon: MessageSquare,
    },
    {
      title: t("articulation"),
      description: t("articulation_desc"),
      icon: Mic2,
    },
    {
      title: t("fluency"),
      description: t("fluency_desc"),
      icon: Wand2,
    },
    {
      title: t("language"),
      description: t("language_desc"),
      icon: BrainCog,
    },
    {
      title: t("voice"),
      description: t("voice_desc"),
      icon: Mic2,
    },
    {
      title: t("swallowing"),
      description: t("swallowing_desc"),
      icon: MessageSquare,
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      quote:
        "My 4-year-old son made remarkable progress after just three months of therapy. The personalized approach and patience shown by the therapists made all the difference.",
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      quote:
        "After my stroke, I struggled with speech. The team at India Speech Therapy Center helped me regain my confidence and ability to communicate clearly.",
    },
    {
      name: "Ananya Patel",
      location: "Bangalore",
      quote:
        "As a teacher who lost my voice, the voice therapy program was life-changing. I'm back in the classroom doing what I love, thanks to Bhoop and his excellent team.",
    },
    {
      name: "Vikram Singh",
      location: "Jaipur",
      quote:
        "The stuttering therapy program transformed my teenage son's life. He's now confident in school presentations and social situations.",
    },
    {
      name: "Meera Reddy",
      location: "Chennai",
      quote:
        "The online therapy sessions were so convenient for our family, and the results were just as effective as in-person therapy. Highly recommended!",
    },
    {
      name: "Arjun Malhotra",
      location: "Kolkata",
      quote:
        "My daughter with autism has made incredible progress with her communication skills. The therapists truly understand her unique needs.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("hero_title")}</h1>
                <p className="text-muted-foreground md:text-xl">{t("hero_description")}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild className="hover-scale">
                    <Link href="#services">{t("our_services")}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="hover-scale">
                    <Link href="#contact">{t("contact_us")}</Link>
                  </Button>
                </div>

                {/* Google Rating */}
                <div className="mt-6 flex items-center">
                  <GoogleRating />
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Speech therapy session"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover hover-scale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("about_us_title")}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("about_description")}</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Bhoop Singh Yadav - Founder"
                  width={500}
                  height={500}
                  className="rounded-full object-cover w-64 h-64 mx-auto lg:w-80 lg:h-80 hover-scale"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{t("meet_founder")}</h3>
                <h4 className="text-xl font-semibold text-primary">Bhoop Singh Yadav</h4>
                <p className="text-muted-foreground">{t("founder_experience")}</p>
                <p className="text-muted-foreground">{t("founder_credentials")}</p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{t("years_experience")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{t("certified_specialist")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{t("award_winning")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("our_services_title")}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("services_description")}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-blue-100 flex items-center justify-center">
                    <service.icon className="h-16 w-16 text-primary" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-primary font-medium hover:underline transition-colors"
                    >
                      {t("learn_more")} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("testimonials_title")}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {t("testimonials_description")}
                </p>
              </div>
            </div>

            {/* Desktop testimonials grid */}
            {!isMobile && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      <p className="italic text-muted-foreground">{testimonial.quote}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Mobile testimonials slider */}
            {isMobile && (
              <div className="mt-12 relative">
                <div ref={testimonialSliderRef} className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <User className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{testimonial.name}</h4>
                                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                              </div>
                            </div>
                            <p className="italic text-muted-foreground">{testimonial.quote}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slider controls */}
                <div className="flex justify-center mt-6 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${currentTestimonial === index ? "bg-primary" : "bg-gray-300"}`}
                      onClick={() => setCurrentTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation buttons */}
                <button
                  className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ArrowRight className="h-5 w-5 transform rotate-180" />
                </button>
                <button
                  className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("contact_title")}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("contact_description")}</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("our_location")}</h3>
                    <p className="text-muted-foreground">Mehendi Ka Bas, Amer, Jaipur, Rajasthan, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("phone")}</h3>
                    <p className="text-muted-foreground">+91 9414062108</p>
                    <p className="text-muted-foreground">+91 9799180108</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("email")}</h3>
                    <p className="text-muted-foreground">info@indiaspeechtherapy.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("hours")}</h3>
                    <p className="text-muted-foreground">{t("monday_sunday")}</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 mt-6">
                  <h3 className="font-semibold">{t("follow_us")}:</h3>
                  <a
                    href="https://wa.me/919414062108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@indiaspeechtherapyjaipur5679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-[400px]">
                {/* Google Maps Embed - Updated to India Speech Therapy Center */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.9957669425384!2d75.8501!3d26.9855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5196f4851dd%3A0x7f0f7c9e55b0c5b0!2sIndia%20Speech%20Therapy%20Center!5e0!3m2!1sen!2sin!4v1648226956227!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="India Speech Therapy Center Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <LanguageSwitcher />
    </div>
  )
}

