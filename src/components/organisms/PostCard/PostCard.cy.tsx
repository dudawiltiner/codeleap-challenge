import { Post } from "@/lib/types/post.types";
import { store } from "@/providers/redux/store";
import { Provider } from "react-redux";
import { PostCard } from "./PostCard";

describe("PostCard Component", () => {
  const mockPost: Post = {
    id: 1,
    title: "Test Post",
    username: "testuser",
    content: "Test content",
    created_datetime: new Date().toISOString(),
  };

  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <PostCard post={mockPost} />
      </Provider>
    );
  });

  it("renders post title", () => {
    cy.get("h3").should("have.text", "Test Post");
  });

  it("renders username", () => {
    cy.get("span").contains("@testuser").should("exist");
  });

  it("renders post date", () => {
    cy.get("span").contains("ago").should("exist");
  });

  it("does not show edit and delete buttons for non-author", () => {
    cy.window().then((win) => {
      // @ts-ignore - Cypress window type
      win.store = store;
      // @ts-ignore - Cypress window type
      win.store.dispatch({
        type: "user/setUser",
        payload: { username: "otheruser", isAuthenticated: true },
      });
    });

    cy.get("button").should("not.exist");
  });
});
