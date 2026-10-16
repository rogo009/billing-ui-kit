import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgressBar, ProgressBarBase } from "@/components/base/progress-indicators/progress-indicators";

const meta = {
    title: "Base/ProgressBar",
    component: ProgressBar,
    tags: ["autodocs"],
    args: {
        value: 62,
        min: 0,
        max: 100,
        labelPosition: "right",
    },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {};

export const BaseOnly: Story = {
    render: (args) => <ProgressBarBase {...args} />,
    args: {
        value: 45,
    },
};

export const NearLimit: Story = {
    args: {
        value: 88,
        valueFormatter: (value) => `${value}% of monthly credits`,
    },
};
