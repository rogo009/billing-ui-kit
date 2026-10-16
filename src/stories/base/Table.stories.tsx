import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Table, TableCard } from "@/components/application/table/table";

type UsageRow = {
    id: string;
    feature: string;
    usage: string;
    status: string;
};

const columns = [
    { id: "feature", name: "Feature" },
    { id: "usage", name: "Usage" },
    { id: "status", name: "Status" },
];

const rows: UsageRow[] = [
    { id: "1", feature: "API requests", usage: "12,400", status: "Included" },
    { id: "2", feature: "Seat licenses", usage: "8 / 10", status: "Within plan" },
    { id: "3", feature: "Storage", usage: "42 GB", status: "Add-on" },
];

const meta = {
    title: "Base/Table",
    component: Table,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UsageSummary: Story = {
    render: () => (
        <TableCard.Root className="w-full max-w-3xl">
            <TableCard.Header title="Usage this period" description="Sample billing data for Storybook." badge="Preview" />
            <Table aria-label="Usage summary">
                <Table.Header columns={columns}>
                    {(column) => <Table.Head id={column.id} label={column.name} isRowHeader={column.id === "feature"} />}
                </Table.Header>
                <Table.Body items={rows}>
                    {(item) => (
                        <Table.Row columns={columns}>
                            {(column) => <Table.Cell>{item[column.id as keyof UsageRow]}</Table.Cell>}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    ),
};
