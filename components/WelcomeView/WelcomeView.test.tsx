import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import WelcomeView from "./WelcomeView";

describe("WelcomeView Component", () => {
  it("renders welcome message correctly", () => {
    render(<WelcomeView onDone={() => {}} />);
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Your booking process is complete. Welcome to your new home!"
      )
    ).toBeInTheDocument();
  });

  it("renders success SVG", () => {
    const { container } = render(<WelcomeView onDone={() => {}} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("calls onDone when done button is clicked", () => {
    const mockOnDone = jest.fn();
    render(<WelcomeView onDone={mockOnDone} />);

    const doneButton = screen.getByRole("button", { name: "Done" });
    fireEvent.click(doneButton);

    expect(mockOnDone).toHaveBeenCalledTimes(1);
  });

  it("initializes the confetti container", () => {
    render(<WelcomeView onDone={() => {}} />);
    const confettiContainer = document.querySelector("#confetti-container");
    expect(confettiContainer).toBeInTheDocument();
  });

  it("generates confetti within the container", async () => {
    const { container } = render(<WelcomeView onDone={() => {}} />);
    setTimeout(() => {
      const confettiContainer = container.querySelector("#confetti-container");
      expect(confettiContainer).toBeInTheDocument();
      const confettiElements =
        confettiContainer?.getElementsByClassName("confetti");
      expect(confettiElements?.length).toBeGreaterThan(0);
    }, 100);
  });
});
