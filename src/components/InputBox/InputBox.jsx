import { useState } from "react";
import css from "./InputBox.module.css";

export default function InputBox({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      alert("not should be empty!"); //TODO: Replace with toast
      return;
    }
    const newTask = {
      id: "",
      text: value,
      isCompleted: false,
    };
    onSubmit(newTask);
    setValue("");
  };

  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  return (
    <form className={css.inputBox} onSubmit={handleSubmit}>
      <input
        className={css.inputBox_field}
        type="text"
        name="text"
        placeholder="Create a new todo..."
        onChange={handleOnChange}
        value={value}
      />
    </form>
  );
}
