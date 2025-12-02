export function NavLink({ to, children }) {
    return (
        <a href={to} className="text-indigo-100 hover:underline animate-expand-horizontally">
            {children}
        </a>
    )
}