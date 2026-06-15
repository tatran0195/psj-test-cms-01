import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DocHeader } from "./DocHeader";
import React from "react";
import { MemoryRouter } from "react-router";

describe("DocHeader Component", () => {
  it("renders breadcrumbs, title and description correctly", () => {
    render(
      <MemoryRouter>
        <DocHeader 
          path="general/setup.md" 
          branch="main" 
          title="Setup Guide" 
          description="Learn how to setup the project."
          isRelease={false} 
          showHistory={false} 
          setShowHistory={vi.fn()} 
        />
      </MemoryRouter>
    );
    
    // Breadcrumbs
    expect(screen.getByText("general")).toBeInTheDocument();
    expect(screen.getByText("setup.md")).toBeInTheDocument();
    
    // Content
    expect(screen.getByText("Setup Guide")).toBeInTheDocument();
    expect(screen.getByText("Learn how to setup the project.")).toBeInTheDocument();
  });

  it("hides action buttons when in release mode", () => {
    render(
      <MemoryRouter>
        <DocHeader 
          path="test.md" 
          branch="v1" 
          title="Title" 
          isRelease={true} 
          showHistory={false} 
          setShowHistory={vi.fn()} 
        />
      </MemoryRouter>
    );
    
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("History")).not.toBeInTheDocument();
  });
});