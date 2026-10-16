import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/components/base/input/input";

const meta = {
    title: "Base/Input",
    component: Input,
    tags: ["autodocs"],
    args: {
        label: "Work email",
        placeholder: "you@example.com",
        size: "md",
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
    args: {
        hint: "We’ll send usage alerts here.",
    },
};

export const Invalid: Story = {
    args: {
        isInvalid: true,
        hint: "Enter a valid email address.",
    },
};
