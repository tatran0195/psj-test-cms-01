import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MarkdownViewer } from "./MarkdownViewer";
import React from "react";

describe("MarkdownViewer Component", () => {
  it("renders html content securely and generates TOC", () => {
    const mockHtml = `<h2 id="section-1">Section 1</h2><p>Content</p>`;
    const mockHeadings = [{ level: 2, id: "section-1", text: "Section 1" }];

    render(<MarkdownViewer html={mockHtml} headings={mockHeadings} />);
    
    // Check if content rendered
    expect(screen.getByText("Content")).toBeInTheDocument();
    
    // Check if TOC rendered
    const tocLink = screen.getByRole("link", { name: "Section 1" });
    expect(tocLink).toBeInTheDocument();
    expect(tocLink).toHaveAttribute("href", "#section-1");
  });
});