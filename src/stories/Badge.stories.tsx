import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@/components/base/badges/badges";

const meta = {
    title: "Base/Badge",
    component: Badge,
    tags: ["autodocs"],
    args: {
        children: "Pro plan",
        color: "brand",
        size: "md",
        type: "pill-color",
    },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Brand: Story = {};

export const Success: Story = {
    args: {
        color: "success",
        children: "Within limit",
    },
};

export const Warning: Story = {
    args: {
        color: "warning",
        children: "80% used",
    },
};
