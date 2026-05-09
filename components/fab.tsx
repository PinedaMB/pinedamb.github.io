import { useLanguage } from "@/context/LanguageContext"
import { Tooltip, TooltipContent } from "./ui/tooltip"
import { TooltipTrigger } from "./ui/tooltip"

export default function FAB() {
  const { locale, toggleLanguage } = useLanguage()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className="fixed right-4 bottom-18 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary p-2 text-white shadow-lg transition-all md:bottom-4"
          onClick={() => toggleLanguage()}
        >
          <img
            src={locale === "es" ? "/flags/mx.svg" : "/flags/us.svg"}
            alt="Flag"
            className="h-full w-full rounded-full object-contain shadow-lg"
          />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        {locale === "es" ? "Cambiar a Inglés" : "Change to Spanish"}
      </TooltipContent>
    </Tooltip>
  )
}
