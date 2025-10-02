import { Badge } from '../components/primitives/Badge'
import { Button } from '../components/primitives/Button'
import { Card } from '../components/primitives/Card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Design Admin Panel Core</h1>
          <p className="mb-6 text-lg text-gray-600">
            A comprehensive design system for building modern frontend websites
          </p>
          <Badge variant="primary" size="lg">
            Development Server Running
          </Badge>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-semibold">Components</h2>
            <p className="mb-4 text-gray-600">
              Pre-built React components with TypeScript support and Tailwind CSS styling.
            </p>
            <Button variant="primary" size="sm">
              View Components
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="mb-3 text-xl font-semibold">Templates</h2>
            <p className="mb-4 text-gray-600">
              Ready-to-use admin panel templates and dashboard layouts.
            </p>
            <Button variant="secondary" size="sm">
              Browse Templates
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="mb-3 text-xl font-semibold">Design Tokens</h2>
            <p className="mb-4 text-gray-600">
              Consistent design tokens for colors, typography, spacing, and more.
            </p>
            <Button variant="success" size="sm">
              Explore Tokens
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            This is a minimal Next.js application for previewing the design system.
          </p>
        </div>
      </div>
    </main>
  )
}
