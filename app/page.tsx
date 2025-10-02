import { SparklesIcon, PuzzlePieceIcon, Squares2X2Icon, SwatchIcon } from '@heroicons/react/24/outline'
import { Badge } from '../components/primitives/Badge'
import { Button } from '../components/primitives/Button'
import { Card } from '../components/primitives/Card'

const features = [
  {
    title: 'Component Library',
    description:
      'Craft production-ready interfaces with a curated collection of accessible UI components.',
    cta: 'View Components',
    variant: 'primary',
    icon: PuzzlePieceIcon,
    accent: 'from-primary-500/15 via-primary-500/5 to-transparent',
  },
  {
    title: 'Dashboard Templates',
    description: 'Kick-start projects with polished admin dashboards that are easy to customize.',
    cta: 'Browse Templates',
    variant: 'secondary',
    icon: Squares2X2Icon,
    accent: 'from-secondary-500/15 via-secondary-500/5 to-transparent',
  },
  {
    title: 'Design Tokens',
    description:
      'Keep color, typography, and spacing consistent across every experience.',
    cta: 'Explore Tokens',
    variant: 'success',
    icon: SwatchIcon,
    accent: 'from-success-500/15 via-success-500/5 to-transparent',
  },
] as const

const highlights = [
  {
    label: '40+ components',
    description: 'Accessible, theme-ready, and built with TypeScript.',
  },
  { label: '5 dashboard layouts', description: 'Tailored workflows for different teams.' },
  { label: 'Unified tokens', description: 'Color, typography, spacing, and shadows in sync.' },
] as const

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-[-18rem] flex justify-center blur-3xl">
        <div className="h-96 w-[70rem] rounded-full bg-gradient-to-r from-primary-200/70 via-primary-300/50 to-sky-300/40" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <section className="flex flex-col items-center text-center">
          <Badge
            variant="primary"
            size="lg"
            dot
            className="mb-5 border-primary-200/60 bg-white/80 text-primary-700 shadow-sm backdrop-blur"
          >
            Live design system preview
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Design Admin Panel Core
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            A comprehensive design system for building modern frontend websites with consistent
            components, tokens, and templates.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" leftIcon={<SparklesIcon className="h-5 w-5" aria-hidden="true" />}>
              Explore Components
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>

          <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 text-left text-sm text-slate-600 sm:grid-cols-3">
            {highlights.map(({ label, description }) => (
              <div
                key={label}
                className="flex flex-col gap-1 rounded-2xl border border-white/70 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur sm:text-left"
              >
                <span className="text-sm font-semibold text-slate-700">{label}</span>
                <span className="text-sm text-slate-500">{description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, cta, variant, icon: Icon, accent }) => (
            <Card
              key={title}
              variant="elevated"
              padding="lg"
              className="relative flex h-full flex-col overflow-hidden border border-white/60 bg-white/90 shadow-lg backdrop-blur transition-transform duration-200 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${accent}`} />

              <div className="flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-slate-900">{title}</h2>
                <p className="mt-3 text-base text-slate-600">{description}</p>
                <div className="mt-6">
                  <Button variant={variant} size="sm">
                    {cta}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </section>

        <footer className="rounded-2xl border border-white/70 bg-white/70 px-6 py-6 text-center text-sm text-slate-500 shadow-sm backdrop-blur">
          This is a minimal Next.js application for previewing the design system.
        </footer>
      </div>
    </main>
  )
}
