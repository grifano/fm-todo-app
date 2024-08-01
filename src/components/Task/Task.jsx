import { useState } from "react";
import clsx from "clsx";
import Button from "../Button/Button";
import { MdDelete, MdModeEdit } from "react-icons/md";
import css from "./Task.module.css";

export default function Task({ taskData, onDeleteAction, onCheckedAction }) {
  const [isChecked, setIsChecked] = useState(taskData.isCompleted);

  const handleCheckboxChange = () => {
    const newdata = { ...taskData, isCompleted: !isChecked };
    onCheckedAction(newdata);
    setIsChecked(!isChecked);
  };
  const handleDeleteAction = () => {
    onDeleteAction(taskData.id);
  };

  return (
    <li className={css.task}>
      <label className={css.task_checkbox}>
        <input
          className={css.task_checkbox_input}
          type="checkbox"
          name="isCompleted"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={clsx(css.task_checkbox_checkmark, {
            [css.checked]: isChecked,
          })}
        ></span>
        <p
          className={clsx(css.task_text, {
            [css.text_checked]: isChecked,
          })}
        >
          {taskData.text}
        </p>
      </label>
      <div className={css.task_action}>
        <Button isDelete="isDelete" onClick={handleDeleteAction}>
          <MdDelete />
        </Button>
        {/* <Button isEdit="isEdit">
          <MdModeEdit />
        </Button> */}
      </div>
    </li>
  );
}
