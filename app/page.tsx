import { Button } from '../components/primitives/Button';
import { Card } from '../components/primitives/Card';
import { Badge } from '../components/primitives/Badge';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Design Admin Panel Core
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A comprehensive design system for building modern frontend websites
          </p>
          <Badge variant="primary" size="lg">
            Development Server Running
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-3">Components</h2>
            <p className="text-gray-600 mb-4">
              Pre-built React components with TypeScript support and Tailwind CSS styling.
            </p>
            <Button variant="primary" size="sm">
              View Components
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-3">Templates</h2>
            <p className="text-gray-600 mb-4">
              Ready-to-use admin panel templates and dashboard layouts.
            </p>
            <Button variant="secondary" size="sm">
              Browse Templates
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-3">Design Tokens</h2>
            <p className="text-gray-600 mb-4">
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
  );
}
