export default function HomePage() {
    return (
        <main className="mx-auto flex min-h-dvh max-w-container flex-col justify-center px-6 py-16">
            <p className="text-sm font-semibold text-brand-secondary">billing-ui-kit</p>
            <h1 className="mt-3 text-display-sm font-semibold text-primary">Usage &amp; credits dashboard</h1>
            <p className="mt-4 max-w-2xl text-lg text-tertiary">
                Portfolio scaffold for a small billing-focused design system. Base Untitled UI components and Storybook are set up;
                dashboard screens and custom billing components come next.
            </p>
            <p className="mt-8 text-sm text-quaternary">
                Run <code className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-secondary">npm run dev</code> or browse components in{" "}
                <code className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-secondary">npm run storybook</code>.
            </p>
        </main>
    );
}
