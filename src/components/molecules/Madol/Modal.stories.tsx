import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../atoms/Button";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Molecules/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="DS Toolkit"
      >
        <p>
          This is a reusable modal component built
          with React Portal.
        </p>
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};

function LongContentModalDemo() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Open Large Modal
        </Button>
  
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Project Details"
        >
          <div className="space-y-4">
            {Array.from({ length: 10 }).map(
              (_, index) => (
                <p key={index}>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              )
            )}
          </div>
        </Modal>
      </>
    );
  }
  
  export const LongContent: Story = {
    render: () => <LongContentModalDemo />,
  };