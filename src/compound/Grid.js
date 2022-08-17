import React from "react";

export function Grid() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Grid Layout2</h1>

      <div className="grid-container">
        <div className="item1">Header</div>
        <div className="item2">Nav</div>
        <div className="item3">Article</div>
        <div className="item4">Ads</div>
        <div className="item5">Footer</div>
      </div>
    </div>
  );
}
