import FooterLink from "./FooterLink"
import { footerLinks } from "../../icons/IconsSVG"

export function Footer() {
    return (
        <footer className="bg-indigo-950 text-indigo-400 py-4 mt-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">         
                
                <p className="pb-2 font-semibold">
                    Where To?
                </p>

                <div className="flex flex-row space-x-4 mb-4">
                    {footerLinks.map((link, index) => (
                        <FooterLink key={index} href={link.href} external={link.external}>
                        {link.icon}
                        </FooterLink>
                    ))}
                </div>

                <p className="text-sm text-indigo-300">© {new Date().getFullYear()} Luis Tortosa Gonzalez</p>
            </div>
        </footer>
    )
}