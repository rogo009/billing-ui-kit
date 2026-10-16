import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";

const meta = {
    title: "Base/ProgressBar",
    component: ProgressBar,
    tags: ["autodocs"],
    args: {
        value: 42,
        labelPosition: "right",
    },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {};

export const HighUsage: Story = {
    args: {
        value: 82,
    },
};

export const AtLimit: Story = {
    args: {
        value: 100,
    },
};
