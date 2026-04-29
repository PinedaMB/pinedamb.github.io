import skills_map from "@/app/skills_map"

export default function Skills() {
  const skills = skills_map // Importa el mapa de habilidades desde el archivo skills_map.js

  return (
    <div className="tab-content" id="content1">
      {/* Title */}
      <h2 className="mb-4 text-2xl font-bold">Skills</h2>
      <p className="mb-6 text-gray-400">
        Una lista selecta de mis habilidades técnicas, herramientas y
        tecnologías con las que tengo experiencia. Esta sección destaca mi
        dominio de diversos lenguajes de programación, frameworks, bibliotecas y
        otras tecnologías relevantes que he utilizado en mis proyectos y
        experiencia laboral.
      </p>
      {/* <p className="mb-6 text-gray-400">
        A curated list of my technical skills, tools, and technologies that I have experience with. This section highlights my proficiency in various programming languages, frameworks, libraries, and other relevant technologies that I have used in my projects and work experience.
      </p> */}

      {skills.map((skill, index) => (
        <div
          key={index}
          className="mb-4 flex w-full flex-col items-start justify-center rounded-lg border border-gray-700 bg-black p-4 shadow-sm"
        >
          <h3 className="mb-3 flex items-center text-center text-lg font-medium md:text-left">
            {skill.emoji} {skill.section}
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {skill.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="border-primary-600/10 flex items-center gap-2 rounded-md border bg-muted/80 px-3 py-1 text-sm shadow-sm backdrop-blur-sm"
              >
                <i className={`tab-icon ${item.icon}`}></i>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
