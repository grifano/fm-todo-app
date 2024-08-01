import css from "./EmptyList.module.css";

export default function EmptyList() {
  return (
    <p className={css.emptyList_text}>
      Start adding task by write a task and press Enter
    </p>
  );
}
