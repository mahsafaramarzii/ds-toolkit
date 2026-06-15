import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Molecules/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const techItems = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "Angular",
    value: "angular",
  },
  {
    label: "Svelte",
    value: "svelte",
  },
];

export const Default: Story = {
  args: {
    items: techItems,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    items: techItems,
    placeholder: "Select Framework",
  },
};
export const ProjectActions: Story = {
    args: {
      placeholder: "Actions",
      items: [
        {
          label: "Edit Project",
          value: "edit",
        },
        {
          label: "Duplicate",
          value: "duplicate",
        },
        {
          label: "Archive",
          value: "archive",
        },
        {
          label: "Delete",
          value: "delete",
        },
      ],
    },
  };