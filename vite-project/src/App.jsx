"use strict";

import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [value, setvalue] = useState("");
  const [items, setitems] = useState([]);

  const handleChanges = () => {
    setvalue(value.trim());
    setitems([...items, value]);
    setvalue("");
  };

  const handleDelete = (indexToDelete) => {
    setitems(items.filter((_, index) => index !== indexToDelete));
  };

  useEffect(() => {
    console.log("Items updated:", items);
  }, [items]);

  return (
    <div style={{ display: "flex", gap: "250px" }}>
      <div className="Input Side" style={{ gap: "250px" }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        ></input>
        <button onClick={handleChanges}>Submit</button>
      </div>
      <div className="Output Side">
        {items.map((item, index) => (
          <div key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>X</button>
          </div>
        ))}
      </div>
      <button style={{ gap: "250px" }} onClick={() => setitems([])}>
        Clear All
      </button>
    </div>
  );
}
