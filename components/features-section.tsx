"use client"

import { Shield, Users, Coins, CheckCircle, Search, Globe, DollarSign, Gift } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

const getFeatures = (t: ReturnType<typeof getTranslation>) => [
  {
    icon: Coins,
    title: t.features.moreEarnings,
    description: t.features.moreEarningsDesc,
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: CheckCircle,
    title: t.features.verification,
    description: t.features.verificationDesc,
    gradient: "from-purple-500 to-blue-600",
  },
  {
    icon: Gift,
    title: t.features.liveStreamRevenue,
    description: t.features.liveStreamRevenueDesc,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Shield,
    title: t.features.cleanCommunity,
    description: t.features.cleanCommunityDesc,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: t.features.easyVerification,
    description: t.features.easyVerificationDesc,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Search,
    title: t.features.searchByCategory,
    description: t.features.searchByCategoryDesc,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Globe,
    title: t.features.varietyMatters,
    description: t.features.varietyMattersDesc,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: DollarSign,
    title: t.features.getMoreForLess,
    description: t.features.getMoreForLessDesc,
    gradient: "from-purple-600 to-violet-600",
  },
  {
    icon: Coins,
    title: t.features.earnMore,
    description: t.features.earnMoreDesc,
    gradient: "from-blue-600 to-purple-600",
  },
]

export function FeaturesSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const features = getFeatures(t)

  return (
    <section id="features" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a0a2e_0%,_#0d0015_100%)]" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300">{t.features.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {t.features.title} <span className="text-gradient-purple">{t.features.titleHighlight}</span>
          </h2>
          <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            {t.features.description}
          </p>
         
        </div>

        <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-6 sm:p-8 rounded-3xl",
                "glass-card",
                "hover:border-purple-500/30 transition-all duration-500",
                "hover:-translate-y-2",
                "max-w-sm w-full" 
              )}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col items-center text-center">
                <div
                  className={cn(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6",
                    "bg-gradient-to-br shadow-lg",
                    feature.gradient,
                    "group-hover:scale-110 group-hover:shadow-xl transition-all duration-500"
                  )}
                >
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-white/50 leading-relaxed text-left w-full">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
