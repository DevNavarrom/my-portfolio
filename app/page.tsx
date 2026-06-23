import { TopBar } from '@/components/top-bar'
import { CommandMenu } from '@/components/command-menu'
import { HeroBento } from '@/components/hero-bento'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { ProjectsSection } from '@/components/projects-section'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <main className="bg-grid relative min-h-screen">
      <TopBar />
      <CommandMenu />
      <HeroBento />
      <ExperienceTimeline />
      <ProjectsSection />
      <ContactFooter />
    </main>
  )
}
