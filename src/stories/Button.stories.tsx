import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/base/buttons/button";

const meta = {
    title: "Base/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "Upgrade plan",
        size: "md",
        color: "primary",
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        color: "secondary",
        children: "View usage",
    },
};

export const Destructive: Story = {
    args: {
        color: "primary-destructive",
        children: "Cancel subscription",
    },
};
