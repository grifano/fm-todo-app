// TasksSection.jsx
import TasksList from "../TasksList/TasksList";
import css from "./TasksSection.module.css";
import { useState, useEffect, useCallback } from "react";
import InputBox from "../InputBox/InputBox";
import {
  fetchTasks,
  removeTask,
  addTask,
  updateTask,
} from "../../utils/todo-api";
import Container from "../Container/Container";
import toast from "react-hot-toast";
import EmptyList from "../EmptyList/EmptyList";

export default function TasksSection() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const allTasks = await fetchTasks();
        setTasks(allTasks);
      } catch (error) {
        toast.error("Oups! Something went wrong, try reload the page ");
        console.log(error.message);
      }
    };
    getAllTasks();
  }, []);

  const addNewTask = async (task) => {
    if (!task) return;

    try {
      const addedTask = await addTask(task);
      setTasks((prevTasks) => [...prevTasks, addedTask]);
    } catch (error) {
      toast.warning("Oups! Something went wrong, try reload the page ");
      console.log(error.message);
    }
  };

  const handleClearTasks = () => {
    const remainingTasks = tasks.filter((task) => !task.isCompleted);
    setTasks(remainingTasks);
  };

  const handleFilterTasks = (value) => {
    setFilter(value);
  };

  const handleTaskChecked = async (updatedTask) => {
    try {
      await updateTask(updatedTask.id, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteTask = async (deletedTaskId) => {
    try {
      await removeTask(deletedTaskId);
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== deletedTaskId)
      );
      toast.success("Task deleted.");
    } catch (error) {
      toast.error("Oups! Something went wrong, try reload the page ");
      console.log(error.message);
    }
  };

  const getFilteredTasks = useCallback(() => {
    if (filter === "Completed") {
      return tasks.filter((task) => task.isCompleted);
    } else if (filter === "Active") {
      return tasks.filter((task) => !task.isCompleted);
    } else {
      return tasks;
    }
  }, [tasks, filter]);

  return (
    <section className={css.tasksSection}>
      <Container>
        <InputBox onSubmit={addNewTask} />
        {tasks.length > 0 ? (
          <TasksList
            tasks={getFilteredTasks()}
            onDeleteAction={handleDeleteTask}
            onClearCompletedAction={handleClearTasks}
            onFilterAction={handleFilterTasks}
            onCheckedAction={handleTaskChecked}
          />
        ) : (
          <EmptyList />
        )}
      </Container>
    </section>
  );
}
