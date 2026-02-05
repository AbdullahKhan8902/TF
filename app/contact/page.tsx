"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { allTranslations } from "@/lib/translations-all"

export default function ContactPage() {
  const { language } = useLanguage()
  const contactT = allTranslations.contact[language as keyof typeof allTranslations.contact]
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">{contactT?.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {contactT?.title} <span className="text-gradient">{contactT?.titleHighlight}</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              {contactT?.description}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
          

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">{contactT?.heading}</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
