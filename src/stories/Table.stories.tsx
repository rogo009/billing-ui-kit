import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Table, TableCard } from "@/components/application/table/table";

const meta = {
    title: "Application/Table",
    component: Table,
    tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UsageSummary: Story = {
    render: () => (
        <TableCard.Root className="max-w-2xl">
            <TableCard.Header title="Credit usage" badge="This cycle" description="Placeholder rows for the dashboard build." />
            <Table aria-label="Credit usage by resource">
                <Table.Header>
                    <Table.Head id="resource" label="Resource" isRowHeader />
                    <Table.Head id="used" label="Used" />
                    <Table.Head id="limit" label="Limit" />
                </Table.Header>
                <Table.Body>
                    <Table.Row id="api">
                        <Table.Cell>API requests</Table.Cell>
                        <Table.Cell>12,400</Table.Cell>
                        <Table.Cell>50,000</Table.Cell>
                    </Table.Row>
                    <Table.Row id="storage">
                        <Table.Cell>Storage (GB)</Table.Cell>
                        <Table.Cell>18</Table.Cell>
                        <Table.Cell>25</Table.Cell>
                    </Table.Row>
                    <Table.Row id="seats">
                        <Table.Cell>Seats</Table.Cell>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </TableCard.Root>
    ),
};
