"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isTreatmentsDropdownOpen, setIsTreatmentsDropdownOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)
  const treatmentsDropdownRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false)
      }
      if (treatmentsDropdownRef.current && !treatmentsDropdownRef.current.contains(event.target as Node)) {
        setIsTreatmentsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-background transition-shadow duration-200 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">India Speech Therapy Center</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t("home")}
          </Link>

          {/* About dropdown */}
          <div className="relative" ref={aboutDropdownRef}>
            <button
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => {
                setIsAboutDropdownOpen(!isAboutDropdownOpen)
                setIsTreatmentsDropdownOpen(false)
              }}
            >
              {t("about")}{" "}
              <ChevronDown className={`h-4 w-4 transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-background border rounded-md shadow-lg py-1 z-50">
                <Link
                  href="/#about"
                  className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  {t("about_us")}
                </Link>
                <Link
                  href="/gallery"
                  className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  {t("gallery")}
                </Link>
                <Link
                  href="/fees"
                  className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  {t("fees_structure")}
                </Link>
                <Link
                  href="/hostel"
                  className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  {t("hostel_facility")}
                </Link>
                <Link
                  href="/success-stories"
                  className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  {t("successful_students")}
                </Link>
              </div>
            )}
          </div>

          {/* Treatments dropdown */}
          <div className="relative" ref={treatmentsDropdownRef}>
            <button
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => {
                setIsTreatmentsDropdownOpen(!isTreatmentsDropdownOpen)
                setIsAboutDropdownOpen(false)
              }}
            >
              {t("treatments")}{" "}
              <ChevronDown className={`h-4 w-4 transition-transform ${isTreatmentsDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isTreatmentsDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-background border rounded-md shadow-lg py-1 z-50">
                <Link
                  href="/treatments/stammering"
                  className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                  onClick={() => setIsTreatmentsDropdownOpen(false)}
                >
                  {t("stammering")}
                </Link>
                <Link
                  href="/treatments/mis-articulation"
                  className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                  onClick={() => setIsTreatmentsDropdownOpen(false)}
                >
                  {t("mis_articulation")}
                </Link>
              </div>
            )}
          </div>

          <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
            {t("services")}
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            {t("testimonials")}
          </Link>
          <Link href="/press" className="text-sm font-medium hover:text-primary transition-colors">
            {t("press")}
          </Link>
          <Link href="/#faq" className="text-sm font-medium hover:text-primary transition-colors">
            {t("faq")}
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t("contact")}
          </Link>
        </nav>

        <Button asChild className="hidden md:inline-flex">
          <Link href="/appointment">{t("book_appointment")}</Link>
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>

            {/* Mobile About submenu */}
            <div>
              <button
                className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setIsMobileAboutOpen(!isMobileAboutOpen)
                  setIsMobileTreatmentsOpen(false)
                }}
              >
                {t("about")}
                {isMobileAboutOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>

              {isMobileAboutOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-muted ml-2">
                  <Link
                    href="/#about"
                    className="block text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("about_us")}
                  </Link>
                  <Link
                    href="/gallery"
                    className="block text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("gallery")}
                  </Link>
                  <Link
                    href="/fees"
                    className="block text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("fees_structure")}
                  </Link>
                  <Link
                    href="/hostel"
                    className="block text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("hostel_facility")}
                  </Link>
                  <Link
                    href="/success-stories"
                    className="block text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("successful_students")}
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Treatments submenu */}
            <div>
              <button
                className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)
                  setIsMobileAboutOpen(false)
                }}
              >
                {t("treatments")}
                {isMobileTreatmentsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>

              {isMobileTreatmentsOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-muted ml-2">
                  <Link
                    href="/treatments/stammering"
                    className="block text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("stammering")}
                  </Link>
                  <Link
                    href="/treatments/mis-articulation"
                    className="block text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("mis_articulation")}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#services"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("services")}
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("testimonials")}
            </Link>
            <Link
              href="/press"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("press")}
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("faq")}
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            <Button asChild className="w-full">
              <Link href="/appointment" onClick={() => setIsMenuOpen(false)}>
                {t("book_appointment")}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

