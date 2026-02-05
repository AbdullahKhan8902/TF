"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsMediaSection } from "@/components/news-media-section"

export default function NewsPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <NewsMediaSection />
      <Footer />
    </main>
  )
}
