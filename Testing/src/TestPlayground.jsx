import { useState } from "react";
import "./TestPlayground.css";

export default function TestPlayground() {
  const [inputText, setInputText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate a 2-second loading
  };

  return (
    <div className="playground-container">
      <h1>🛠️ UI Test Lab</h1>
      <p>Manual testing environment for UI components.</p>

      {/* SECTION 1: BUTTONS */}
      <div className="test-section">
        <h2>1. Button States</h2>
        <div className="row">
          <button>Standard Button</button>

          <button className="secondary">Secondary</button>

          <button disabled>Disabled Button</button>

          <button onClick={handleLoadClick} disabled={loading}>
            {loading ? "Processing..." : "Click to Load (2s)"}
          </button>
        </div>
      </div>

      {/* SECTION 2: INPUTS */}
      <div className="test-section">
        <h2>2. Data Entry</h2>
        <div className="column">
          <input
            type="text"
            placeholder="Type something here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <p className="preview-text">
            Live Preview: <strong>{inputText || "(waiting for input)"}</strong>
          </p>
        </div>
      </div>

      {/* SECTION 3: TOGGLES & INTERACTION */}
      <div className="test-section">
        <h2>3. Toggles & Logic</h2>
        <div className="row">
          <label className="toggle-wrapper">
            <input
              type="checkbox"
              checked={toggle}
              onChange={() => setToggle(!toggle)}
            />
            <span> Toggle Mode: {toggle ? "ON " : "OFF "}</span>
          </label>
        </div>

        {/* Conditional Rendering Test */}
        {toggle && (
          <div className="alert-box">
            This alert only appears when the toggle is ON.
          </div>
        )}
      </div>
    </div>
  );
}
