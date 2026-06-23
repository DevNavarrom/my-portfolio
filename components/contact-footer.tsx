import { ArrowUpRight } from 'lucide-react'
import { profile, socials } from '@/lib/portfolio-data'

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto mt-24 max-w-6xl px-5 pb-12 sm:mt-32 sm:px-8"
    >
      <div className="glow-border relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="relative flex flex-col gap-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Available for select work
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
              Let&apos;s build something{' '}
              <span className="italic text-accent">unforgettable</span>.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
            <div className="flex flex-wrap gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
