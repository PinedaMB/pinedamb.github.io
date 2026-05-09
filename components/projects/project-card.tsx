import { useLanguage } from "@/context/LanguageContext"

export default function ProjectCard({ project }: { project: any }) {
  const { locale } = useLanguage()
  return (
    <div className="flex flex-col items-start justify-center rounded-lg border border-gray-700 bg-black p-4">
      <div className="h-40 w-full overflow-hidden rounded-lg">
        <img
          src={`/projects/${project.folder}/preview.png`}
          alt={project.name}
          className="h-full w-full scale-105 object-cover transition-all duration-300 hover:scale-100"
        />
      </div>
      <h3 className="mt-4 mb-2 text-xl font-semibold text-white">
        {project.name}
      </h3>
      <p className="text-gray-400">{project.description[locale]}</p>

      <div className="mt-4 flex w-full gap-2">
        {project.finished ? (
          <>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="w-full rounded-lg border border-gray-600 px-4 py-2.5 text-center hover:border-primary hover:text-primary"
              >
                {locale === "es" ? "Ver proyecto" : "View Project"}
              </a>
            )}
            <a className="w-full rounded-lg border border-gray-600 px-4 py-2.5 text-center hover:border-primary hover:text-primary">
              {locale === "es" ? "Información" : "Information"}
            </a>
          </>
        ) : (
          <a className="w-full rounded-lg border border-gray-600 px-4 py-2.5 text-center hover:border-primary hover:text-primary">
            {locale === "es"
              ? "Proyecto en desarrollo"
              : "Project in development"}
          </a>
        )}
      </div>
    </div>
  )
}
