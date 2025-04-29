import { Post } from "@/lib/types/post.types";
import { store } from "@/providers/redux/store";
import { Provider } from "react-redux";
import { PostHeader } from "./PostHeader";

describe("PostHeader Component", () => {
  const mockPost: Post = {
    id: 1,
    title: "Test Post",
    username: "testuser",
    content: "Test content",
    created_datetime: new Date().toISOString(),
  };

  const mockUser = {
    username: "testuser",
    isAuthenticated: true,
  };

  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <PostHeader post={mockPost} />
      </Provider>
    );
  });

  it("renders post title", () => {
    cy.get("h3").should("have.text", "Test Post");
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

  it("applies correct styling", () => {
    cy.get("div").should("have.class", "bg-[#7695ec]");
    cy.get("div").should("have.class", "text-white");
    cy.get("div").should("have.class", "rounded-t-lg");
  });
});
