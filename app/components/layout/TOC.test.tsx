import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TOC } from "./TOC";
import React from "react";

describe("TOC Component", () => {
  it("renders the correct heading links", () => {
    const mockHeadings = [
      { level: 2, id: "introduction", text: "Introduction" },
      { level: 3, id: "setup", text: "Setup" }
    ];
    render(<TOC headings={mockHeadings} />);
    
    expect(screen.getByText("On this page")).toBeInTheDocument();
    
    const introLink = screen.getByRole("link", { name: "Introduction" });
    expect(introLink).toBeInTheDocument();
    expect(introLink).toHaveAttribute("href", "#introduction");
    
    const setupLink = screen.getByRole("link", { name: "Setup" });
    expect(setupLink).toBeInTheDocument();
    expect(setupLink).toHaveAttribute("href", "#setup");
  });

  it("renders a fallback message when no headings are present", () => {
    render(<TOC headings={[]} />);
    expect(screen.getByText("No headings found.")).toBeInTheDocument();
  });
});