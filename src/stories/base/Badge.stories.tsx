import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";

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

export const Pill: Story = {};

export const Modern: Story = {
    args: {
        type: "modern",
        color: "gray",
        children: "Usage",
    },
};

export const WithStatusDot: Story = {
    render: (args) => <BadgeWithDot {...args} />,
    args: {
        type: "pill-color",
        color: "success",
        children: "Within limit",
    },
};
