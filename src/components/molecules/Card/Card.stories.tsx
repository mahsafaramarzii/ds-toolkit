import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <h3 className="text-lg font-semibold">
        DS Toolkit
      </h3>

      <p className="mt-2 text-gray-600">
        Reusable React component library.
      </p>
    </Card>
  ),
};

export const ProjectCard: Story = {
  render: () => (
    <Card>
      <h3 className="text-lg font-semibold">
        Project Dashboard
      </h3>

      <p className="mt-2 text-gray-600">
        Dashboard UI built with reusable components.
      </p>

      <button className="mt-4 text-blue-600 font-medium">
        View Details
      </button>
    </Card>
  ),
};

export const GridLayout: Story = {
  render: () => (
    <div
      className="
        grid
        gap-6
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index}>
          <h3 className="font-semibold">
            Card {index + 1}
          </h3>

          <p className="mt-2 text-gray-600">
            Example content.
          </p>
        </Card>
      ))}
    </div>
  ),
};