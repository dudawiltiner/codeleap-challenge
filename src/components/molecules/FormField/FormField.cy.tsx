import { Input } from "@/components/atoms/Input/Input";
import { Textarea } from "@/components/atoms/Textarea/Textarea";
import { FormField } from "./FormField";

describe("FormField Component", () => {
  it("renders with label and input", () => {
    cy.mount(
      <FormField label="Username" htmlFor="username">
        <Input id="username" />
      </FormField>
    );
    cy.get("label").should("have.text", "Username");
    cy.get("label").should("have.attr", "for", "username");
    cy.get("input").should("have.attr", "id", "username");
  });

  it("renders with label and textarea", () => {
    cy.mount(
      <FormField label="Description" htmlFor="description">
        <Textarea id="description" />
      </FormField>
    );
    cy.get("label").should("have.text", "Description");
    cy.get("label").should("have.attr", "for", "description");
    cy.get("textarea").should("have.attr", "id", "description");
  });

  it("applies correct wrapper class", () => {
    cy.mount(
      <FormField label="Test" htmlFor="test">
        <Input id="test" />
      </FormField>
    );
    cy.get("div").should("have.class", "mb-4");
  });

  it("renders with required props only", () => {
    cy.mount(
      <FormField label="Required" htmlFor="required">
        <Input id="required" />
      </FormField>
    );
    cy.get("label").should("exist");
    cy.get("input").should("exist");
  });

  it("preserves child component props", () => {
    cy.mount(
      <FormField label="Test" htmlFor="test">
        <Input id="test" placeholder="Enter value" className="custom-input" />
      </FormField>
    );
    cy.get("input").should("have.attr", "placeholder", "Enter value");
    cy.get("input").should("have.class", "custom-input");
  });
});
