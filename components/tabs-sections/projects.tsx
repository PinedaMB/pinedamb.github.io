import { useLanguage } from "@/context/LanguageContext"
import ProjectCard from "../projects/project-card"
import projects_map from "@/app/projects_map"

export default function Projects() {
  const { dictionary } = useLanguage()
  return (
    <div className="tab-content" id="content2">
      <h2 className="mb-4 text-2xl font-bold">{dictionary.projects.title}</h2>
      <p className="mb-6 text-gray-400">{dictionary.projects.description}</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects_map.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
