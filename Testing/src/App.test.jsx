import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

describe("App Component", () => {
  it("Specific Landing Page To Be Loaded", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /Vite \+ React/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("increments count when the counter button is clicked", async () => {
    render(<App />); //fake test to check landing page

    const counterButton = screen.getByRole("button", { name: /count is 0/i });

    expect(counterButton).toBeInTheDocument(); //check if buttons are present

    fireEvent.click(counterButton); //simulate click
    const updatedButton = await screen.findByRole("button", {
      name: /count is 1/i,
    });

    expect(updatedButton).toBeInTheDocument();
  });
});
