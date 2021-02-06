import React, { useState } from "react";
import { add } from "../store/action/list";
import { useDispatch } from "react-redux";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const submite = (e) => {
    e.preventDefault();
    console.log("Add ok");
    dispatch(add(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={submite}>
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

export default Form;
