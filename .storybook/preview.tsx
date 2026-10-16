import type { Preview } from "@storybook/nextjs-vite";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";

const preview: Preview = {
    decorators: [
        (Story) => (
            <Theme>
                <div className="light-mode bg-primary p-8">
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
        layout: "centered",
        a11y: {
            test: "todo",
        },
    },
};

export default preview;
