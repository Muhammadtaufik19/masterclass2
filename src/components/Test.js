import React, { useState } from "react";

const Test = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter new task"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Test;
