import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/base/buttons/button";

const meta = {
    title: "Base/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "Upgrade plan",
        color: "primary",
        size: "md",
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        color: "secondary",
        children: "Manage billing",
    },
};

export const Destructive: Story = {
    args: {
        color: "primary-destructive",
        children: "Cancel subscription",
    },
};
