import { SearchBar } from "./SearchBar";

describe("SearchBar Component", () => {
  let mockOnSearch: any;
  let mockOnDateFilterChange: any;

  beforeEach(() => {
    mockOnSearch = cy.stub().as("onSearch");
    mockOnDateFilterChange = cy.stub().as("onDateFilterChange");
  });

  it("renders search input", () => {
    cy.mount(
      <SearchBar
        onSearch={mockOnSearch}
        onDateFilterChange={mockOnDateFilterChange}
      />
    );
    cy.get("input").should("exist");
    cy.get("input").should("have.attr", "placeholder", "Search by title...");
  });

  it("applies correct styling", () => {
    cy.mount(
      <SearchBar
        onSearch={mockOnSearch}
        onDateFilterChange={mockOnDateFilterChange}
      />
    );
    cy.get("div").should("have.class", "bg-white");
    cy.get("div").should("have.class", "rounded-lg");
    cy.get("div").should("have.class", "shadow-sm");
    cy.get("div").should("have.class", "border");
  });

  it("handles search input changes", () => {
    cy.mount(
      <SearchBar
        onSearch={mockOnSearch}
        onDateFilterChange={mockOnDateFilterChange}
      />
    );
    cy.get("input").type("test search");
    cy.get("input").should("have.value", "test search");
  });

  it("calls onSearch when search button is clicked", () => {
    cy.mount(
      <SearchBar
        onSearch={mockOnSearch}
        onDateFilterChange={mockOnDateFilterChange}
      />
    );
    cy.get("input").type("test search");
    cy.get("button").contains("Search").click();
    cy.get("@onSearch").should("have.been.calledWith", "test search");
  });

  it("shows date filter when date filter button is clicked", () => {
    cy.mount(
      <SearchBar
        onSearch={mockOnSearch}
        onDateFilterChange={mockOnDateFilterChange}
      />
    );
    cy.get("button").contains("Date Filter").click();
    cy.get("div").contains("From Date").should("exist");
    cy.get("div").contains("To Date").should("exist");
  });
});
