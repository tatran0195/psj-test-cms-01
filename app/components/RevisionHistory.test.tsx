import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RevisionHistory } from "./RevisionHistory";
import React from "react";

describe("RevisionHistory Component", () => {
  const mockHistory = [
    { commitId: "abcdef12345", message: "Initial commit", author: "tatran", created_at: new Date().toISOString() },
    { commitId: "9876543210a", message: "Fixed spelling", author: "reviewer", created_at: new Date(Date.now() - 3600000).toISOString() }
  ];

  it("renders the correct number of history items", () => {
    render(<RevisionHistory history={mockHistory} />);
    const items = screen.getAllByTestId("revision-item");
    expect(items.length).toBe(2);
  });

  it("displays commit details correctly", () => {
    render(<RevisionHistory history={mockHistory} />);
    expect(screen.getByText("Initial commit")).toBeInTheDocument();
    expect(screen.getByText("tatran")).toBeInTheDocument();
    // Verify short commit hash is rendered
    expect(screen.getByText("abcdef1")).toBeInTheDocument();
    expect(screen.getByText("Fixed spelling")).toBeInTheDocument();
  });
});