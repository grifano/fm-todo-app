import clsx from "clsx";
import css from "./TasksActions.module.css";
import { useState } from "react";

export default function TasksActions({
  taskCounter,
  onClearClick,
  onFilterClick,
}) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleChange = (event) => {
    const currentValue = event.target.value;
    onFilterClick(currentValue);
    setSelectedFilter(currentValue);
  };

  return (
    <div className={css.tasksActions}>
      <p className={css.tasksActions_counter}>{taskCounter} items left</p>
      <ul className={css.tasksActions_filters}>
        {["All", "Active", "Completed"].map((filter) => (
          <li key={filter}>
            <label
              className={clsx(css.tasksAction_filterLabel, {
                [css.isActive]: selectedFilter === filter,
              })}
            >
              <input
                type="radio"
                name="filter"
                value={filter}
                checked={selectedFilter === filter}
                onChange={handleChange}
              />
              {filter}
            </label>
          </li>
        ))}
      </ul>
      <button className={css.tasksActions_clear} onClick={onClearClick}>
        Clear Completed
      </button>
    </div>
  );
}
