import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

type ButtonType = "next" | "previous" | "cancel" | "submit" | "done";

describe("Button Component", () => {
  const mockOnClick = jest.fn();

  it.each<[ButtonType]>([
    ["next"],
    ["previous"],
    ["cancel"],
    ["submit"],
    ["done"],
  ])("renders the %s button correctly", (type) => {
    const buttonTextMap: { [key in ButtonType]: string } = {
      next: "Next",
      previous: "Previous",
      cancel: "Cancel",
      submit: "Submit",
      done: "Done",
    };

    const buttonText = buttonTextMap[type];

    render(<Button type={type} onClick={mockOnClick} />);
    const button = screen.getByRole("button", { name: buttonText });
    expect(button).toHaveTextContent(buttonText);
    expect(button).toHaveClass(`${type}-button`);
  });

  it("calls onClick prop when clicked", () => {
    render(<Button type="submit" onClick={mockOnClick} />);
    const button = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button type="cancel" onClick={mockOnClick} disabled />);
    const button = screen.getByRole("button", { name: "Cancel" });
    expect(button).toBeDisabled();
  });
});
