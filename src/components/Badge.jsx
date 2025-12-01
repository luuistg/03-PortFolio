
export function Badge({ text = "Badge", className = "", href }) {
  const Component = href ? "a" : "span"

  return (
    <Component
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center 
                  rounded-md px-2 py-1 ml-3 font-medium ring-1
                  ${className}`}
    >
      {text}
    </Component>
  )
}