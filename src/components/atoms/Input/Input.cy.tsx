import { Input } from "./Input";

describe("Input Component", () => {
  it("renders with default props", () => {
    cy.mount(<Input placeholder="Enter text" />);
    cy.get("input").should("have.attr", "placeholder", "Enter text");
    cy.get("input").should("have.class", "w-full");
  });

  it("handles fullWidth prop", () => {
    cy.mount(<Input fullWidth={false} />);
    cy.get("input").should("not.have.class", "w-full");
  });

  it("handles value changes", () => {
    cy.mount(<Input />);
    cy.get("input").type("Hello, World!");
    cy.get("input").should("have.value", "Hello, World!");
  });

  it("applies custom className", () => {
    cy.mount(<Input className="custom-class" />);
    cy.get("input").should("have.class", "custom-class");
  });

  it("handles disabled state", () => {
    cy.mount(<Input disabled />);
    cy.get("input").should("be.disabled");
  });
});
