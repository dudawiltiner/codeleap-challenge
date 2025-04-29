# Codeleap Challenge - System Design Document

## Table of Contents

1. [General Architecture](#1-general-architecture)
2. [Main Components](#2-main-components)
3. [Data Management Strategy](#3-data-management-strategy)
4. [Technical Decisions](#4-technical-decisions)
5. [Testing Strategy](#5-testing-strategy)
6. [Support Links](#6-support-links)

## 1. General Architecture

### 1.1 Component Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                       Next.js App                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐    ┌──────────────────────────────────┐    │
│  │   Layout    │    │         State Management         │    │
│  │             │    │                                  │    │
│  │  - Header   │    │  Redux Store:                    │    │
│  │  - Content  │    │  - User State                    │    │
│  │             │    │  - Modal State                   │    │
│  │             │    │                                  │    │
│  └─────────────┘    └──────────────────────────────────┘    │
│         │                          │                        │
│         ▼                          ▼                        │
│  ┌────────────────────────────────────────────────────┐     │
│  │                    Components                      │     │
│  │                                                    │     │
│  │  ┌─────────┐     ┌──────────┐    ┌────────────┐    │     │
│  │  │ Atoms   │     │ Molecules│    │Organisms   │    │     │
│  │  │         │     │          │    │            │    │     │
│  │  │ Button  │     │ Dialog   │    │ContentEditr│    │     │
│  │  │ Input   │     │ Card     │    │            │    │     │
│  │  └─────────┘     └──────────┘    └────────────┘    │     │
│  │                                                    │     │
│  └────────────────────────────────────────────────────┘     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Data Flow

#### 1.2.1 State Management

The application uses Redux for global state management:

```typescript
// src/providers/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
});

// src/providers/redux/userSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action: PayloadAction<{ username: string }>) => {
      state.username = action.payload.username;
      state.isAuthenticated = true;
    },
  },
});

// src/providers/redux/modalSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isEditModalOpen: false,
    isDeleteModalOpen: false,
  },
  reducers: {
    openEditModal: (state) => {
      state.isEditModalOpen = true;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
    },
    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },
    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
    },
  },
});
```

#### 1.2.2 Custom Hooks

Custom hooks for reusable logic:

```typescript
// src/hooks/ai/useGenerateContent.ts
export function useGenerateContent() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateContent = async (title: string): Promise<string> => {
    // Content generation logic
  };

  return { generateContent, isGenerating, error };
}
```

## 2. Main Components

### 2.1 Atomic Structure

#### 2.1.1 Atoms

Basic reusable components:

```typescript
// src/components/ui/button.tsx
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

#### 2.1.2 Molecules

Compositions of atomic components:

```typescript
// src/components/molecules/ContentCard/ContentCard.tsx
export function ContentCard({ content }: ContentCardProps) {
  return (
    <Card>
      <CardContent>
        <Markdown>{content}</Markdown>
      </CardContent>
    </Card>
  );
}
```

## 3. Data Management Strategy

### 3.1 Data Structure

#### 3.1.1 Main Interfaces

```typescript
// src/lib/types.ts
export interface Content {
  title: string;
  content: string;
  generatedAt: string;
}
```

## 4. Technical Decisions

### 4.1 Tech Stack

#### 4.1.1 Frontend

- **Next.js 14**: React framework with Server Components and App Router
- **TypeScript**: Static typing for better safety and productivity
- **Tailwind CSS**: CSS utilities for quick and consistent styling
- **Shadcn/ui**: Reusable and accessible base components

#### 4.1.2 Code Quality

```javascript
// eslint.config.js
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "@next": nextPlugin,
    },
    rules: {
      "max-lines": ["error", { max: 100 }],
      "@typescript-eslint/naming-convention": ["error"],
    },
  },
];
```

## 5. Testing Strategy

### 5.1 Testing Framework

The project uses Cypress for integration and component testing. The test structure follows the component organization pattern:

```
src/
  components/
    atoms/
      Button/
        Button.cy.tsx
    molecules/
      SearchBar/
        SearchBar.cy.tsx
    organisms/
      PostList/
        PostList.cy.tsx
```

### 5.2 Types of Tests

#### 5.2.1 Component Tests

Each component has its own test file that verifies:

- Correct rendering
- Expected behavior
- User interactions
- Styling

Example:

```typescript
// src/components/molecules/SearchBar/SearchBar.cy.tsx
describe("SearchBar Component", () => {
  it("renders search input", () => {
    cy.mount(<SearchBar />);
    cy.get("input").should("exist");
  });
});
```

#### 5.2.2 State Tests

Tests involving Redux Store:

```typescript
// src/components/organisms/PostCard/PostCard.cy.tsx
it("shows edit buttons for author", () => {
  cy.window().then((win) => {
    win.store.dispatch({
      type: "user/setUser",
      payload: { username: "testuser" },
    });
  });
});
```

### 5.3 Test Configuration

#### 5.3.1 Dependencies

```json
{
  "devDependencies": {
    "@types/cypress": "^12.17.0",
    "@types/react": "^18.2.0",
    "@types/mocha": "^10.0.0",
    "cypress": "^12.0.0"
  }
}
```

#### 5.3.2 Cypress Configuration

```typescript
// cypress.config.ts
import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
```

### 5.4 Best Practices

1. **Isolation**: Each test should be independent and cover a specific component
2. **Mocking**: Use mocks to simulate states and APIs
3. **Coverage**: Test all possible scenarios
4. **Readability**: Use descriptive names for tests
5. **Performance**: Avoid unnecessary tests

### 5.5 Test Examples

#### 5.5.1 Form Tests

```typescript
describe("LoginForm", () => {
  it("validates empty fields", () => {
    cy.mount(<LoginForm />);
    cy.get("button").click();
    cy.get("div").should("contain", "Required field");
  });
});
```

#### 5.5.2 Modal Tests

```typescript
describe("DeletePostModal", () => {
  it("shows confirmation dialog", () => {
    cy.mount(<DeletePostModal isOpen={true} />);
    cy.get("h2").should("contain", "Delete Post");
  });
});
```

## 6. Support Links

### 6.1 Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com/)

### 6.2 Development Tools

- [ESLint](https://eslint.org/)
- [Jest Testing Framework](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
