import React, { useMemo, useRef, useState } from "react";
import styles from "./styles.module.css";

export interface FoodRow {
  id: string;
  name: string;
  category: string;
  protein?: number;
  carbs?: number;
  fat?: number;
  kcal?: number;
  kcalComputed?: boolean;
  gi?: number | null;
  price?: string;
  priceValue?: number | null;
}

interface Props {
  foods: FoodRow[];
  categories: string[];
}

type ColumnKey = "category" | "protein" | "carbs" | "fat" | "kcal" | "gi" | "price";

const COLUMNS: { key: ColumnKey; label: string; sortLabel: string }[] = [
  { key: "category", label: "Category", sortLabel: "Category" },
  { key: "protein", label: "Protein", sortLabel: "Protein" },
  { key: "carbs", label: "Carbs", sortLabel: "Carbs" },
  { key: "fat", label: "Fat", sortLabel: "Fat" },
  { key: "kcal", label: "Calories (kcal)", sortLabel: "Calories" },
  { key: "gi", label: "GI", sortLabel: "GI" },
  { key: "price", label: "Price", sortLabel: "Price" },
];

type SortKey = "name" | ColumnKey;
type SortDir = "asc" | "desc";

function compareValues(a: unknown, b: unknown, dir: SortDir): number {
  const mul = dir === "asc" ? 1 : -1;
  const aNull = a === undefined || a === null;
  const bNull = b === undefined || b === null;
  if (aNull && bNull) return 0;
  if (aNull) return 1; // missing values sort last regardless of direction
  if (bNull) return -1;
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b) * mul;
  }
  return ((a as number) - (b as number)) * mul;
}

// Live filter + sort + column visibility for the generated foods catalog.
// Data is produced at build time by scripts/generate-nutrition-docs.mjs;
// this component only filters/sorts/hides columns of an already-static array.
export default function FoodsExplorer({ foods, categories }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [hidden, setHidden] = useState<Set<ColumnKey>>(new Set());
  const [columnsOpen, setColumnsOpen] = useState(false);
  const columnsRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rows = foods.filter((f) => {
      const matchesQuery = q === "" || f.name.toLowerCase().includes(q);
      const matchesCategory = category === "all" || f.category === category;
      return matchesQuery && matchesCategory;
    });
    const sortField = sortKey === "price" ? "priceValue" : sortKey;
    return rows.sort((a, b) => compareValues((a as any)[sortField], (b as any)[sortField], sortDir));
  }, [foods, query, category, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function toggleColumn(key: ColumnKey) {
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function sortIndicator(key: SortKey) {
    if (sortKey !== key) return "";
    return sortDir === "asc" ? " ▲" : " ▼";
  }

  const visibleColumns = COLUMNS.filter((c) => !hidden.has(c.key));

  return (
    <div>
      <div className={styles.controls}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search foods (e.g. chicken, milk, oats)…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search foods"
        />
        <div className={styles.toolbarRow}>
          <div className={styles.categoryRow}>
            <button
              className={category === "all" ? styles.chipActive : styles.chip}
              onClick={() => setCategory("all")}
              type="button"
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                className={category === c ? styles.chipActive : styles.chip}
                onClick={() => setCategory(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>

          <div className={styles.columnsMenu} ref={columnsRef}>
            <button
              className={styles.chip}
              type="button"
              onClick={() => setColumnsOpen((v) => !v)}
              aria-expanded={columnsOpen}
            >
              Columns ▾
            </button>
            {columnsOpen && (
              <div className={styles.columnsDropdown}>
                {COLUMNS.map((c) => (
                  <label key={c.key} className={styles.columnOption}>
                    <input
                      type="checkbox"
                      checked={!hidden.has(c.key)}
                      onChange={() => toggleColumn(c.key)}
                    />
                    {c.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <p className={styles.count}>
        {filtered.length} of {foods.length} foods
      </p>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No matches — try a different search term.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <button className={styles.sortButton} type="button" onClick={() => toggleSort("name")}>
                  Food{sortIndicator("name")}
                </button>
              </th>
              {visibleColumns.map((c) => (
                <th key={c.key}>
                  <button className={styles.sortButton} type="button" onClick={() => toggleSort(c.key)}>
                    {c.sortLabel}
                    {sortIndicator(c.key)}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((f) => (
              <tr key={f.id}>
                <td>{f.name}</td>
                {visibleColumns.map((c) => (
                  <td key={c.key}>
                    {c.key === "category" && f.category}
                    {c.key === "protein" && (f.protein != null ? <strong>{f.protein}g</strong> : "—")}
                    {c.key === "carbs" && (f.carbs != null ? `${f.carbs}g` : "—")}
                    {c.key === "fat" && (f.fat != null ? `${f.fat}g` : "—")}
                    {c.key === "kcal" &&
                      (f.kcal != null ? `${f.kcalComputed ? "≈" : ""}${f.kcal}` : "—")}
                    {c.key === "gi" && (f.gi != null ? f.gi : "—")}
                    {c.key === "price" && (f.price ?? "—")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
