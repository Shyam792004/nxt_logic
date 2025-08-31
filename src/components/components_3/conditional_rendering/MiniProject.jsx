import React, { useState } from "react";

const MiniProject = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

    </div>
  );
};

export default MiniProject;
