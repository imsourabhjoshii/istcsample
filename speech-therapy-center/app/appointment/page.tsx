"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, ArrowLeft, Loader2 } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import {
  type AppointmentData,
  formatAppointmentForWhatsApp,
  getWhatsAppLink,
  sendAppointmentEmail,
} from "@/lib/appointment-utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function AppointmentPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [formData, setFormData] = useState<AppointmentData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    appointmentFor: "self",
    patientAge: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: [],
    concerns: "",
    heardFrom: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, appointmentFor: value }))
  }

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (id === "any-time" && checked) {
      setFormData((prev) => ({ ...prev, preferredTime: ["Any Time"] }))
    } else if (id !== "any-time") {
      const timeValue =
        id === "morning" ? "Morning (9AM-12PM)" : id === "afternoon" ? "Afternoon (12PM-3PM)" : "Evening (3PM-6PM)"

      setFormData((prev) => {
        // Remove "Any Time" if it exists
        let updatedTimes = prev.preferredTime.filter((time) => time !== "Any Time")

        if (checked) {
          updatedTimes.push(timeValue)
        } else {
          updatedTimes = updatedTimes.filter((time) => time !== timeValue)
        }

        return { ...prev, preferredTime: updatedTimes }
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmDialog(true)
  }

  const submitAppointment = async () => {
    setIsSubmitting(true)
    setShowConfirmDialog(false)

    try {
      // Format data for WhatsApp
      const whatsAppMessage = formatAppointmentForWhatsApp(formData)

      // In a real implementation, you would send this data to your server
      // For now, we'll open WhatsApp with the formatted message
      const whatsAppLink = getWhatsAppLink("919414062108", whatsAppMessage)
      window.open(whatsAppLink, "_blank")

      // Send email
      sendAppointmentEmail(formData, "info@indiaspeechtherapy.org")

      toast({
        title: "Appointment request submitted",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        appointmentFor: "self",
        patientAge: "",
        serviceType: "",
        preferredDate: "",
        preferredTime: [],
        concerns: "",
        heardFrom: "",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <div className="container py-8 md:py-12 lg:py-16">
          <div className="flex items-center mb-8">
            <Button variant="ghost" size="sm" asChild className="mr-2 hover:bg-primary/10 transition-colors">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("back_to_home")}
              </Link>
            </Button>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-bold">{t("book_your_appointment")}</CardTitle>
                <CardDescription>{t("appointment_description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">{t("personal_information")}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t("first_name")}</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder={t("first_name")}
                          className="hover:border-primary focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t("last_name")}</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder={t("last_name")}
                          className="hover:border-primary focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("email_address")}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t("email_address")}
                          className="hover:border-primary focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("phone_number")}</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t("phone_number")}
                          className="hover:border-primary focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">{t("address")}</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder={t("address")}
                        className="hover:border-primary focus:border-primary transition-colors"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">{t("city")}</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder={t("city")}
                          className="hover:border-primary focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">{t("state")}</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder={t("state")}
                          className="hover:border-primary focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                        <Label htmlFor="pincode">{t("pincode")}</Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder={t("pincode")}
                          className="hover:border-primary focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">{t("appointment_details")}</h3>

                    <div className="space-y-2">
                      <Label>{t("who_for")}</Label>
                      <RadioGroup value={formData.appointmentFor} onValueChange={handleRadioChange} defaultValue="self">
                        <div className="flex flex-wrap gap-6">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="self" id="self" />
                            <Label htmlFor="self">{t("myself")}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="child" id="child" />
                            <Label htmlFor="child">{t("my_child")}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">{t("someone_else")}</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="patientAge">{t("patient_age")}</Label>
                      <Input
                        id="patientAge"
                        type="number"
                        value={formData.patientAge}
                        onChange={handleInputChange}
                        placeholder={t("patient_age")}
                        className="hover:border-primary focus:border-primary transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType">{t("service_type")}</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleSelectChange("serviceType", value)}
                        required
                      >
                        <SelectTrigger className="hover:border-primary focus:border-primary transition-colors">
                          <SelectValue placeholder={t("select_service")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="speech-delay">{t("speech_delay")}</SelectItem>
                          <SelectItem value="articulation">{t("articulation")}</SelectItem>
                          <SelectItem value="fluency">{t("fluency")}</SelectItem>
                          <SelectItem value="language">{t("language")}</SelectItem>
                          <SelectItem value="voice">{t("voice")}</SelectItem>
                          <SelectItem value="swallowing">{t("swallowing")}</SelectItem>
                          <SelectItem value="assessment">Initial Assessment</SelectItem>
                          <SelectItem value="other">{t("other")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">{t("preferred_date")}</Label>
                      <div className="flex items-center">
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="rounded-r-none hover:border-primary focus:border-primary transition-colors"
                          required
                        />
                        <div className="bg-muted p-2 rounded-r-md border border-l-0 border-input">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>{t("preferred_time")}</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="morning"
                            checked={formData.preferredTime.includes("Morning (9AM-12PM)")}
                            onCheckedChange={(checked) => handleCheckboxChange("morning", checked === true)}
                          />
                          <Label htmlFor="morning">{t("morning")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="afternoon"
                            checked={formData.preferredTime.includes("Afternoon (12PM-3PM)")}
                            onCheckedChange={(checked) => handleCheckboxChange("afternoon", checked === true)}
                          />
                          <Label htmlFor="afternoon">{t("afternoon")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="evening"
                            checked={formData.preferredTime.includes("Evening (3PM-6PM)")}
                            onCheckedChange={(checked) => handleCheckboxChange("evening", checked === true)}
                          />
                          <Label htmlFor="evening">{t("evening")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="any-time"
                            checked={formData.preferredTime.includes("Any Time")}
                            onCheckedChange={(checked) => handleCheckboxChange("any-time", checked === true)}
                          />
                          <Label htmlFor="any-time">{t("any_time")}</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="concerns">{t("concerns")}</Label>
                      <Textarea
                        id="concerns"
                        value={formData.concerns}
                        onChange={handleInputChange}
                        placeholder={t("concerns_placeholder")}
                        className="min-h-[120px] hover:border-primary focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="heardFrom">{t("how_hear")}</Label>
                      <Select
                        value={formData.heardFrom}
                        onValueChange={(value) => handleSelectChange("heardFrom", value)}
                      >
                        <SelectTrigger className="hover:border-primary focus:border-primary transition-colors">
                          <SelectValue placeholder={t("select_option")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="search">{t("internet_search")}</SelectItem>
                          <SelectItem value="referral">{t("doctor_referral")}</SelectItem>
                          <SelectItem value="friend">{t("friend_family")}</SelectItem>
                          <SelectItem value="social">{t("social_media")}</SelectItem>
                          <SelectItem value="other">{t("other")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        {t("agree_terms")}
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full hover:bg-primary/90 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("submitting")}
                      </>
                    ) : (
                      t("submit_request")
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">{t("contact_24h")}</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Appointment Request</DialogTitle>
            <DialogDescription>Your appointment details will be sent via WhatsApp and email.</DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <p>
              Name: {formData.firstName} {formData.lastName}
            </p>
            <p>Service: {formData.serviceType}</p>
            <p>Date: {formData.preferredDate}</p>
            <p>Time: {formData.preferredTime.join(", ")}</p>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button type="button" variant="secondary" onClick={() => setShowConfirmDialog(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={submitAppointment} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Confirm and Submit"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
      <LanguageSwitcher />
    </div>
  )
}

