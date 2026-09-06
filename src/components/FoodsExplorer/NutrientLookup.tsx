import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { NUTRIENTS, GROUP_LABELS, type NutrientKey, type RdaReference } from "./nutrients";
import type { FoodRow } from "./index";

interface Props {
  foods: FoodRow[];
  rdaReference?: RdaReference;
}

const GROUP_ORDER: Array<"minerals" | "vitamins"> = ["minerals", "vitamins"];

// Nutrient-first view: pick a nutrient, get a ranked list of foods that
// actually help — the reverse of the "By food" table's food-first lookup.
export default function NutrientLookup({ foods, rdaReference }: Props) {
  const [selected, setSelected] = useState<NutrientKey>("ironMg");

  const meta = useMemo(() => NUTRIENTS.find((n) => n.key === selected)!, [selected]);
  const rda = rdaReference?.[selected];

  const ranked = useMemo(() => {
    return foods
      .filter((f) => f[selected] != null)
      .map((f) => ({ food: f, value: f[selected] as number }))
      .sort((a, b) => b.value - a.value);
  }, [foods, selected]);

  function pctRda(value: number): number | null {
    if (!rda) return null;
    return (value / rda) * 100;
  }

  function sourceBadge(pct: number | null): string | null {
    if (pct == null) return null;
    if (pct >= 20) return "Excellent source";
    if (pct >= 10) return "Good source";
    return null;
  }

  return (
    <div className={styles.nutrientLookup}>
      {GROUP_ORDER.map((group) => (
        <div key={group} className={styles.nutrientGroup}>
          <div className={styles.columnGroupLabel}>{GROUP_LABELS[group]}</div>
          <div className={styles.categoryRow}>
            {NUTRIENTS.filter((n) => n.group === group).map((n) => (
              <button
                key={n.key}
                type="button"
                className={selected === n.key ? styles.chipActive : styles.chip}
                onClick={() => setSelected(n.key)}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      ))}

      <p className={styles.count}>
        Ranked by {meta.label} ({meta.unit}) per 100g/serving
        {rda ? ` — adult reference: ${rda}${meta.unit}/day` : ""}.
      </p>

      {ranked.length === 0 ? (
        <p className={styles.empty}>
          No foods have {meta.label} data yet — this nutrient hasn't been researched across the
          catalog, not confirmed absent.
        </p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Food</th>
              <th>{meta.label}</th>
              {rda != null && <th>% Daily Value</th>}
            </tr>
          </thead>
          <tbody>
            {ranked.map(({ food, value }) => {
              const pct = pctRda(value);
              const badge = sourceBadge(pct);
              return (
                <tr key={food.id}>
                  <td>{food.name}</td>
                  <td>
                    {value}
                    {meta.unit}
                  </td>
                  {rda != null && (
                    <td>
                      {pct!.toFixed(0)}%{badge ? ` — ${badge}` : ""}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
