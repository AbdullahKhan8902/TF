"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { getDeviceStoreLink } from "@/lib/store-links"
import Image from "next/image"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import { useLanguage } from "@/lib/language-context"
import { getTranslation, getLanguageName, type Language } from "@/lib/translations"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavLink {
  href: string
  label: string
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = getTranslation(language)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleDownloadClick = () => {
    window.open(getDeviceStoreLink(), "_blank")
  }

  const handleSignInClick = () => {
    setIsComingSoonModalOpen(true)
    setIsMobileMenuOpen(false) // Close mobile menu if open
  }

  const navLinks: NavLink[] = [
    { href: "/#features", label: t.header.features },
    { href: "/#for-users", label: t.header.forUsers },
    { href: "/#for-creators", label: t.header.forCreators },
    { href: "/news", label: t.header.news },
  ]

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: getLanguageName('en', language), flag: '🇬🇧' },
    { code: 'ar', name: getLanguageName('ar', language), flag: '🇸🇦' },
    { code: 'de', name: getLanguageName('de', language), flag: '🇩🇪' },
    { code: 'el', name: getLanguageName('el', language), flag: '🇬🇷' },
    { code: 'es', name: getLanguageName('es', language), flag: '🇪🇸' },
    { code: 'fr', name: getLanguageName('fr', language), flag: '🇫🇷' },
    { code: 'hi', name: getLanguageName('hi', language), flag: '🇮🇳' },
    { code: 'it', name: getLanguageName('it', language), flag: '🇮🇹' },
    { code: 'pt', name: getLanguageName('pt', language), flag: '🇵🇹' },
    { code: 'ru', name: getLanguageName('ru', language), flag: '🇷🇺' },
    { code: 'tr', name: getLanguageName('tr', language), flag: '🇹🇷' },
    { code: 'zh', name: getLanguageName('zh', language), flag: '🇨🇳' },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-background/80 backdrop-blur-2xl border-b border-border/30" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-15 ">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 relative">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <Image src="/images/logo.png" alt="Telefanz Logo" width={190} height={40} />
              <div className="relative"></div>
            </Link>

            <nav className="  hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className=" px-3 xl:px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:bg-white/5 flex items-center gap-2"
                  >
                    <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
                    <span className="text-sm">{languages.find(l => l.code === language)?.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 max-h-96 overflow-y-auto">
                  {languages.map(lang => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={cn(
                        "cursor-pointer flex items-center gap-3 py-2",
                        language === lang.code && "bg-purple-500/20 text-purple-300"
                      )}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {language === lang.code && (
                        <span className="ml-auto">✓</span>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 border-0"
                onClick={handleSignInClick}
              >
                <LogIn className="w-4 h-4 mr-2" />
                {t.header.signIn}
              </Button>
            </div>

            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu
                className={cn(
                  "absolute w-5 h-5 text-white transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100",
                )}
              />
              <X
                className={cn(
                  "absolute w-5 h-5 text-white transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0",
                )}
              />
            </button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-white/70 hover:text-white hover:bg-white/5"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
                      <span>{languages.find(l => l.code === language)?.name}</span>
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 max-h-96 overflow-y-auto">
                  {languages.map(lang => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={cn(
                        "cursor-pointer flex items-center gap-3 py-2",
                        language === lang.code && "bg-purple-500/20 text-purple-300"
                      )}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {language === lang.code && (
                        <span className="ml-auto">✓</span>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="w-full h-12 bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0"
                onClick={handleSignInClick}
              >
                <LogIn className="w-4 h-4 mr-2" />
                {t.header.signIn}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <ComingSoonModal isOpen={isComingSoonModalOpen} onClose={() => setIsComingSoonModalOpen(false)} />
    </>
  )
}
