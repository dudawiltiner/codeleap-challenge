import { openDeleteModal } from "@/providers/redux/modalSlice";
import { store } from "@/providers/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { DeletePostModal } from "./DeletePostModal";

describe("DeletePostModal Component", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });

  beforeEach(() => {
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <DeletePostModal />
        </Provider>
      </QueryClientProvider>
    );
  });

  it("não renderiza o modal quando fechado", () => {
    cy.get("h2").should("not.exist");
  });

  it("renderiza o modal quando aberto", () => {
    store.dispatch(openDeleteModal(1));
    cy.get("h2").should(
      "contain",
      "Are you sure you want to delete this item?"
    );
  });

  it("renderiza os botões de cancelar e deletar", () => {
    store.dispatch(openDeleteModal(1));
    cy.get("button").should("have.length", 2);
    cy.get("button").first().should("contain", "Cancel");
    cy.get("button").last().should("contain", "Delete");
  });

  it("fecha o modal ao clicar no botão de cancelar", () => {
    store.dispatch(openDeleteModal(1));
    cy.get("button").contains("Cancel").click();
    cy.get("h2").should("not.exist");
  });

  it("fecha o modal ao clicar no botão de deletar", () => {
    store.dispatch(openDeleteModal(1));
    cy.get("button").contains("Delete").click();
    cy.get("h2").should("not.exist");
  });
});
