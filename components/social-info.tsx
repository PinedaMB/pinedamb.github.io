import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SocialInfo = () => {
  const socialLinks = [
    {
      key: "github",
      href: "https://github.com/PinedaMB",
      title: "GitHub",
      icon: <FontAwesomeIcon icon={faGithubAlt} size="lg" />,
      tooltip: "Ver GitHub Profile",
    },
    {
      key: "linkedin",
      href: "https://www.linkedin.com/in/pinedamb/",
      title: "LinkedIn",
      icon: <FontAwesomeIcon icon={faLinkedinIn} size="lg" />,
      tooltip: "Ver LinkedIn Profile",
    },
    {
      key: "cv",
      href: "https://pinedamb.github.io/CV_Pineda.pdf",
      title: "Curriculum Vitae",
      icon: <FontAwesomeIcon icon={faFile} size="lg" />,
      tooltip: "Ver Curriculum Vitae",
    },
    {
      key: "mail",
      href: "mailto:mendez-pineda@outlook.es",
      title: "Email",
      icon: <FontAwesomeIcon icon={faEnvelope} size="lg" />,
      tooltip: "Enviar Email",
    },
  ]

  return (
    <div>
      <div className="mt-6 rounded-lg border border-gray-600 bg-black p-4 text-xs">
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-primary">$</span>{" "}
          <span className="text-gray-100">npx connect</span>
        </div>
        <div className="mt-2 text-gray-400">
          Initializing...
          <br />
          Ready to connect.
          <br />
          Waiting for contact request...
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-3">
        {socialLinks.map((link) => (
          <Tooltip key={link.key}>
            <TooltipTrigger asChild>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 bg-black text-gray-100 transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
              >
                {link.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent>{link.tooltip}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default SocialInfo
