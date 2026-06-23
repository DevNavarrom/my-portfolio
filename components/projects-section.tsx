import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
      <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
        Selected work
      </p>
      <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
        Things I&apos;ve made
      </h2>

      <div className="mt-10 divide-y divide-border border-y border-border">
        {projects.map((p, i) => (
          <a
            key={p.id}
            href={p.href}
            className="group flex items-center gap-4 py-6 transition-colors hover:bg-card/50 sm:gap-8 sm:px-4"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-serif text-2xl text-foreground transition-colors group-hover:text-accent sm:text-3xl">
              {p.name}
            </span>
            <span className="hidden flex-1 text-sm text-muted-foreground sm:block">
              {p.blurb}
            </span>
            <ArrowUpRight className="ml-auto size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </a>
        ))}
      </div>
    </section>
  )
}
