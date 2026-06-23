'use client'

import { useEffect, useState } from 'react'
import { Command } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const links = [
  { label: 'Work', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export function TopBar() {
  const [progress, setProgress] = useState(0)
  const [isMac, setIsMac] = useState(true)

  useEffect(() => {
    setIsMac(/mac/i.test(navigator.platform))
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMenu = () => window.dispatchEvent(new Event('open-command-menu'))
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm font-medium tracking-tight"
          >
            <span className="grid size-6 place-items-center rounded-md bg-accent font-mono text-xs font-bold text-accent-foreground">
              {profile.name.charAt(0)}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={openMenu}
            className="group flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
            aria-label="Open command menu"
          >
            <span className="hidden sm:inline">Navigate</span>
            <kbd className="flex items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-foreground/70 group-hover:text-accent">
              {isMac ? <Command className="size-3" /> : 'Ctrl'}K
            </kbd>
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-border/40">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  )
}
