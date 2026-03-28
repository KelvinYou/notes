# React State Management

My decision process for picking a state solution. The answer is almost always "use less state, not more libraries."

---

## Decision Flowchart

```mermaid
flowchart TD
    Q1{Is it local to\none component?} -->|Yes| US[useState]
    Q1 -->|No| Q2{Complex update\nlogic / many sub-states?}
    Q2 -->|Yes| UR[useReducer]
    Q2 -->|No| Q3{Shared across\nmany components?}
    Q3 -->|No| PROP[Props / prop drilling\n(it's fine for 1-2 levels)]
    Q3 -->|Yes| Q4{High-frequency\nupdates / performance\ncritical?}
    Q4 -->|No| CTX[Context API]
    Q4 -->|Yes| ZUS[Zustand]
    Q4 -->|Complex app\nwith many devs| REDUX[Redux Toolkit]
```

---

## My Rule of Thumb

**Start local, lift only when needed.** Most state never needs to leave the component.

| Tool | When I reach for it |
|------|---------------------|
| `useState` | Single value, simple toggle, form field |
| `useReducer` | Multiple related fields, state machine-like logic |
| Context API | Theme, locale, auth user — slow-changing, widely consumed |
| Zustand | Cross-component state that updates frequently (e.g. cart, filters, UI state) |
| Redux Toolkit | Large team, complex domain model, needs devtools + time-travel debugging |

---

## Context API: the re-render trap

Context re-renders every consumer when the value changes — even if they only use a small part of it.

```tsx
// Bad: single context for everything
const AppContext = createContext({ user, cart, theme, filters });

// Better: split by update frequency
const AuthContext   = createContext(user);   // rarely changes
const CartContext   = createContext(cart);   // changes often → consider Zustand instead
const ThemeContext  = createContext(theme);  // rarely changes
```

**Rule:** Context is for state that changes rarely and is consumed widely (auth, theme, locale). If it changes on user interaction, use Zustand.

---

## Zustand: my default for shared client state

```ts
import { create } from 'zustand';

interface CartStore {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
}

const useCartStore = create<CartStore>((set) => ({
  items: [],
  add: (item) => set((s) => ({ items: [...s.items, item] })),
  remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
}));
```

Components only re-render when the specific slice they subscribe to changes. No providers, no prop drilling.

---

## Server state is different

For async data from APIs, don't use any of the above — use a data-fetching library:
- **TanStack Query** (React Query) — my default for REST
- **Apollo Client** — if the API is GraphQL

These handle caching, background refetch, loading/error states. Replacing them with `useEffect + useState` is a mistake I've made and won't repeat.

---

## Reference

- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [React docs — Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
- [TanStack Query](https://tanstack.com/query)
