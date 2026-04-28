const MeInfo = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <picture>
          <source
            srcSet="https://avatars.githubusercontent.com/u/74937204?v=4"
            type="image/webp"
          />
          <img
            alt="Profile picture Brayan Pineda Méndez"
            className="mx-auto h-24 w-24 rounded-xl border-2 border-primary object-cover sm:mx-0"
            decoding="async"
            height="96"
            loading="lazy"
            src="https://avatars.githubusercontent.com/u/74937204?v=4"
            title="Brayan Pineda Méndez"
            width="96"
          />
        </picture>
        <div>
          <h1 className="text-text-primary relative mb-1 inline-block text-2xl font-extrabold">
            Brayan Pineda Méndez
          </h1>
          <p className="mb-2 text-sm text-primary">Full Stack Developer</p>
          <p className="flex items-center justify-center text-sm text-gray-400 sm:justify-start">
            <svg
              fill="none"
              height="14"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="-mt-0.5 mr-2 inline"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>{" "}
            Yucatan, México
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-400">
        Passionate web developer focused on creating clean, efficient, and
        scalable web applications with a modern tech stack. Specialized in
        Angular, TypeScript, and Supabase, delivering responsive and intuitive
        user interfaces. Even my name includes "dev".
      </p>
    </div>
  )
}

export default MeInfo
