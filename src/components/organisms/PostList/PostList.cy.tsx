import { store } from "@/providers/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PostList } from "./PostList";

describe("PostList Component", () => {
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
          <PostList />
        </Provider>
      </QueryClientProvider>
    );
  });

  it("renders search bar", () => {
    cy.get("input").should("exist");
    cy.get("button").contains("Search").should("exist");
  });

  it("renders loading state", () => {
    cy.get("div").should("contain", "Loading posts...");
  });
});
