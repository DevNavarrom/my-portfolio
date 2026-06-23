import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, Command, MapPin } from 'lucide-react'
import { profile, stats, skills } from '@/lib/portfolio-data'

function Card({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`glow-border relative overflow-hidden rounded-2xl border border-border bg-card ${className}`}
    >
      {children}
    </div>
  )
}

export function HeroBento() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-28">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-[auto_auto]">
        {/* Intro */}
        <Card className="flex flex-col justify-between gap-8 p-7 sm:p-9 md:col-span-3 md:row-span-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono uppercase tracking-widest text-muted-foreground">
              {profile.role}
            </span>
          </div>

          <div>
            <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Engineering the
              <br />
              <span className="italic text-glow text-accent">interface</span> between
              <br />
              product &amp; platform.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              View experience
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
            >
              Get in touch
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Card>

        {/* Portrait */}
        <Card className="group min-h-56 md:row-span-2">
          <Image
            src="/my-portrait.png"
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover opacity-80 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5">
            <p className="font-serif text-2xl leading-none">{profile.name}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3" /> {profile.location}
            </p>
          </div>
        </Card>

        {/* Stats */}
        <Card className="grid grid-cols-3 gap-2 p-6 md:col-span-1">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col justify-center">
              <span className="font-serif text-3xl text-foreground">{s.value}</span>
              <span className="mt-1 text-[11px] leading-tight text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </Card>

        {/* Skills marquee */}
        <Card className="marquee-paused flex flex-col justify-center gap-3 py-6 md:col-span-2">
          <p className="px-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Stack
          </p>
          <div className="relative flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-2 pr-2">
              {[...skills, ...skills].map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="whitespace-nowrap rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-card to-transparent" />
        </Card>

        {/* Command hint */}
        <Card className="flex flex-col justify-between p-6 md:col-span-1">
          <Command className="size-5 text-accent" />
          <div>
            <p className="text-sm text-foreground">Navigate anywhere</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Press{' '}
              <kbd className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-foreground">
                K
              </kbd>{' '}
              to open the command menu.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
