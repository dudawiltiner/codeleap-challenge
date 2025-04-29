import { Textarea } from "./Textarea";

describe("Textarea Component", () => {
  it("renders with default props", () => {
    cy.mount(<Textarea placeholder="Enter text" />);
    cy.get("textarea").should("have.attr", "placeholder", "Enter text");
    cy.get("textarea").should("have.class", "w-full");
    cy.get("textarea").should("have.class", "min-h-[120px]");
  });

  it("handles fullWidth prop", () => {
    cy.mount(<Textarea fullWidth={false} />);
    cy.get("textarea").should("not.have.class", "w-full");
  });

  it("handles value changes", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Textarea onChange={onChangeSpy} />);
    cy.get("textarea").type("Hello, World!");
    cy.get("textarea").should("have.value", "Hello, World!");
    cy.get("@onChangeSpy").should("have.been.called");
  });

  it("applies custom className", () => {
    cy.mount(<Textarea className="custom-class" />);
    cy.get("textarea").should("have.class", "custom-class");
  });

  it("handles disabled state", () => {
    cy.mount(<Textarea disabled />);
    cy.get("textarea").should("be.disabled");
  });

  it("applies default styles", () => {
    cy.mount(<Textarea />);
    cy.get("textarea").should("have.class", "border");
    cy.get("textarea").should("have.class", "border-[#cccccc]");
    cy.get("textarea").should("have.class", "rounded-md");
    cy.get("textarea").should("have.class", "px-3");
    cy.get("textarea").should("have.class", "py-2");
    cy.get("textarea").should("have.class", "text-sm");
    cy.get("textarea").should("have.class", "min-h-[120px]");
    cy.get("textarea").should("have.class", "resize-none");
    cy.get("textarea").should("have.class", "font-mono");
  });
});
