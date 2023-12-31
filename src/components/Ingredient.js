import React from "react";

export default function Ingredient({ amount, measurement, name }) {
  return (
    <li className="instructions">
      {amount} {measurement} {name}
    </li>
  );
}
