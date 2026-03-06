import { render, screen, fireEvent } from "@testing-library/react";
import TestPlayground from "./TestPlayground";
import { describe, it, expect } from "vitest";

describe("UI Test", () => {
  it("updates the live preview when user types", () => {
    render(<TestPlayground />);

    const inputField = screen.getByPlaceholderText(/Type something here.../i);

    fireEvent.change(inputField, { target: { value: "Hello World" } });

    const previewText = screen.getByText("Hello World");
    expect(previewText).toBeInTheDocument();
  });

  it("shows the alert box only when toggle is ON", () => {
    render(<TestPlayground />);

    const alertBoxHidden = screen.queryByText(/This alert only appears/i);
    expect(alertBoxHidden).not.toBeInTheDocument();

    const toggle = screen.getByRole("checkbox");
    fireEvent.click(toggle);

    const alertBoxVisible = screen.getByText(/This alert only appears/i);
    expect(alertBoxVisible).toBeInTheDocument();
  });
});
