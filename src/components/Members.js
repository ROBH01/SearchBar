
import React from "react";

export default function Members({ members }) {
  return (
    <ul>
      {members.map((el, i) => (
        <li key={i}>{el.name}</li>
      ))}
    </ul>
  );
}
