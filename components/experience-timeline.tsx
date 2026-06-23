'use client'

import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { timeline } from '@/lib/portfolio-data'

export function ExperienceTimeline() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const amount = card ? card.offsetWidth + 16 : 360
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const w = card ? card.offsetWidth + 16 : 360
    setActive(Math.round(el.scrollLeft / w))
  }

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Timeline
          </p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
            Where I&apos;ve built
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={() => scrollByCard(-1)}
            className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            aria-label="Previous"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            aria-label="Next"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Track line */}
      <div className="relative mt-10">
        <div className="absolute left-0 right-0 top-6 h-px bg-border" aria-hidden />
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        >
          {timeline.map((item, i) => (
            <article
              key={item.id}
              data-card
              className="glow-border group relative w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card p-6 sm:w-[360px]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`size-3 rounded-full ring-4 ring-background transition-colors ${
                    i === active ? 'bg-accent' : 'bg-border'
                  }`}
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
                <span className="ml-auto rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {item.kind}
                </span>
              </div>

              <h3 className="font-serif text-2xl leading-tight">{item.company}</h3>
              <p className="mt-0.5 text-sm font-medium text-accent">{item.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary/60 px-2 py-1 text-[11px] text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* progress dots */}
      <div className="mt-2 flex gap-1.5">
        {timeline.map((item, i) => (
          <span
            key={item.id}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? 'w-8 bg-accent' : 'w-4 bg-border'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
