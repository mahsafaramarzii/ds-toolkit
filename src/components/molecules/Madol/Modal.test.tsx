import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { Modal } from "./Modal";
import userEvent from "@testing-library/user-event";
import { run } from "node:test";



describe("Modal", () => {
  it("renders modal content when open", () => {
    render(
      <Modal
        isOpen={true}
        onClose={vi.fn()}
      >
        Modal Content
      </Modal>
    );

    expect(
      screen.getByText("Modal Content")
    ).toBeInTheDocument();
  });
});
it("does not render when closed", () => {
    render(
      <Modal
        isOpen={false}
        onClose={vi.fn()}
      >
        Modal Content
      </Modal>
    );
  
    expect(
      screen.queryByText("Modal Content")
    ).not.toBeInTheDocument();
  });
  it("calls onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
  
    const user = userEvent.setup();
  
    render(
      <Modal
        isOpen={true}
        onClose={handleClose}
      >
        Modal Content
      </Modal>
    );
  
    await user.click(
      screen.getByRole("button")
    );
  
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  it("calls onClose when overlay is clicked", async () => {
    const handleClose = vi.fn();
  
    const user = userEvent.setup();
  
    render(
      <Modal
        isOpen={true}
        onClose={handleClose}
      >
        Modal Content
      </Modal>
    );
  
    await user.click(
      screen.getByTestId("modal-overlay")
    );
  
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  it("does not call onClose when modal content is clicked", async () => {
    const handleClose = vi.fn();
  
    const user = userEvent.setup();
  
    render(
      <Modal
        isOpen={true}
        onClose={handleClose}
      >
        Modal Content
      </Modal>
    );
  
    await user.click(
      screen.getByTestId("modal")
    );
  
    expect(handleClose).not.toHaveBeenCalled();
  });