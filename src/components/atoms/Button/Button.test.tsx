
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders button text", () => {
    render(
      <Button>
        Click Me
      </Button>
    );

    expect(
      screen.getByText("Click Me")
    ).toBeInTheDocument();
  });
});
it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
  
    const user = userEvent.setup();
  
    render(
      <Button onClick={handleClick}>
        Click Me
      </Button>
    );
  
    await user.click(
      screen.getByRole("button")
    );
  
    expect(handleClick).toHaveBeenCalledTimes(1);
  });