"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is Telefanz?",
    answer:
      "Telefanz is a next-generation social media platform and mobile app for watching, creating, and sharing short videos, photos, stories, and live streams. It is built around real identities, verified creators, and a safe global community focused on authentic content.",
  },
  {
    question: "How do I join Telefanz?",
    answer:
      "You can join Telefanz by downloading the app from the App Store or Google Play Store and signing up using Email, Google, or Apple login. Once registered, you can immediately start watching reels, feeds, and live streams for free.",
  },
  {
    question: "Do I need to verify my account?",
    answer:
      "No. Verification is not required to watch content. Anyone can browse reels, feeds, and live streams freely. However, to post content (videos, photos, or stories), comment, send messages, go live, or send gifts, users must complete identity verification.",
  },
  {
    question: "What happens during verification?",
    answer:
      "Verification includes face recognition and government ID validation. Each person can verify only one account. Once approved, you choose your profile category, select a subscription plan, and your account becomes fully active with a Blue Tick.",
  },
  {
    question: "What kind of content can I post?",
    answer:
      "Verified users can post short videos, photos, and stories, and they can also host live streams. Content can showcase creativity, daily moments, announcements, or real-time interactions with fans and followers.",
  },
  {
    question: "What are Coinzz and how do I earn them?",
    answer:
      "Coinzz is Telefanz’s in-app virtual currency. Creators earn Coinzz through gifts from fans during live streams and platform engagement. Coinzz can be redeemed into wallet balance and withdrawn. Telefanz takes zero commission on creator earnings.",
  },
  {
    question: "How do gifts work during livestreams?",
    answer:
      "During live streams, viewers can send virtual gifts using Coinzz (up to 50,000 Coinzz per gift). Creators receive these gifts instantly and can redeem them later.",
  },
  {
    question: "Does Telefanz take any commission from creators?",
    answer:
      "No. Telefanz takes zero platform commission on gifts or Coinzz collected. Only standard Apple App Store and Google Play Store fees apply.",
  },
  {
    question: "How do I find content I’m interested in?",
    answer:
      "You can browse content using smart discovery modes available for both reels and feeds: Following, Discover, Nearby, and Trending. You can also search verified creators by category from 95 available profile categories.",
  },
  {
    question: "Is Telefanz free to use?",
    answer:
      "Yes. Telefanz is free to download and use for watching content and live streams. Verification and subscription are required only for users who want to interact, publish content (including stories), or go live.",
  },
  {
    question: "What is the Blue Tick?",
    answer:
      "The Blue Tick shows that a user’s identity is verified and that they have full access to Telefanz features, including posting videos, photos, and stories, commenting, messaging, and live streaming.",
  },
  {
    question: "What is the Golden Tick?",
    answer:
      "The Golden Tick is an exclusive recognition awarded by Telefanz to highly active and consistent creators. It cannot be purchased and is granted based on activity and engagement.",
  },
  {
    question: "How does Telefanz keep the platform safe?",
    answer:
      "Only verified users can post or interact, and all content is reviewed before going live. Strong moderation policies help maintain a clean, respectful, and scam-free community.",
  },
  {
    question: "What social features are available?",
    answer:
      "All users can watch reels, feeds, stories, and live streams. Verified users can also like, comment, share, message, follow creators by category, post videos/photos/stories, go live, and send gifts.",
  },
  {
    question: "Can I use Telefanz in different languages?",
    answer:
      "Yes. Telefanz supports multiple languages to make the platform accessible to users around the world.",
  },
  {
    question: "What should I do if I have account or login issues?",
    answer:
      "If you experience login or account activation issues, check your email and spam folder for verification messages. If the problem continues, contact support at support@telefanz.com",
  },
  {
    question: "Where can I find Telefanz’s Terms and Privacy Policy?",
    answer:
      "You can access Telefanz’s Terms of Use and Privacy Policy through the links at the bottom of the website or inside the app. These explain how your data is protected and used.",
  },
  {
    question: "Who can I contact for help?",
    answer:
      "For any questions, feedback, or support requests, please contact us at support@telefanz.com",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1a0a2e_0%,_#0d0015_100%)]" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/15 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach out to our
            support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 data-[state=open]:border-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-base sm:text-lg font-medium [&[data-state=open]]:text-purple-300 hover:text-purple-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
