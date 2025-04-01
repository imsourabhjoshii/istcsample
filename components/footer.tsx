"use client"

import Link from "next/link"
import { MessageSquare } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { VisitorCounter } from "@/components/visitor-counter"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} India Speech Therapy Center. {t("rights_reserved")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <VisitorCounter />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("privacy_policy")}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("terms_of_service")}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("sitemap")}
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Developed by{" "}
              <a
                href="https://druid.tec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                druid.tec
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

