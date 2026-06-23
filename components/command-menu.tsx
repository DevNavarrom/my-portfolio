'use client'

// command palette
import { useCallback, useEffect, useState } from 'react'
import { Command } from 'cmdk'
import {
  ArrowUpRight,
  Briefcase,
  Copy,
  Home,
  Layers,
  Mail,
} from 'lucide-react'
import { profile, projects, socials } from '@/lib/portfolio-data'

type Action = {
  id: string
  label: string
  hint?: string
  icon: React.ReactNode
  perform: () => void
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function CommandMenu() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (
        e.key.toLowerCase() === 'k' &&
        !e.metaKey &&
        !e.ctrlKey &&
        !/input|textarea/i.test((e.target as HTMLElement)?.tagName || '')
      ) {
        e.preventDefault()
        setOpen(true)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-menu', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-menu', onOpen)
    }
  }, [])

  const run = (fn: () => void) => () => {
    close()
    // allow dialog to close before navigating
    setTimeout(fn, 60)
  }

  const navItems: Action[] = [
    { id: 'top', label: 'Go to Top', icon: <Home className="size-4" />, perform: run(() => scrollToId('top')) },
    { id: 'work', label: 'Experience', icon: <Briefcase className="size-4" />, perform: run(() => scrollToId('experience')) },
    { id: 'projects', label: 'Projects', icon: <Layers className="size-4" />, perform: run(() => scrollToId('projects')) },
  ]

  const contactItems: Action[] = [
    {
      id: 'email',
      label: 'Email me',
      hint: profile.email,
      icon: <Mail className="size-4" />,
      perform: run(() => {
        window.location.href = `mailto:${profile.email}`
      }),
    },
    {
      id: 'copy',
      label: 'Copy email address',
      icon: <Copy className="size-4" />,
      perform: run(() => navigator.clipboard?.writeText(profile.email)),
    },
  ]

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-background/70 px-4 pt-[18vh] backdrop-blur-sm"
          onClick={close}
        >
          <Command
            label="Command menu"
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-popover shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
            loop
          >
            <div className="flex items-center gap-2 border-b border-border px-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                ⌘
              </span>
              <Command.Input
                autoFocus
                placeholder="Type a command or search…"
                className="h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                ESC
              </kbd>
            </div>

            <Command.List className="no-scrollbar max-h-80 overflow-y-auto p-2">
              <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
                No results found.
              </Command.Empty>

              <Group heading="Navigate">
                {navItems.map((item) => (
                  <Item key={item.id} action={item} />
                ))}
              </Group>

              <Group heading="Projects">
                {projects.map((p) => (
                  <Item
                    key={p.id}
                    action={{
                      id: p.id,
                      label: p.name,
                      hint: p.blurb,
                      icon: <Layers className="size-4" />,
                      perform: run(() => window.open(p.href, '_blank')),
                    }}
                  />
                ))}
              </Group>

              <Group heading="Contact">
                {contactItems.map((item) => (
                  <Item key={item.id} action={item} />
                ))}
              </Group>

              <Group heading="Social">
                {socials.map((s) => (
                  <Item
                    key={s.label}
                    action={{
                      id: s.label,
                      label: s.label,
                      icon: <ArrowUpRight className="size-4" />,
                      perform: run(() => window.open(s.href, '_blank')),
                    }}
                  />
                ))}
              </Group>
            </Command.List>
          </Command>
        </div>
      )}
    </>
  )
}

function Group({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <Command.Group
      heading={heading}
      className="px-2 pb-2 pt-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5"
    >
      {children}
    </Command.Group>
  )
}

function Item({ action }: { action: Action }) {
  return (
    <Command.Item
      value={action.label + ' ' + (action.hint ?? '')}
      onSelect={action.perform}
      className="group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors data-[selected=true]:bg-secondary data-[selected=true]:text-foreground"
    >
      <span className="text-muted-foreground transition-colors group-data-[selected=true]:text-accent">
        {action.icon}
      </span>
      <span className="font-medium">{action.label}</span>
      {action.hint && (
        <span className="ml-auto truncate pl-4 text-xs text-muted-foreground">
          {action.hint}
        </span>
      )}
    </Command.Item>
  )
}
