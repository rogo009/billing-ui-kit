import type { Preview } from "@storybook/nextjs-vite";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";

const preview: Preview = {
    decorators: [
        (Story) => (
            <Theme>
                <div className="light-mode min-h-40 bg-primary p-8 text-primary">
                    <Story />
                </div>
            </Theme>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: "todo",
        },
    },
};

export default preview;
