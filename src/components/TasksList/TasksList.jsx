// import clsx from "clsx";
import { useEffect, useState } from "react";
import Task from "../Task/Task";
import TasksActions from "../TasksActions/TasksActions";
import css from "./TasksList.module.css";

export default function TasksList({
  tasks,
  onDeleteAction,
  onClearCompletedAction,
  onFilterAction,
  onCheckedAction,
}) {
  const [taskCounter, setTaskCounter] = useState(0);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.isCompleted);
    setTaskCounter(completedTasks.length);
  }, [tasks]);

  return (
    <div className={css.tasksList}>
      <ul>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              taskData={task}
              onDeleteAction={onDeleteAction}
              onCheckedAction={onCheckedAction}
            />
          );
        })}
      </ul>
      <TasksActions
        taskCounter={taskCounter}
        onClearClick={onClearCompletedAction}
        onFilterClick={onFilterAction}
      />
    </div>
  );
}
