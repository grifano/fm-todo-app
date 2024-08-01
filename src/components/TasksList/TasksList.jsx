// import clsx from "clsx";
import { useEffect, useState } from "react";
import Task from "../Task/Task";
import TasksActions from "../TasksActions/TasksActions";
import css from "./TasksList.module.css";

export default function TasksList({ tasks }) {
  const [taskCounter, setTaskCounter] = useState(0);
  const handleClearTasks = () => {
    console.log("remove completed");
  };
  const handleFilter = (value) => {
    console.log(value);
  };

  useEffect(() => {
    const getTaskToComplete = () => {
      const taskToComplete = tasks.filter((task) => task.isComplete);
      setTaskCounter(taskToComplete.length);
    };
    getTaskToComplete();
  }, [tasks]);

  return (
    <div className={css.tasksList}>
      <ul>
        {tasks.map((task) => {
          return <Task key={task.id} taskData={task} />;
        })}
      </ul>
      <TasksActions
        taskCounter={taskCounter}
        onClearClick={handleClearTasks}
        onFilterClick={handleFilter}
      />
    </div>
  );
}
