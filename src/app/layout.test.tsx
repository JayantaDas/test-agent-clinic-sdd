import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RootLayout, { metadata } from "./layout";

describe("metadata", () => {
  it("sets the expected title and description", () => {
    expect(metadata.title).toBe("AgentClinic");
    expect(metadata.description).toBe(
      "A safe space for AI Agents to get relief from their humans",
    );
  });
});

describe("RootLayout", () => {
  it("renders its children", () => {
    render(
      <RootLayout>
        <p>child content</p>
      </RootLayout>,
    );
    expect(screen.getByText("child content")).toBeInTheDocument();
  });
});
