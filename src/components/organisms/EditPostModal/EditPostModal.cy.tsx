import { Post } from "@/lib/types/post.types";
import { store } from "@/providers/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { EditPostModal } from "./EditPostModal";

describe("EditPostModal Component", () => {
  const mockPost: Post = {
    id: 1,
    title: "Test Post",
    username: "testuser",
    content: "Test content",
    created_datetime: new Date().toISOString(),
  };

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
          <EditPostModal />
        </Provider>
      </QueryClientProvider>
    );
  });

  it("não renderiza o modal quando fechado", () => {
    cy.get("h2").should("not.exist");
  });
});
