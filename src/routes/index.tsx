import { createFileRoute } from '@tanstack/react-router'

import { Navbar } from '@/components/layout/navbar'

import { Hero } from '@/components/sections/hero'
import { UpcomingServices } from '@/components/sections/upcoming-services'
import { AboutUs } from '@/components/sections/about-us'
import { MissionVisionValues } from '@/components/sections/mission-vision-values'
import { Ministries } from '@/components/sections/ministries'
import { EventsSection } from '@/components/sections/events-section'
import { VerseSection } from '@/components/sections/verse-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { HomeCTASection } from '@/components/sections/cta-home-section'
import { LocationSection } from '@/components/sections/location-section'
import { Footer } from '@/components/layout/footer'

export const Route = createFileRoute('/')({
  component: function HomePage() {
    return (
      <div className="bg-background text-text">
        <Navbar />

        <Hero />

        <UpcomingServices />

        <AboutUs />

        <MissionVisionValues />

        <Ministries />

        <EventsSection />

        <VerseSection />

        <TestimonialsSection />

        <HomeCTASection />

        <LocationSection />

        <Footer />
      </div>
    )
  },
})