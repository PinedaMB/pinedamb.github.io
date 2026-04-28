const SocialInfo = () => {
  const socialLinks = [
    {
      key: "github",
      href: "",
      title: "GitHub",
      icon: "",
    },
    {
      key: "linkedin",
      href: "",
      title: "LinkedIn",
      icon: "",
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
          <a
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 bg-black text-gray-100 transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary"
            href={link.href}
            target="_blank"
            title={`View ${link.title} Profile`}
            rel="noopener noreferrer"
            key={link.key}
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>{" "}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialInfo
