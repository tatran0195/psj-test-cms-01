import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "./input";
import React from "react";

describe("Input Component", () => {
  it("renders correctly with placeholder", () => {
    render(<Input placeholder="Search docs..." />);
    const input = screen.getByPlaceholderText("Search docs...");
    expect(input).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
  });
});