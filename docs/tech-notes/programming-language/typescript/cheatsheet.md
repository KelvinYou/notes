# TypeScript: Patterns I Actually Use

Not a complete reference — just the parts I reach for. For everything else, ask AI.

---

## The Stuff I Forget

### Type extraction from objects

```ts
interface Building {
  room: { door: string; walls: string[] };
}
type Walls = Building['room']['walls']; // string[]
```

### keyof

```ts
type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"
```

### Conditional types with inference

```ts
type GetReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never;
type Num = GetReturnType<() => number>; // number
```

### Template literal types

```ts
type SpaceChar = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${SpaceChar}${infer Rest}` ? TrimLeft<Rest> : S;
```

### `as const` for literal types

```ts
const point = { x: 4, y: 2 } as const;
// { readonly x: 4, readonly y: 2 } — values are literal, not widened
```

### Union narrowing shorthand

```ts
type Name = string | string[];
```

---

## Patterns I Use Daily

### Optional chaining in types

```ts
interface User {
  name: string;
  age?: number;        // optional
  readonly id: string; // immutable
}
```

### Function type in interface

```ts
interface Handler {
  onSubmit: (data: FormData) => void;
}
```

### Generic constraint

```ts
function getFirst<T extends { id: string }>(items: T[]): T {
  return items[0];
}
```

### Intersection for extending without class

```ts
type WithTimestamps<T> = T & { createdAt: Date; updatedAt: Date };
type UserRow = WithTimestamps<User>;
```

---

## My Rules

- Default to `type` unless I need declaration merging or `extends` (then `interface`)
- Avoid `any`. Use `unknown` + narrowing instead.
- `as` casting is a smell — if I'm doing it a lot, something is wrong upstream
- Prefer `readonly` on data that shouldn't mutate — catches bugs early
