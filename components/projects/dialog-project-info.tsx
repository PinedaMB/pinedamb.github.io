import { useLanguage } from "@/context/LanguageContext"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const carouselPlugins = [Autoplay({ delay: 3000, stopOnInteraction: false })]

export default function DialogProjectInfo({ project }: { project: any }) {
  const { locale } = useLanguage()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="w-full cursor-pointer rounded-lg border border-gray-600 px-4 py-2.5 text-center hover:border-primary hover:text-primary">
          {locale === "es" ? "Información" : "Information"}
        </a>
      </DialogTrigger>
      <DialogContent className="min-w-full md:min-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="flex max-h-[80vh] flex-col gap-4 overflow-y-auto pb-4">
          <div>
            <Carousel plugins={carouselPlugins}>
              <CarouselContent>
                {project.images.map((image: string) => (
                  <CarouselItem key={image}>
                    <img
                      src={image}
                      alt={project.title}
                      className="h-full w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="flex flex-col gap-2">
            <span className="mt-2 text-lg font-semibold text-gray-400">
              {locale === "es" ? "Descripción:" : "Description:"}
            </span>
            <p className="text-base text-gray-400">
              {project.description[locale]}
            </p>

            <span className="mt-2 text-lg font-semibold text-gray-400">
              {locale === "es" ? "Problema:" : "Problem:"}
            </span>
            <p className="text-base text-gray-400">{project.problem[locale]}</p>

            <span className="mt-2 text-lg font-semibold text-gray-400">
              {locale === "es" ? "Solución:" : "Solution:"}
            </span>
            <p className="text-base text-gray-400">
              {project.solution[locale]}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-lg font-semibold text-gray-400">
                {locale === "es" ? "Tecnologías:" : "Technologies:"}
              </span>
              {project.tecnologies.map((tecnology: any) => (
                <span
                  key={tecnology.name}
                  className="flex items-center gap-2 rounded-md bg-gray-800/50 px-2 py-1 text-sm"
                >
                  <i className={`tab-icon ${tecnology.icon}`}></i>
                  <span className="text-gray-400">{tecnology.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              {locale === "es" ? "Cerrar" : "Close"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
