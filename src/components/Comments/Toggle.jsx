import React, { useState } from "react";
import "../../styles/Comments/Toggle.css";

function Toggle({ label, toggled, onClick }) {
  const [isToggled, setIsToggle] = useState(toggled);

  const callback = () => {
    setIsToggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label className="toggle-label">
      <input
        className="toggle-input"
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
      />
      <span className="toggle-span" />
      <strong className="toggle-strong">{label}</strong>
    </label>
  );
}

export default Toggle;
