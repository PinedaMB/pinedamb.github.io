export default function Footer() {
  return (
    <div className="fixed right-0 bottom-0 left-0 w-full bg-black py-2 text-center md:absolute">
      Built with{" "}
      <a
        className="text-primary hover:underline"
        href="https://nextjs.org/"
        target="_blank"
        title="Next.js"
      >
        Next.js
      </a>{" "}
      and based on{" "}
      <a
        className="text-primary hover:underline"
        href="https://astro.build/themes/details/astro-developer-portfolio-template/"
        target="_blank"
        title="devi|dev|io"
      >
        devi|dev|io template
      </a>
    </div>
  )
}
