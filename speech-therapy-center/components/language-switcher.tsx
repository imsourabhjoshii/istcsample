"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-md flex items-center gap-2"
      onClick={() => setLanguage(language === "en" ? "hi" : "en")}
    >
      <Globe className="h-4 w-4" />
      {language === "en" ? t("switch_to_hindi") : t("switch_to_english")}
    </Button>
  )
}

