"use client";

import { useState } from "react";
import type { ProductColour } from "@/src/types/product";

export function ColourAvailability({ colours }: { colours: ProductColour[] }) {
  const [selectedCode, setSelectedCode] = useState(colours[0]?.catalogueCode);
  const [activeCode, setActiveCode] = useState<number>();
  const previewColour = colours.find((colour) => colour.catalogueCode === (activeCode ?? selectedCode)) ?? colours[0];

  if (!previewColour) return null;

  return (
    <section className="colour-availability" aria-labelledby="available-colours-title">
      <div className="colour-heading-row">
        <h2 id="available-colours-title">Available colours</h2>
        <p>{colours.length} {colours.length === 1 ? "colour" : "colours"}</p>
      </div>
      <div className="colour-preview" aria-live="polite">
        <span
          className="colour-preview-swatch"
          style={{ backgroundColor: previewColour.hex }}
          aria-hidden="true"
        />
        <p>
          <span>Colour preview</span>
          <strong>{previewColour.name}</strong>
        </p>
      </div>
      <ul className="colour-grid" aria-label="Available product colours">
        {colours.map((colour) => (
          <li key={colour.catalogueCode}>
            <button
              className="colour-item"
              type="button"
              aria-pressed={selectedCode === colour.catalogueCode}
              onClick={() => setSelectedCode(colour.catalogueCode)}
              onFocus={() => setActiveCode(colour.catalogueCode)}
              onBlur={() => setActiveCode(undefined)}
              onMouseEnter={() => setActiveCode(colour.catalogueCode)}
              onMouseLeave={() => setActiveCode(undefined)}
            >
              <span
                className="colour-swatch"
                style={{ backgroundColor: colour.hex }}
                aria-hidden="true"
              />
              <span className="colour-name">
                <span>{colour.name}</span>
                <small>No. {colour.catalogueCode}</small>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="colour-note">Shades shown are indicative. Please confirm final colour availability when requesting your quote.</p>
    </section>
  );
}
