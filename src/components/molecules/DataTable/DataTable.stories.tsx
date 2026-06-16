import type {
    Meta,
    StoryObj,
  } from "@storybook/react";
  
  import { DataTable } from "./DataTable";
  
  const meta: Meta<typeof DataTable> = {
    title: "Organisms/DataTable",
    component: DataTable,
    tags: ["autodocs"],
  };
  
  export default meta;
  
  type Story = StoryObj<typeof DataTable>;
  
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "UI Designer",
    },
    {
      id: 3,
      name: "Mark Johnson",
      email: "mark@example.com",
      role: "Product Manager",
    },
  ];
  
  export const UsersTable: Story = {
    render: () => (
      <DataTable
        data={users}
        columns={[
          {
            key: "name",
            header: "Name",
          },
          {
            key: "email",
            header: "Email",
          },
          {
            key: "role",
            header: "Role",
          },
        ]}
      />
    ),
  };
  
  export const EmptyState: Story = {
    render: () => (
      <DataTable
        data={[]}
        columns={[
          {
            key: "name",
            header: "Name",
          },
        ]}
      />
    ),
  };