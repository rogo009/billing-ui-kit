import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

export default function HomePage() {
    return (
        <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-8 px-6 py-16">
            <div className="flex flex-col gap-3">
                <Badge color="brand" size="md" type="pill-color">
                    Scaffold
                </Badge>
                <h1 className="text-display-sm font-semibold text-primary">billing-ui-kit</h1>
                <p className="text-lg text-tertiary">
                    A public portfolio project for a usage and credits dashboard built on a small billing-focused design system. Base components and
                    tokens live here; the dashboard ships in later weekends.
                </p>
                <p className="text-sm text-tertiary">
                    Preview primitives with <code className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-xs">npm run storybook</code>.
                </p>
            </div>
            <div className="flex flex-wrap gap-3">
                <Button color="primary" size="lg">
                    Dashboard coming soon
                </Button>
                <Button color="secondary" size="lg" href="https://www.untitledui.com/react" target="_blank" rel="noreferrer">
                    Untitled UI React (MIT)
                </Button>
            </div>
        </main>
    );
}
