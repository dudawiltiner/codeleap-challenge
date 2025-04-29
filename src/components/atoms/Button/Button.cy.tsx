import { Button } from "./Button";

describe("Button Component", () => {
  it("renders with default props", () => {
    cy.mount(<Button>Click me</Button>);
    cy.get("button").should("have.text", "Click me");
    cy.get("button").should("have.class", "bg-[#7695ec]");
  });

  it("renders with different variants", () => {
    cy.mount(
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
      </div>
    );

    cy.get("button").eq(0).should("have.class", "bg-[#7695ec]");
    cy.get("button").eq(1).should("have.class", "bg-white");
    cy.get("button").eq(2).should("have.class", "bg-[#ff5151]");
    cy.get("button").eq(3).should("have.class", "bg-[#47b960]");
  });

  it("handles fullWidth prop", () => {
    cy.mount(<Button fullWidth>Full Width</Button>);
    cy.get("button").should("have.class", "w-full");
  });

  it("handles disabled state", () => {
    cy.mount(<Button disabled>Disabled</Button>);
    cy.get("button").should("be.disabled");
    cy.get("button").should("have.class", "opacity-50");
  });

  it("handles click events", () => {
    const onClick = cy.stub();
    cy.mount(<Button onClick={onClick}>Click me</Button>);
    cy.get("button").click();
    cy.wrap(onClick).should("have.been.calledOnce");
  });
});
