
import React from "react";

import Members from "./Members";

export default function House({ family }) {
  return (
    <div>
      <h5>{family.name}</h5>
      <Members members={family.members} />
    </div>
  );
}
