import { Label } from "./Label";

describe("Label Component", () => {
  it("renders with default props", () => {
    cy.mount(<Label>Username</Label>);
    cy.get("label").should("have.text", "Username");
    cy.get("label").should("have.class", "text-sm");
    cy.get("label").should("have.class", "font-medium");
  });

  it("applies custom className", () => {
    cy.mount(<Label className="custom-class">Custom Label</Label>);
    cy.get("label").should("have.class", "custom-class");
  });

  it("renders with htmlFor attribute", () => {
    cy.mount(<Label htmlFor="username">Username</Label>);
    cy.get("label").should("have.attr", "for", "username");
  });

  it("renders with additional props", () => {
    cy.mount(<Label data-testid="test-label">Test Label</Label>);
    cy.get("label").should("have.attr", "data-testid", "test-label");
  });
});
