import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'HOME', href: '#home', color: 'group-hover:text-sekai-cyan', border: 'group-hover:bg-sekai-cyan', accent: 'bg-sekai-cyan' },
        { name: 'ABOUT', href: '#about', color: 'group-hover:text-sekai-pink', border: 'group-hover:bg-sekai-pink', accent: 'bg-sekai-pink' },
        { name: 'GALLERY', href: '#gallery', color: 'group-hover:text-sekai-yellow', border: 'group-hover:bg-sekai-yellow', accent: 'bg-sekai-yellow' },
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        setMobileMenuOpen(false)
        const element = document.querySelector(href)
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 glass' : 'py-4 bg-transparent'
            }`}>
            {/* Decorative slanted top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sekai-cyan via-sekai-pink to-sekai-yellow"></div>

            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="flex items-center justify-between">
                    <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 group z-10 w-48">
                        <div className="w-12 h-10 skew-x-[-12deg] flex items-center justify-center group-hover:scale-105 transition-all">
                            <div className="skew-x-[12deg] w-full h-full flex items-center justify-center">
                                <img src="/logo/icon.png" alt="Bebuhan Proseka Icon" className="w-full h-full object-contain" />
                            </div>
                        </div>
                        <span className="font-display font-black text-xl tracking-tight text-white hidden sm:block ml-2 drop-shadow-md uppercase">
                            Bebuhan<br /><span className="text-sekai-cyan leading-none text-lg block -mt-1">Proseka</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2 mt-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="group relative px-6 py-2"
                            >
                                <div className={`absolute inset-0 skew-x-[-12deg] bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity ${link.border} group-hover:bg-opacity-20`}></div>
                                <span className={`relative font-display font-black tracking-widest text-sm text-white ${link.color} transition-colors uppercase`}>
                                    {link.name}
                                </span>
                                <div className={`absolute bottom-0 left-0 w-full h-1 skew-x-[-12deg] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${link.border}`}></div>
                            </a>
                        ))}

                        {/* Join Button */}
                        <a href="https://chat.whatsapp.com/J8ZrG2uvQHR7BQ7H27hMWR?mode=gi_t" target="_blank" rel="noopener noreferrer" className="group relative ml-4">
                            <div className="absolute inset-0 skew-x-[-12deg] bg-sekai-pink transition-all group-hover:scale-105 glow-pink"></div>
                            <div className="relative px-8 py-2 font-display font-black text-sm text-white skew-x-[-12deg]">
                                <div className="skew-x-[12deg]">JOIN US</div>
                            </div>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 z-10 relative"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className="absolute inset-0 skew-x-[-12deg] bg-white/10"></div>
                        <div className="relative skew-x-[12deg]">
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden absolute top-full left-0 w-full glass transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-80 border-b-4 border-sekai-pink' : 'max-h-0'
                }`}>
                <div className="flex flex-col px-4 py-6 gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`font-display font-black tracking-wider text-white py-3 px-4 skew-x-[-6deg] hover:bg-white/10 transition-all border-l-4 border-transparent hover:${link.border} uppercase`}
                        >
                            <div className="skew-x-[6deg]">{link.name}</div>
                        </a>
                    ))}
                    <a href="https://chat.whatsapp.com/J8ZrG2uvQHR7BQ7H27hMWR?mode=gi_t" target="_blank" rel="noopener noreferrer" className="text-center py-4 mt-4 font-display font-black skew-x-[-6deg] bg-sekai-pink text-white uppercase shadow-lg shadow-sekai-pink/20">
                        <div className="skew-x-[6deg]">JOIN US</div>
                    </a>
                </div>
            </div>
        </nav>
    )
}
