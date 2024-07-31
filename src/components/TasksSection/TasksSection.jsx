import TasksList from "../TasksList/TasksList";
import css from "./TasksSection.module.css";
import { useState, useEffect } from "react";
import InputBox from "../InputBox/InputBox";
import { fetchTasks } from "../../utils/todo-api";
import { addTask } from "../../utils/todo-api";
import Container from "../Container/Container";

export default function TasksSection() {
  const [tasks, setTasks] = useState([]);
  //   const [isError, setIsError] = useState(false);
  //   const [isSuccess, setIsSuccess] = useState(null);

  const addNewTask = async (task) => {
    if (!task) {
      return;
    }

    try {
      const addedTask = await addTask(task);
      const newTask = [...tasks, addedTask];
      setTasks(newTask);
      console.log("new task added successfully!");
    } catch (error) {
      console.log(error.message);
    }
  };

  //   const getfilteredTasks = (isCompleted) => {
  //     if (isCompleted) {
  //       const completedTasks = tasks.filter((task) => task.isCompleted === true);
  //     }
  //   };
  //   const filteredTasks = getfilteredTasks;

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const allTasks = await fetchTasks();
        setTasks(allTasks);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllTasks();
  }, []);

  return (
    <section className={css.tasksSection}>
      <Container>
        <InputBox onSubmit={addNewTask} />
        <TasksList tasks={tasks} />
      </Container>
    </section>
  );
}
