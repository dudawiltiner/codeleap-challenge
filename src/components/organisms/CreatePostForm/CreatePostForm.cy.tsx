import { store } from "@/providers/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { CreatePostForm } from "./CreatePostForm";

describe("CreatePostForm Component", () => {
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
          <CreatePostForm />
        </Provider>
      </QueryClientProvider>
    );
  });

  it("renderiza o título do formulário", () => {
    cy.get("h2.text-xl.font-bold.mb-6.text-gray-800").should(
      "have.text",
      "What's on your mind?"
    );
  });

  it("renderiza o input de título", () => {
    cy.get("input").first().should("have.attr", "placeholder", "Hello world");
  });

  it("renderiza o editor de conteúdo", () => {
    cy.get("textarea").should(
      "have.attr",
      "placeholder",
      "Write your content here..."
    );
  });

  it("renderiza o botão de gerar conteúdo", () => {
    cy.get("button").contains("Generate").should("exist");
  });
});
