import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Modal } from "./Modal";

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