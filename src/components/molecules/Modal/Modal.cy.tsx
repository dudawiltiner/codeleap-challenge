import { Modal } from "./Modal";

describe("Modal Component", () => {
  it("renders when isOpen is true", () => {
    cy.mount(
      <Modal isOpen={true} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );
    cy.get("div").should("have.class", "fixed");
    cy.get("h2").should("have.text", "Test Modal");
    cy.get("div").contains("Modal Content");
  });

  it("does not render when isOpen is false", () => {
    cy.mount(
      <Modal isOpen={false} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );
    cy.get("div.fixed").should("not.exist");
  });

  it("applies correct classes", () => {
    cy.mount(
      <Modal isOpen={true} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );
    cy.get("div.fixed").should("have.class", "bg-black");
    cy.get("div.fixed").should("have.class", "bg-opacity-50");
    cy.get("div.fixed").should("have.class", "z-50");
  });

  it("renders with custom content", () => {
    cy.mount(
      <Modal isOpen={true} title="Test Modal">
        <button>Click me</button>
        <input type="text" placeholder="Enter text" />
      </Modal>
    );
    cy.get("button").should("exist");
    cy.get("input").should("exist");
  });
});
