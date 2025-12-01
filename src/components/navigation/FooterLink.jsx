export default function FooterLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      className="text-sm hover:text-white transition mt-2 md:mt-0"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  )
}
