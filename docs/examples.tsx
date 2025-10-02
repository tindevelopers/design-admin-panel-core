import React from 'react';
import { Button, Card, CardHeader, CardContent, CardFooter, Input, Badge } from '../components/primitives';

/**
 * Component Examples
 * Demonstrates usage of all primitive components
 */

export function ButtonExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-heading-3 mb-4">Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Button Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Button States</h3>
        <div className="flex gap-4">
          <Button>Default</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Button with Icons</h3>
        <div className="flex gap-4">
          <Button leftIcon={<span>📧</span>}>Send Email</Button>
          <Button rightIcon={<span>→</span>}>Continue</Button>
          <Button leftIcon={<span>💾</span>} rightIcon={<span>✓</span>}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}

export function InputExamples() {
  return (
    <div className="space-y-8 max-w-md">
      <div>
        <h3 className="text-heading-3 mb-4">Input Variants</h3>
        <div className="space-y-4">
          <Input label="Default Input" placeholder="Enter text" />
          <Input 
            label="Success Input" 
            variant="success" 
            placeholder="Valid input"
            helperText="This input is valid"
          />
          <Input 
            label="Error Input" 
            variant="error" 
            placeholder="Invalid input"
            errorMessage="This field is required"
          />
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Input Sizes</h3>
        <div className="space-y-4">
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Input with Icons</h3>
        <div className="space-y-4">
          <Input 
            leftIcon={<span>🔍</span>}
            placeholder="Search..."
          />
          <Input 
            rightIcon={<span>👁️</span>}
            type="password"
            placeholder="Password"
          />
          <Input 
            leftIcon={<span>📧</span>}
            rightIcon={<span>✓</span>}
            placeholder="Email address"
          />
        </div>
      </div>
    </div>
  );
}

export function CardExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-heading-3 mb-4">Card Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader title="Default Card" subtitle="Standard card styling" />
            <CardContent>
              <p className="text-body-md">This is a default card with standard styling.</p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader title="Elevated Card" subtitle="Enhanced shadow" />
            <CardContent>
              <p className="text-body-md">This card has enhanced shadow for elevation.</p>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader title="Outlined Card" subtitle="Prominent border" />
            <CardContent>
              <p className="text-body-md">This card has a prominent border instead of shadow.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Interactive Card</h3>
        <Card hover className="max-w-md">
          <CardHeader 
            title="Clickable Card" 
            subtitle="Hover to see the effect"
            action={<Badge variant="primary">New</Badge>}
          />
          <CardContent>
            <p className="text-body-md">This card responds to hover interactions.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Learn More</Button>
            <Button variant="ghost" size="sm">Dismiss</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export function BadgeExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-heading-3 mb-4">Badge Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Badge Sizes</h3>
        <div className="flex items-center gap-4">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Badge with Dot</h3>
        <div className="flex gap-4">
          <Badge variant="success" dot>Online</Badge>
          <Badge variant="warning" dot>Away</Badge>
          <Badge variant="error" dot>Offline</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Removable Badges</h3>
        <div className="flex gap-4">
          <Badge removable onRemove={() => console.log('Tag 1 removed')}>
            Tag 1
          </Badge>
          <Badge variant="success" removable onRemove={() => console.log('Tag 2 removed')}>
            Tag 2
          </Badge>
          <Badge variant="warning" removable onRemove={() => console.log('Tag 3 removed')}>
            Tag 3
          </Badge>
        </div>
      </div>
    </div>
  );
}

export function DesignTokenExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-heading-3 mb-4">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {/* Primary Colors */}
          <div className="space-y-2">
            <div className="w-full h-16 bg-primary-500 rounded-lg"></div>
            <p className="text-label-sm">Primary</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-secondary-500 rounded-lg"></div>
            <p className="text-label-sm">Secondary</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-success-500 rounded-lg"></div>
            <p className="text-label-sm">Success</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-warning-500 rounded-lg"></div>
            <p className="text-label-sm">Warning</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-error-500 rounded-lg"></div>
            <p className="text-label-sm">Error</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-info-500 rounded-lg"></div>
            <p className="text-label-sm">Info</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-neutral-500 rounded-lg"></div>
            <p className="text-label-sm">Neutral</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Typography Scale</h3>
        <div className="space-y-4">
          <div className="text-display-2xl">Display 2XL</div>
          <div className="text-display-xl">Display XL</div>
          <div className="text-display-lg">Display Large</div>
          <div className="text-heading-1">Heading 1</div>
          <div className="text-heading-2">Heading 2</div>
          <div className="text-heading-3">Heading 3</div>
          <div className="text-body-lg">Body Large</div>
          <div className="text-body-md">Body Medium</div>
          <div className="text-body-sm">Body Small</div>
          <div className="text-label-lg">Label Large</div>
          <div className="text-label-md">Label Medium</div>
          <div className="text-label-sm">Label Small</div>
        </div>
      </div>

      <div>
        <h3 className="text-heading-3 mb-4">Shadow Elevation</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-none border">
            <p className="text-label-sm">None</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-elevation-1">
            <p className="text-label-sm">Level 1</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-elevation-2">
            <p className="text-label-sm">Level 2</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-elevation-3">
            <p className="text-label-sm">Level 3</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-elevation-4">
            <p className="text-label-sm">Level 4</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-elevation-5">
            <p className="text-label-sm">Level 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main examples component
export function ComponentExamples() {
  return (
    <div className="container-admin py-8 space-y-16">
      <div>
        <h1 className="text-display-lg mb-2">Design System Examples</h1>
        <p className="text-body-lg text-text-secondary mb-8">
          Explore all components and design tokens in our admin design system.
        </p>
      </div>

      <section>
        <h2 className="text-heading-1 mb-6">Buttons</h2>
        <ButtonExamples />
      </section>

      <section>
        <h2 className="text-heading-1 mb-6">Inputs</h2>
        <InputExamples />
      </section>

      <section>
        <h2 className="text-heading-1 mb-6">Cards</h2>
        <CardExamples />
      </section>

      <section>
        <h2 className="text-heading-1 mb-6">Badges</h2>
        <BadgeExamples />
      </section>

      <section>
        <h2 className="text-heading-1 mb-6">Design Tokens</h2>
        <DesignTokenExamples />
      </section>
    </div>
  );
}